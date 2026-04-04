"use client";

import Link from "next/link";
import {
  KeyboardEvent,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BookOpen,
  CornerDownLeft,
  Map,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import type { SearchItem } from "@/lib/search";

interface GlobalSearchProps {
  items: SearchItem[];
}

function scoreItem(item: SearchItem, query: string) {
  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const meta = item.meta.toLowerCase();
  let score = 0;

  if (title === query) score += 120;
  if (title.startsWith(query)) score += 90;
  if (title.includes(query)) score += 60;
  if (meta.startsWith(query)) score += 24;
  if (meta.includes(query)) score += 18;
  if (description.includes(query)) score += 16;
  if (item.searchValue.includes(query)) score += 10;
  if (item.kind === "topic") score += 5;
  if (item.kind === "lesson") score += 3;

  return score;
}

function ResultSection({
  items,
  onSelect,
  title,
}: {
  items: SearchItem[];
  onSelect: () => void;
  title: string;
}) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="py-1">
      <p className="px-4 py-2 text-xs font-medium text-muted-foreground">
        {title}
      </p>
      <div>
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={onSelect}
            className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-muted/80"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background text-base">
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {item.kind === "track" ? (
                  <Map size={12} />
                ) : item.kind === "topic" ? (
                  <Sparkles size={12} />
                ) : (
                  <BookOpen size={12} />
                )}
                <span>{item.meta}</span>
              </div>
              <p className="truncate text-sm font-semibold text-foreground">
                {item.title}
              </p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function GlobalSearch({ items }: GlobalSearchProps) {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const results = normalizedQuery
    ? items
        .filter((item) => item.searchValue.includes(normalizedQuery))
        .map((item) => ({ item, score: scoreItem(item, normalizedQuery) }))
        .sort((left, right) => right.score - left.score)
        .slice(0, 10)
        .map(({ item }) => item)
    : [];
  const topicResults = results.filter((item) => item.kind === "topic");
  const lessonResults = results.filter((item) => item.kind === "lesson");
  const trackResults = results.filter((item) => item.kind === "track");

  useEffect(() => {
    setQuery("");
    setIsOpen(false);
  }, [pathname]);

  const closeResults = () => {
    setQuery("");
    setIsOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      closeResults();
      return;
    }

    if (event.key === "Enter" && results[0]) {
      event.preventDefault();
      router.push(results[0].href);
      closeResults();
    }
  };

  return (
    <section className="sticky top-[var(--nav-height)] z-40 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div
          ref={containerRef}
          className="relative mx-auto max-w-3xl"
          onFocusCapture={() => setIsOpen(true)}
          onBlurCapture={(event) => {
            const relatedTarget = event.relatedTarget as Node | null;

            if (!containerRef.current?.contains(relatedTarget)) {
              setIsOpen(false);
            }
          }}
        >
          <div className="relative">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search lessons, tracks, and topics across DevPlay"
              className="h-12 w-full rounded-xl border border-border bg-card pl-11 pr-20 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1">
              {query && (
                <button
                  type="button"
                  onClick={closeResults}
                  aria-label="Clear search"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X size={16} />
                </button>
              )}
              <div className="hidden items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground sm:inline-flex">
                <CornerDownLeft size={12} />
                Open
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] overflow-hidden rounded-xl border border-border bg-card shadow-sm">
              {normalizedQuery.length === 0 ? (
                <div className="px-4 py-3 text-sm text-muted-foreground">
                  Search for JVM, streams, inheritance, docker, or binary
                  search.
                </div>
              ) : results.length === 0 ? (
                <div className="px-4 py-3 text-sm text-muted-foreground">
                  No matches yet. Try a broader topic or a lesson name.
                </div>
              ) : (
                <div className="max-h-[60vh] overflow-y-auto py-2">
                  <ResultSection
                    items={topicResults}
                    onSelect={closeResults}
                    title="Topics"
                  />
                  <ResultSection
                    items={lessonResults}
                    onSelect={closeResults}
                    title="Lessons"
                  />
                  <ResultSection
                    items={trackResults}
                    onSelect={closeResults}
                    title="Tracks"
                  />
                </div>
              )}
            </div>
          )}

          <p className="mt-2 px-1 text-sm text-muted-foreground">
            Search by concept, lesson, or track from anywhere in the app.
          </p>
        </div>
      </div>
    </section>
  );
}
