"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Gamepad2, Home, Map, Trophy, User } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useProgressStore } from "@/stores/useProgressStore";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/tracks", label: "Tracks", icon: Map },
  { href: "/playground", label: "Play", icon: Gamepad2 },
  { href: "/profile", label: "Profile", icon: User },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalXP, streak, level } = useProgressStore();

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 h-[var(--nav-height)] border-b border-border bg-card/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            🎮
          </motion.span>
          <span className="text-xl font-bold gradient-text">DevPlay</span>
        </Link>

        {/* Nav Links - Desktop */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <link.icon size={18} />
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-xl bg-primary/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right side - Stats & Theme */}
        <div className="flex items-center gap-3">
          {/* XP Badge */}
          <div className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary sm:flex">
            <Trophy size={14} />
            <span>{totalXP} XP</span>
          </div>

          {/* Streak */}
          {streak > 0 && (
            <div className="hidden items-center gap-1 rounded-full bg-warning/10 px-3 py-1.5 text-sm font-semibold text-warning sm:flex">
              🔥 {streak}
            </div>
          )}

          {/* Level */}
          <div className="hidden items-center rounded-full bg-accent/10 px-3 py-1.5 text-sm font-semibold text-accent sm:flex">
            Lv.{level}
          </div>

          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t border-border bg-card/90 px-2 py-2 backdrop-blur-md sm:hidden">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-colors",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <link.icon size={20} />
              <span>{link.label}</span>
              {isActive && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute -bottom-0.5 h-0.5 w-8 rounded-full bg-primary"
                />
              )}
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
