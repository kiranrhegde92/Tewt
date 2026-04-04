import { Lesson } from "@/types";

export const aiEvaluation: Lesson = {
  id: "ai-evaluation",
  trackId: "ai-odyssey",
  title: "Evaluation, Metrics, and Model Quality",
  description:
    "Learn how to measure model performance with accuracy, precision, recall, F1, and regression metrics.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "Training alone tells you nothing if you never measure the results. Evaluation is where AI teams stop guessing and start checking whether the model is useful, fair, and reliable on unseen data.",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "The Model Scoreboard",
      panels: [
        {
          illustration: "\u{1F3AF}",
          narration: "Accuracy",
          character: "captain",
          dialogue:
            "Accuracy asks one broad question: how often was the model correct overall?",
          mood: "happy",
        },
        {
          illustration: "\u{1F50E}\u{FE0F}",
          narration: "Precision and recall",
          character: "captain",
          dialogue:
            "When mistakes have different costs, overall accuracy is not enough. You need to know which kind of error the model is making.",
          mood: "thinking",
        },
        {
          illustration: "\u{2696}\u{FE0F}",
          narration: "Real-world tradeoffs",
          character: "captain",
          dialogue:
            "A strong metric is the one that matches the job. Fraud detection, search ranking, and pricing models all care about different failures.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "Count Outcomes Before You Celebrate",
      explanation:
        "Classification metrics start by counting how often the model was right or wrong in each category.",
      code: `tp = 42  # predicted positive, actually positive
fp = 8   # predicted positive, actually negative
fn = 5   # predicted negative, actually positive
tn = 45  # predicted negative, actually negative

precision = tp / (tp + fp)
recall = tp / (tp + fn)
accuracy = (tp + tn) / (tp + fp + fn + tn)`,
      language: "python",
      highlightLines: [1, 2, 3, 4, 6, 7, 8],
    },
    {
      type: "interactive-visual",
      title: "Inside a Confusion Matrix",
      description:
        "Tap the boxes to separate true positives, false positives, false negatives, and true negatives.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "tp", value: "42", type: "number" },
          { name: "fp", value: "8", type: "number" },
          { name: "fn", value: "5", type: "number" },
          { name: "tn", value: "45", type: "number" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Choosing the Right Metric",
      description:
        "A model can look great under one metric and weak under another. You need the score that matches the business risk.",
      steps: [
        {
          icon: "1",
          title: "Accuracy is the broadest summary",
          explanation:
            "Accuracy is useful when classes are balanced and every mistake costs about the same.",
        },
        {
          icon: "2",
          title: "Precision asks how trustworthy positive predictions are",
          explanation:
            "High precision matters when false alarms are expensive, like flagging legitimate payments as fraud.",
        },
        {
          icon: "3",
          title: "Recall asks how many real positives were found",
          explanation:
            "High recall matters when missing a true case is costly, like screening for disease or catching abuse.",
        },
        {
          icon: "4",
          title: "F1 balances precision and recall",
          explanation:
            "F1 is helpful when both false positives and false negatives matter and you want one combined score.",
        },
        {
          icon: "5",
          title: "Regression needs different metrics",
          explanation:
            "For numeric predictions, teams often use MAE or RMSE to measure how far predictions drifted from the true value.",
          codeSnippet: `mae = average(abs(truth - pred))`,
          language: "python",
        },
      ],
    },
    {
      type: "puzzle",
      instruction: "Put the evaluation workflow in the correct order:",
      codeLines: [
        "metric = compute_metric(truth, preds)",
        "truth = test_labels",
        "preds = model.predict(test_features)",
        "review_failures(preds, truth)",
      ],
      correctOrder: [1, 2, 0, 3],
      language: "python",
      xpBonus: 15,
    },
    {
      type: "match",
      instruction: "Match the metric to what it emphasizes:",
      pairs: [
        { left: "Accuracy", right: "Overall correctness" },
        { left: "Precision", right: "How often predicted positives were truly positive" },
        { left: "Recall", right: "How many real positives the model found" },
        { left: "MAE", right: "Average prediction error for numeric targets" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Which metric matters most for a disease screening model that must avoid missing sick patients?",
      options: ["Precision", "Recall", "Accuracy", "Latency"],
      correctIndex: 1,
      explanation:
        "Recall matters most when false negatives are especially dangerous. Missing a real case is worse than raising extra alerts.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "Now you can judge model quality instead of trusting vibes and demos. Next you meet a different learning style entirely: systems that improve through rewards instead of labeled answer keys.",
      mood: "celebrating",
    },
  ],
};

export const aiEmbeddingsSearch: Lesson = {
  id: "ai-embeddings-search",
  trackId: "ai-odyssey",
  title: "Embeddings and Vector Search",
  description:
    "Understand how embeddings capture meaning, how vector search finds similar content, and why chunking matters in retrieval.",
  xpReward: 185,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "If transformers are the engine, embeddings are the map. They turn text, images, or other signals into coordinates so similar things land near each other in vector space.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Embeddings = Pinning Ideas on a Giant Map",
      analogy:
        "Imagine pinning topics on a wall map. Articles about Java land near other Java articles, and recipes land far away, even if some words overlap.",
      realWorld: "Wall Map of Topics",
      realWorldEmoji: "\u{1F5FA}\u{FE0F}",
      codeConcept: "Embedding Space",
      codeConceptEmoji: "\u{1F9ED}",
      mappings: [
        { real: "Nearby pins", code: "high semantic similarity" },
        { real: "Faraway pins", code: "low semantic similarity" },
        { real: "Search from a new pin", code: "embed the user query" },
        { real: "Find closest neighbors", code: "vector search" },
      ],
      conclusion:
        "Embeddings make retrieval semantic. Instead of matching only exact words, the system searches for nearby meaning.",
    },
    {
      type: "code",
      title: "Embed the Query, Then Search",
      explanation:
        "A typical retrieval pipeline turns the user query into a vector, then searches stored document vectors for the nearest neighbors.",
      code: `query_vec = embed("How does garbage collection work?")
matches = vector_index.search(query_vec, k=3)

for match in matches:
    print(match["title"], match["score"])`,
      language: "python",
      highlightLines: [1, 2, 4],
    },
    {
      type: "interactive-visual",
      title: "A Tiny Vector Search Pipeline",
      description:
        "Push the stack to see how a query becomes an embedding, gets searched, and returns the best chunks.",
      visualType: "call-stack",
      config: {
        frames: ["embed_query()", "search_index()", "rank_neighbors()", "return_chunks()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "What Makes Retrieval Work",
      description:
        "Good vector search depends on more than just calling an embedding model once.",
      steps: [
        {
          icon: "1",
          title: "Embeddings are dense numeric representations",
          explanation:
            "A single vector captures many semantic signals at once, which is why similar ideas can end up close together even with different wording.",
        },
        {
          icon: "2",
          title: "Similarity is usually measured with distance or angle",
          explanation:
            "Systems often compare vectors with cosine similarity or related distance measures to find the nearest neighbors.",
          codeSnippet: `similarity = cosine(query_vec, doc_vec)`,
          language: "python",
        },
        {
          icon: "3",
          title: "Chunking controls retrieval quality",
          explanation:
            "If documents are split too broadly, retrieval gets noisy. If they are split too narrowly, the answer may lose needed context.",
        },
        {
          icon: "4",
          title: "Metadata helps narrow the search space",
          explanation:
            "Many systems filter by source, date, product, or user permissions before ranking semantic matches.",
        },
        {
          icon: "5",
          title: "Hybrid retrieval often beats pure vector search",
          explanation:
            "Strong systems often combine semantic search with keyword or metadata filters instead of trusting one ranking signal alone.",
        },
      ],
    },
    {
      type: "code",
      title: "Chunking Before Indexing",
      explanation:
        "Large documents are often split into smaller chunks so retrieval can return the specific part that answers the user.",
      code: `chunks = split_document(doc, chunk_size=400, overlap=40)
vectors = [embed(chunk) for chunk in chunks]
vector_index.add(chunks, vectors)`,
      language: "python",
      highlightLines: [1, 2, 3],
    },
    {
      type: "match",
      instruction: "Match the retrieval term to its role:",
      pairs: [
        { left: "Embedding", right: "Numeric representation of meaning" },
        { left: "Chunking", right: "Splitting source material into retrievable pieces" },
        { left: "Vector search", right: "Finding the nearest semantic neighbors" },
        { left: "Metadata filter", right: "Restricting which documents are eligible" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Why do many RAG systems split large documents into chunks before indexing them?",
      options: [
        "To delete the original source",
        "To retrieve the most relevant passage instead of an entire huge document",
        "To avoid using embeddings",
        "To convert text into labels",
      ],
      correctIndex: 1,
      explanation:
        "Chunking helps retrieval bring back the section that actually answers the question, which makes the final prompt more focused.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Now retrieval is no longer magic. You know how meaning turns into vectors and how the nearest chunks get pulled back. Next you will see how similar ranking ideas power one of the most common AI products people use every day: recommendation systems.",
      mood: "celebrating",
    },
  ],
};
