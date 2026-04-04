import { Lesson } from "@/types";

export const aiFoundations: Lesson = {
  id: "ai-foundations",
  trackId: "ai-odyssey",
  title: "AI Foundations & Vocabulary",
  description:
    "Understand what AI, machine learning, deep learning, models, training, and inference actually mean.",
  xpReward: 150,
  difficulty: "beginner",
  estimatedMinutes: 13,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Welcome to AI Odyssey. Before anyone builds smart systems, they need the map: AI is the broad field, machine learning is one powerful approach inside it, and deep learning is a neural-network-heavy branch inside machine learning.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The AI Family Tree",
      panels: [
        {
          illustration: "\u{1F916}",
          narration: "Artificial Intelligence",
          character: "pixel",
          dialogue:
            "AI is the big umbrella: any system designed to perform tasks that feel intelligent, like reasoning, prediction, or language understanding.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4C8}",
          narration: "Machine Learning",
          character: "pixel",
          dialogue:
            "Machine learning is how many modern AI systems improve from examples instead of only hand-written rules.",
          mood: "happy",
        },
        {
          illustration: "\u{1F9E0}",
          narration: "Deep Learning",
          character: "pixel",
          dialogue:
            "Deep learning uses layered neural networks to learn complex patterns from huge amounts of data.",
          mood: "excited",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Training a Model = Training a New Apprentice",
      analogy:
        "An AI model is like an apprentice who studies examples, receives corrections, and slowly gets better at making decisions alone.",
      realWorld: "Workshop Apprentice",
      realWorldEmoji: "\u{1F9F0}",
      codeConcept: "AI Model Training",
      codeConceptEmoji: "\u{1F916}",
      mappings: [
        { real: "Practice examples", code: "training data" },
        { real: "Teacher corrections", code: "loss and feedback" },
        { real: "Skill improving over time", code: "learning during training" },
        { real: "Doing the job alone", code: "inference after training" },
      ],
      conclusion:
        "Training is the learning phase. Inference is the using phase. Mixing those up makes AI feel mysterious when it is really just a pipeline.",
    },
    {
      type: "code",
      title: "Training vs Inference in Tiny Pseudocode",
      explanation:
        "This sketch separates the two big phases of AI work: fitting the model on examples, then using it to predict on something new.",
      code: `# training
model.fit(training_examples, labels)

# inference
prediction = model.predict(new_example)
print(prediction)`,
      language: "python",
      highlightLines: [2, 5],
    },
    {
      type: "interactive-visual",
      title: "The Three AI Boxes",
      description:
        "Tap each box to see the minimum ingredients of an AI system: data goes in, a model processes it, and a prediction comes out.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "data", value: '"images"', type: "string" },
          { name: "model", value: '"trained net"', type: "string" },
          { name: "output", value: '"cat"', type: "string" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Core AI Vocabulary",
      description:
        "These terms show up everywhere in AI. If you understand them cleanly, the rest of the track becomes much easier.",
      steps: [
        {
          icon: "1",
          title: "A model is a function with learned behavior",
          explanation:
            "A model takes input and produces output. Training changes its internal parameters so it makes better predictions.",
          codeSnippet: `prediction = model(input_data)`,
          language: "python",
        },
        {
          icon: "2",
          title: "Training teaches the model from examples",
          explanation:
            "During training, the model compares its guesses with the correct answers and adjusts itself.",
        },
        {
          icon: "3",
          title: "Inference is the model doing the real job",
          explanation:
            "Once trained, the model is used on new inputs to classify, generate, rank, summarize, or predict.",
        },
        {
          icon: "4",
          title: "Parameters store what the model learned",
          explanation:
            "Parameters are the knobs inside the model. Training tunes them until the model captures patterns in the data.",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the AI term to what it actually means:",
      pairs: [
        { left: "AI", right: "The broad field of intelligent systems" },
        { left: "Machine learning", right: "Learning patterns from examples" },
        { left: "Training", right: "Updating a model from data and feedback" },
        { left: "Inference", right: "Using a trained model on new input" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Which phase happens after the model has already learned from examples?",
      options: ["Training", "Inference", "Labeling", "Preprocessing"],
      correctIndex: 1,
      explanation:
        "Inference is the phase where the trained model is used to make predictions on new inputs.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Now the vocabulary is grounded. Next you go into the data lab, because even brilliant models are useless when the examples feeding them are messy or misleading.",
      mood: "celebrating",
    },
  ],
};

export const aiDataLab: Lesson = {
  id: "ai-data-lab",
  trackId: "ai-odyssey",
  title: "Data, Features, and Labels",
  description:
    "Learn how examples become datasets, how features describe them, and why labels and splits matter.",
  xpReward: 160,
  difficulty: "beginner",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "The fastest way to ruin an AI system is bad data. Models learn whatever the dataset teaches them, which means weak labels, missing values, and biased examples create weak behavior.",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "Inside the Data Warehouse",
      panels: [
        {
          illustration: "\u{1F4E5}",
          narration: "Raw data",
          character: "stackie",
          dialogue:
            "Raw data is the messy pile: rows, text, images, logs, audio, and measurements before anyone cleans or organizes them.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F3F7}\u{FE0F}",
          narration: "Labels",
          character: "stackie",
          dialogue:
            "Labels are the answers you want the model to learn from, like spam/not spam or house price.",
          mood: "happy",
        },
        {
          illustration: "\u{1F50D}",
          narration: "Features",
          character: "stackie",
          dialogue:
            "Features are the signals that help the model decide. Good features make learning easier.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "A Tiny Tabular Dataset",
      explanation:
        "Each row is one example. Some columns are features, and one column is the label the model should learn to predict.",
      code: `rows = [
    {"hours_studied": 2, "practice_tests": 1, "passed": 0},
    {"hours_studied": 5, "practice_tests": 3, "passed": 1},
    {"hours_studied": 7, "practice_tests": 4, "passed": 1},
]

features = ["hours_studied", "practice_tests"]
label = "passed"`,
      language: "python",
      highlightLines: [2, 3, 4, 7, 8],
    },
    {
      type: "interactive-visual",
      title: "One Example, Three Roles",
      description:
        "Tap the boxes to separate a feature vector, a target label, and the dataset split it belongs to.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "features", value: "[5, 3]", type: "string" },
          { name: "label", value: "passed", type: "string" },
          { name: "split", value: "train", type: "string" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "The Data Pipeline",
      description:
        "Good AI work starts with clean datasets and careful boundaries between training and evaluation.",
      steps: [
        {
          icon: "1",
          title: "Features describe the input",
          explanation:
            "Features are the pieces of evidence the model gets. In tabular data they are columns. In text they might be token patterns. In images they are pixel structures.",
        },
        {
          icon: "2",
          title: "Labels tell the model the correct answer",
          explanation:
            "In supervised learning, labels are what the model is trying to predict from the features.",
        },
        {
          icon: "3",
          title: "Train, validation, and test splits have different jobs",
          explanation:
            "Training teaches the model. Validation helps tune it. Test data gives a fair final check on unseen examples.",
          codeSnippet: `train -> learn\nvalidation -> tune\ntest -> final check`,
          language: "python",
        },
        {
          icon: "4",
          title: "Data leakage makes results look better than they are",
          explanation:
            "If test information sneaks into training, the model may appear impressive while secretly just memorizing unfair clues.",
        },
      ],
    },
    {
      type: "code",
      title: "Local vs Global Signals in a Dataset",
      explanation:
        "A feature can be useful, noisy, or misleading. The real skill is knowing which columns help and which ones fool the model.",
      code: `candidate_features = [
    "hours_studied",
    "practice_tests",
    "favorite_color",
]

# strong signals often help more than random trivia`,
      language: "python",
      highlightLines: [2, 3, 4],
    },
    {
      type: "match",
      instruction: "Match the data term to its role:",
      pairs: [
        { left: "Feature", right: "Input signal used to make a prediction" },
        { left: "Label", right: "Correct answer for training" },
        { left: "Training set", right: "Examples used to fit the model" },
        { left: "Test set", right: "Held-out data for final evaluation" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Why should the test set stay separate from training?",
      options: [
        "To make the code shorter",
        "To give a fair check on unseen data",
        "To reduce the number of features",
        "To avoid using labels",
      ],
      correctIndex: 1,
      explanation:
        "The test set is meant to simulate new, unseen examples. Mixing it into training ruins that fairness.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Now you know what the model sees and how examples are organized. Next comes the first major learning style: supervised learning, where the answers are known during training.",
      mood: "celebrating",
    },
  ],
};

export const aiSupervised: Lesson = {
  id: "ai-supervised",
  trackId: "ai-odyssey",
  title: "Supervised Learning",
  description:
    "Understand classification, regression, model fit, and how supervised systems learn from labeled examples.",
  xpReward: 170,
  difficulty: "beginner",
  estimatedMinutes: 14,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Supervised learning is the classic classroom setup: the model sees examples with correct answers and tries to learn the rule that connects them.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "Supervised Learning = Coach With Answer Keys",
      analogy:
        "A supervised model is like a player practicing with a coach who already knows the correct answer after every drill.",
      realWorld: "Sports Coach",
      realWorldEmoji: "\u{1F3C6}",
      codeConcept: "Supervised Learning",
      codeConceptEmoji: "\u{1F4C8}",
      mappings: [
        { real: "Practice drills", code: "labeled training examples" },
        { real: "Correct answer after each attempt", code: "ground-truth label" },
        { real: "Player improving from feedback", code: "model learning from loss" },
        { real: "Game-day performance", code: "generalization on new data" },
      ],
      conclusion:
        "The whole point of supervised learning is not just getting training answers right, but learning a rule that still works on new inputs.",
    },
    {
      type: "code",
      title: "Classification vs Regression",
      explanation:
        "Supervised learning covers both predicting categories and predicting numbers.",
      code: `# classification
spam_or_not = classifier.predict(email)

# regression
predicted_price = regressor.predict(house_features)`,
      language: "python",
      highlightLines: [2, 5],
    },
    {
      type: "concept-breakdown",
      title: "What Supervised Models Are Really Doing",
      description:
        "Once you strip away the hype, supervised learning is about fitting a function from inputs to known targets.",
      steps: [
        {
          icon: "1",
          title: "Classification predicts categories",
          explanation:
            "Examples include spam detection, disease screening, sentiment analysis, and image labels like cat or dog.",
        },
        {
          icon: "2",
          title: "Regression predicts continuous values",
          explanation:
            "Examples include temperature, sales, travel time, or price forecasts.",
        },
        {
          icon: "3",
          title: "Overfitting means memorizing too much",
          explanation:
            "A model that clings too tightly to the training data may fail badly on new examples, even if its training score looks excellent.",
        },
        {
          icon: "4",
          title: "Underfitting means the model is too weak",
          explanation:
            "If the model cannot capture the real pattern, it performs poorly on both training data and new data.",
        },
      ],
    },
    {
      type: "code",
      title: "A Tiny Evaluation Snapshot",
      explanation:
        "Good evaluation asks whether the prediction matched the truth, not whether the model sounded confident.",
      code: `truth = [1, 0, 1, 1]
preds = [1, 0, 0, 1]

correct = sum(t == p for t, p in zip(truth, preds))
accuracy = correct / len(truth)`,
      language: "python",
      highlightLines: [1, 2, 4, 5],
    },
    {
      type: "match",
      instruction: "Match the supervised task to the right output type:",
      pairs: [
        { left: "Spam detection", right: "Classification" },
        { left: "House price prediction", right: "Regression" },
        { left: "Overfitting", right: "Great on training, weak on new data" },
        { left: "Underfitting", right: "Weak on both training and new data" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Which problem is a regression task?",
      options: [
        "Classifying reviews as positive or negative",
        "Predicting the next day's temperature",
        "Detecting whether an image is a cat",
        "Sorting emails into spam or not spam",
      ],
      correctIndex: 1,
      explanation:
        "Regression is used when the model predicts a continuous numeric value, such as price or temperature.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You can now separate category prediction from numeric prediction and spot the dangers of overfitting. Next comes unsupervised learning, where the model must find structure without answer keys.",
      mood: "celebrating",
    },
  ],
};

export const aiUnsupervised: Lesson = {
  id: "ai-unsupervised",
  trackId: "ai-odyssey",
  title: "Unsupervised Learning",
  description:
    "Learn how clustering, dimensionality reduction, and anomaly detection find patterns without labels.",
  xpReward: 170,
  difficulty: "intermediate",
  estimatedMinutes: 13,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Unsupervised learning is pattern hunting without an answer key. The model gets examples, but nobody tells it the correct group or target ahead of time.",
      mood: "thinking",
    },
    {
      type: "comic",
      title: "The Sorting Room Without Labels",
      panels: [
        {
          illustration: "\u{1F4E6}",
          narration: "Mixed pile",
          character: "stackie",
          dialogue:
            "The data arrives as a big mixed pile. No one has labeled which items belong together.",
          mood: "confused",
        },
        {
          illustration: "\u{1F9F2}",
          narration: "Clusters appear",
          character: "stackie",
          dialogue:
            "The algorithm groups similar examples based on their patterns, distances, or structure.",
          mood: "excited",
        },
        {
          illustration: "\u{1F6A8}",
          narration: "Outlier spotted",
          character: "stackie",
          dialogue:
            "Some examples do not fit any clear group. Those strange outliers can be valuable warnings.",
          mood: "happy",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Clustering = Sorting a Box of Mystery Buttons",
      analogy:
        "Imagine dumping a box of buttons onto a table and grouping them by size, color, and shape without anyone telling you the right categories.",
      realWorld: "Sorting Buttons",
      realWorldEmoji: "\u{1F9F5}",
      codeConcept: "Clustering and Pattern Discovery",
      codeConceptEmoji: "\u{1F9E9}",
      mappings: [
        { real: "No answer sheet", code: "no labels" },
        { real: "Group similar buttons", code: "cluster nearby examples" },
        { real: "Flatten many traits into a smaller sketch", code: "dimensionality reduction" },
        { real: "Odd button that matches nothing", code: "anomaly detection" },
      ],
      conclusion:
        "Unsupervised learning is less about right-or-wrong targets and more about revealing hidden structure in the data.",
    },
    {
      type: "code",
      title: "A Tiny Clustering Loop",
      explanation:
        "This pseudocode captures the core idea behind k-means: assign examples to centers, then move the centers to match the assigned groups.",
      code: `repeat until stable:
    assign each point to the nearest center
    recompute each center from its assigned points`,
      language: "python",
      highlightLines: [2, 3],
    },
    {
      type: "concept-breakdown",
      title: "Three Big Unsupervised Jobs",
      description:
        "Unsupervised learning is not one trick. It is a family of techniques for discovering structure, simplifying data, and spotting surprises.",
      steps: [
        {
          icon: "1",
          title: "Clustering groups similar examples",
          explanation:
            "Clustering is useful for customer segments, topic discovery, grouping similar products, or organizing messy unlabeled collections.",
        },
        {
          icon: "2",
          title: "Dimensionality reduction compresses information",
          explanation:
            "When data has many features, dimensionality reduction can create a smaller representation that still preserves important structure.",
        },
        {
          icon: "3",
          title: "Anomaly detection looks for rare behavior",
          explanation:
            "Fraud detection, unusual machine failures, and strange network events are classic anomaly-detection cases.",
        },
        {
          icon: "4",
          title: "Interpretation matters more than labels",
          explanation:
            "Because there is no single correct target, humans still need to interpret whether the patterns discovered are useful and real.",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the unsupervised concept to its job:",
      pairs: [
        { left: "Clustering", right: "Group similar examples" },
        { left: "Dimensionality reduction", right: "Compress many features into fewer dimensions" },
        { left: "Anomaly detection", right: "Spot unusual examples" },
        { left: "Unsupervised learning", right: "Works without labeled targets" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What makes unsupervised learning different from supervised learning?",
      options: [
        "It only works on images",
        "It needs more memory than all other AI methods",
        "It learns from data without target labels",
        "It cannot use math",
      ],
      correctIndex: 2,
      explanation:
        "Unsupervised learning looks for patterns in the data without being given the correct answer for each example.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Now you can separate answer-key learning from structure-finding. The next stop goes deeper inside the machine itself: neural networks.",
      mood: "celebrating",
    },
  ],
};

export const aiNeuralNetworks: Lesson = {
  id: "ai-neural-networks",
  trackId: "ai-odyssey",
  title: "Neural Networks",
  description:
    "Learn how neurons, weights, biases, activations, and layers turn raw input into predictions.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Neural networks sound mystical, but they are really stacks of weighted math. Each layer transforms the input a little, and many layers together can represent very complex patterns.",
      mood: "excited",
    },
    {
      type: "visual-analogy",
      title: "A Neuron = A Tiny Voting Judge",
      analogy:
        "A neuron is like a judge who listens to several signals, gives each one a weight, adds a bias, and then decides how strongly to fire.",
      realWorld: "Voting Judge",
      realWorldEmoji: "\u{2696}\u{FE0F}",
      codeConcept: "Artificial Neuron",
      codeConceptEmoji: "\u{1F9E0}",
      mappings: [
        { real: "Different importance for each clue", code: "weights" },
        { real: "Personal tendency before evidence", code: "bias" },
        { real: "Total score from all clues", code: "weighted sum" },
        { real: "Decision threshold or response shape", code: "activation function" },
      ],
      conclusion:
        "Once you understand one neuron, a whole neural network is just many of them arranged in layers with shared learning rules.",
    },
    {
      type: "code",
      title: "One Neuron in Pseudocode",
      explanation:
        "A neuron multiplies inputs by weights, adds a bias, and then passes the result through an activation function.",
      code: `z = x1 * w1 + x2 * w2 + bias
output = activation(z)`,
      language: "python",
      highlightLines: [1, 2],
    },
    {
      type: "interactive-visual",
      title: "Input, Weight, Output",
      description:
        "Tap the boxes to separate what goes in, what gets learned, and what comes out of a tiny network.",
      visualType: "memory-boxes",
      config: {
        variables: [
          { name: "input", value: "[0.7, 0.2]", type: "string" },
          { name: "weights", value: "[1.3, -0.4]", type: "string" },
          { name: "output", value: "0.81", type: "number" },
        ],
      },
    },
    {
      type: "concept-breakdown",
      title: "Neural Network Building Blocks",
      description:
        "These pieces show up in almost every neural-network explanation, no matter how large the model becomes.",
      steps: [
        {
          icon: "1",
          title: "Inputs are the evidence",
          explanation:
            "Inputs may be pixels, tokens, sensor readings, or structured features. They are the raw material for prediction.",
        },
        {
          icon: "2",
          title: "Weights control signal importance",
          explanation:
            "Learning changes the weights so the network pays more attention to useful patterns and less attention to noise.",
        },
        {
          icon: "3",
          title: "Bias shifts the response",
          explanation:
            "Bias helps the neuron move its output even when all inputs are zero, giving the model more flexibility.",
        },
        {
          icon: "4",
          title: "Activations add nonlinearity",
          explanation:
            "Without nonlinear activation functions, a deep network would collapse into something much less expressive.",
        },
        {
          icon: "5",
          title: "Layers compose simple transforms into complex behavior",
          explanation:
            "Early layers may detect simple patterns. Later layers combine them into richer concepts.",
        },
      ],
    },
    {
      type: "puzzle",
      instruction: "Put the neuron calculation in the right order:",
      codeLines: [
        "z = x1 * w1 + x2 * w2 + bias",
        "output = activation(z)",
      ],
      correctOrder: [0, 1],
      language: "python",
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What is the main job of a weight in a neural network?",
      options: [
        "Store the test dataset",
        "Control how strongly an input affects the output",
        "Replace the activation function",
        "Shuffle the training data",
      ],
      correctIndex: 1,
      explanation:
        "Weights decide how much influence each input signal has on the neuron's output.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "The fog is lifting: neural networks are layered weighted functions, not magic. Next you will see how those weights are actually trained.",
      mood: "celebrating",
    },
  ],
};

export const aiTrainingLoop: Lesson = {
  id: "ai-training-loop",
  trackId: "ai-odyssey",
  title: "Training, Loss, and Optimization",
  description:
    "See how loss, gradients, learning rate, epochs, and optimization turn a weak model into a useful one.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "stackie",
      dialogue:
        "The training loop is the gym where models improve. Each cycle makes a prediction, measures the mistake, pushes that error backward, and nudges the weights in a better direction.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The Training Gym",
      panels: [
        {
          illustration: "\u{1F3AF}",
          narration: "Guess",
          character: "stackie",
          dialogue:
            "The model makes its current best guess based on the weights it has right now.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F4CF}",
          narration: "Measure error",
          character: "stackie",
          dialogue:
            "A loss function scores how wrong that guess was. Bigger loss means worse performance.",
          mood: "confused",
        },
        {
          illustration: "\u{1F4C9}",
          narration: "Improve",
          character: "stackie",
          dialogue:
            "Optimization uses gradients to adjust the weights so the next guess is hopefully better.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "The Training Loop in Pseudocode",
      explanation:
        "This is the backbone of deep learning: forward pass, loss, backward pass, optimizer step.",
      code: `for batch in training_data:
    predictions = model(batch.inputs)
    loss = loss_fn(predictions, batch.labels)
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()`,
      language: "python",
      highlightLines: [2, 3, 4, 5, 6],
    },
    {
      type: "interactive-visual",
      title: "One Training Cycle",
      description:
        "Push the call stack to watch a forward pass, loss calculation, backward pass, and update step unfold in order.",
      visualType: "call-stack",
      config: {
        frames: ["forward()", "loss()", "backward()", "update()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "Training Loop Concepts",
      description:
        "These are the knobs and checkpoints that decide whether a model learns smoothly or gets lost.",
      steps: [
        {
          icon: "1",
          title: "Loss tells the model how wrong it is",
          explanation:
            "Loss is the training signal. Without it, the model has no idea whether its prediction improved or worsened.",
        },
        {
          icon: "2",
          title: "Gradients point toward improvement",
          explanation:
            "Backpropagation computes gradients that show how changing each parameter would change the loss.",
        },
        {
          icon: "3",
          title: "Learning rate controls step size",
          explanation:
            "Too large, and training overshoots. Too small, and training crawls or gets stuck.",
        },
        {
          icon: "4",
          title: "Epochs and batches organize training",
          explanation:
            "An epoch is one full pass over the dataset. Batches split that dataset into smaller chunks for practical training.",
        },
        {
          icon: "5",
          title: "Validation keeps training honest",
          explanation:
            "Validation metrics help you notice overfitting, poor hyperparameters, and weak generalization before deployment.",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the training term to its role:",
      pairs: [
        { left: "Loss", right: "Measures how wrong the model was" },
        { left: "Gradient", right: "Shows how parameters should change" },
        { left: "Learning rate", right: "Controls update size" },
        { left: "Epoch", right: "One full pass over the dataset" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What usually happens if the learning rate is much too high?",
      options: [
        "The model learns perfectly instantly",
        "Training becomes unstable or overshoots good solutions",
        "The labels disappear",
        "The model stops needing validation",
      ],
      correctIndex: 1,
      explanation:
        "A learning rate that is too high can make optimization jump around and miss better regions entirely.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "stackie",
      dialogue:
        "Now you know how the weights actually move. Before chasing bigger architectures, you need to know how to judge whether a model is actually good. Next comes evaluation and metrics.",
      mood: "celebrating",
    },
  ],
};

export const aiTransformers: Lesson = {
  id: "ai-transformers",
  trackId: "ai-odyssey",
  title: "Transformers, Tokens, and Embeddings",
  description:
    "Understand how tokens, embeddings, attention, and context windows power modern language models.",
  xpReward: 190,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "pixel",
      dialogue:
        "Transformers changed AI by getting much better at handling sequences like language. They do not read text as whole paragraphs at once. They break it into tokens, embed those tokens, and use attention to decide what matters most.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "Inside Token City",
      panels: [
        {
          illustration: "\u{1F4DD}",
          narration: "Tokenize",
          character: "pixel",
          dialogue:
            "Text gets chopped into tokens. Tokens are the pieces the model actually works with.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F3AF}",
          narration: "Attend",
          character: "pixel",
          dialogue:
            "Attention lets each token look around and focus on the most relevant neighbors in context.",
          mood: "excited",
        },
        {
          illustration: "\u{27A1}\u{FE0F}",
          narration: "Predict next token",
          character: "pixel",
          dialogue:
            "Generation often happens one token at a time, repeatedly predicting what should come next.",
          mood: "happy",
        },
      ],
    },
    {
      type: "visual-analogy",
      title: "Attention = Reading With a Spotlight",
      analogy:
        "Attention is like reading a sentence with a movable spotlight that brightens the words most relevant to the current word.",
      realWorld: "Spotlight Reader",
      realWorldEmoji: "\u{1F50D}",
      codeConcept: "Self-Attention",
      codeConceptEmoji: "\u{1F4A1}",
      mappings: [
        { real: "Sentence broken into word pieces", code: "tokens" },
        { real: "Spotlight on useful words", code: "attention weights" },
        { real: "Word turned into a numeric signature", code: "embedding" },
        { real: "Only so much text fits on the page", code: "context window" },
      ],
      conclusion:
        "Transformers work because they can represent meaning numerically and dynamically decide which parts of context deserve the most attention.",
    },
    {
      type: "code",
      title: "Token -> Embedding -> Prediction",
      explanation:
        "This simplified flow shows how raw text becomes token ids, then embeddings, then next-token predictions.",
      code: `tokens = tokenizer("AI changes software")
vectors = embed(tokens)
next_token = transformer(vectors)`,
      language: "python",
      highlightLines: [1, 2, 3],
    },
    {
      type: "concept-breakdown",
      title: "Transformer Essentials",
      description:
        "These are the minimum concepts you need to talk about large language models precisely instead of vaguely.",
      steps: [
        {
          icon: "1",
          title: "Tokens are the unit the model sees",
          explanation:
            "A token might be a whole word, part of a word, punctuation, or a special symbol depending on the tokenizer.",
        },
        {
          icon: "2",
          title: "Embeddings turn symbols into vectors",
          explanation:
            "Embeddings map tokens into numeric space so the model can reason about similarity and context mathematically.",
        },
        {
          icon: "3",
          title: "Attention mixes information across context",
          explanation:
            "Instead of reading strictly left to right with one hidden state, attention lets tokens selectively gather information from many other tokens.",
        },
        {
          icon: "4",
          title: "Context window limits how much the model can consider",
          explanation:
            "Only a finite number of tokens fit into one pass. That window shapes what the model can remember directly in a single interaction.",
        },
      ],
    },
    {
      type: "match",
      instruction: "Match the transformer term to the right meaning:",
      pairs: [
        { left: "Token", right: "Small piece of text the model processes" },
        { left: "Embedding", right: "Numeric vector representation of a token" },
        { left: "Attention", right: "Mechanism for focusing on relevant context" },
        { left: "Context window", right: "Maximum amount of text the model can consider at once" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What is the main job of an embedding?",
      options: [
        "Hide the labels from the model",
        "Turn tokens into meaningful numeric representations",
        "Delete the context window",
        "Replace the optimizer",
      ],
      correctIndex: 1,
      explanation:
        "Embeddings convert discrete tokens into vectors so the model can process language with math.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "pixel",
      dialogue:
        "You now have the transformer map: tokenization, embeddings, attention, and context. Next you go deeper on one of those pieces, because embeddings are what make semantic search and retrieval feel smart instead of keyword-only.",
      mood: "celebrating",
    },
  ],
};

export const aiPromptRAG: Lesson = {
  id: "ai-prompt-rag",
  trackId: "ai-odyssey",
  title: "Prompting, Tool Use, and RAG",
  description:
    "Learn how prompts steer models, how tools and structured output add reliability, and how RAG grounds answers in external knowledge.",
  xpReward: 180,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "captain",
      dialogue:
        "A strong model can still fail when the instructions are vague or the needed facts are missing. Prompting shapes the task, tools add capabilities, and retrieval gives the model better evidence before it answers.",
      mood: "excited",
    },
    {
      type: "comic",
      title: "The Prompt Architect and the Library Courier",
      panels: [
        {
          illustration: "\u{1F4DD}",
          narration: "Prompt",
          character: "captain",
          dialogue:
            "A prompt is not just a question. It can include goals, rules, examples, formatting needs, and context.",
          mood: "thinking",
        },
        {
          illustration: "\u{1F527}",
          narration: "Tool use",
          character: "captain",
          dialogue:
            "Sometimes the model should not guess. It should call a tool, query a database, or compute an answer with fresh data.",
          mood: "happy",
        },
        {
          illustration: "\u{1F4DA}",
          narration: "Retrieval",
          character: "captain",
          dialogue:
            "RAG fetches useful source material first, then adds it to the prompt so the model answers with grounded context.",
          mood: "excited",
        },
      ],
    },
    {
      type: "code",
      title: "A Better Prompt Structure",
      explanation:
        "Good prompts state the role, the task, the constraints, and the output format instead of hoping the model guesses all of that.",
      code: `system: You are a patient AI tutor.
user: Explain overfitting for a beginner.
context: Use one analogy and one simple example.
format: Return 3 short paragraphs and 1 bullet list.`,
      language: "text",
      highlightLines: [1, 2, 3, 4],
    },
    {
      type: "interactive-visual",
      title: "Question -> Retrieve -> Answer",
      description:
        "Push the stack to watch a simple RAG pipeline gather documents before generation starts.",
      visualType: "call-stack",
      config: {
        frames: ["question()", "retrieve()", "augment_prompt()", "generate()"],
      },
    },
    {
      type: "concept-breakdown",
      title: "How to Make AI Answers More Reliable",
      description:
        "Prompting, tools, and retrieval each solve a different reliability problem in real AI products.",
      steps: [
        {
          icon: "1",
          title: "Be explicit about task and format",
          explanation:
            "Specific instructions produce more reliable outputs than vague requests like `help me with this`.",
        },
        {
          icon: "2",
          title: "Few-shot examples teach patterns fast",
          explanation:
            "Showing one or two examples often works better than describing the pattern only in words.",
        },
        {
          icon: "3",
          title: "Structured output reduces parsing chaos",
          explanation:
            "If downstream code expects JSON, fields, or a schema, the prompt should say so clearly instead of relying on pretty prose.",
          codeSnippet: `return {"risk_level": "...", "summary": "...", "actions": []}`,
          language: "json",
        },
        {
          icon: "4",
          title: "Tool use is for fresh facts and exact operations",
          explanation:
            "Models are good at language, but tools are better for searching, calculations, and trusted external actions.",
        },
        {
          icon: "5",
          title: "RAG supplies external knowledge at answer time",
          explanation:
            "Retrieval helps when the model needs current or private documents instead of relying only on what was in training.",
        },
      ],
    },
    {
      type: "code",
      title: "A Tiny RAG Sketch",
      explanation:
        "This pseudocode captures the basic RAG flow used in many AI products.",
      code: `docs = retrieve(user_question)
prompt = build_prompt(user_question, docs)
answer = model.generate(prompt)
result = parse_structured_output(answer)`,
      language: "python",
      highlightLines: [1, 2, 3, 4],
    },
    {
      type: "match",
      instruction: "Match the AI product technique to the problem it solves:",
      pairs: [
        { left: "Prompting", right: "Clarifies the task and constraints" },
        { left: "Tool use", right: "Calls external systems for exact work" },
        { left: "RAG", right: "Adds retrieved knowledge before generation" },
        { left: "Structured output", right: "Makes downstream parsing dependable" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "What is the main purpose of RAG?",
      options: [
        "To delete the model's parameters",
        "To ground responses with retrieved context",
        "To remove the need for prompts",
        "To replace evaluation completely",
      ],
      correctIndex: 1,
      explanation:
        "RAG improves answers by retrieving useful source material and including it in the model's working context.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "captain",
      dialogue:
        "Now you know how to steer a model, feed it better evidence, and make it return something your product can actually trust. Next comes a deeper product decision: when should you keep prompting, when should you retrieve, and when is it finally worth fine-tuning the model itself?",
      mood: "celebrating",
    },
  ],
};

export const aiSafety: Lesson = {
  id: "ai-safety",
  trackId: "ai-odyssey",
  title: "Safety, Bias, and Responsible AI",
  description:
    "Understand hallucinations, bias, privacy, prompt injection, and the guardrails that make AI systems safer to ship.",
  xpReward: 175,
  difficulty: "intermediate",
  estimatedMinutes: 15,
  steps: [
    {
      type: "story",
      character: "bug",
      dialogue:
        "A system can be impressive and still be unsafe. AI products affect people, decisions, and trust, which means technical quality alone is not enough. Safety work is product work.",
      mood: "thinking",
    },
    {
      type: "visual-analogy",
      title: "AI Guardrails = City Rules and Safety Rails",
      analogy:
        "A powerful AI system is like a fast train network: useful at scale, but only safe when tracks, signals, and emergency brakes are designed well.",
      realWorld: "Rail Network",
      realWorldEmoji: "\u{1F686}",
      codeConcept: "AI Safety and Governance",
      codeConceptEmoji: "\u{1F6E1}\u{FE0F}",
      mappings: [
        { real: "Bad map of the city", code: "biased or incomplete training data" },
        { real: "Missing warning lights", code: "weak monitoring and evaluation" },
        { real: "No emergency brake", code: "no fallback or human review" },
        { real: "Unsafe routes for passengers", code: "harmful misuse or unfair outcomes" },
      ],
      conclusion:
        "AI safety is not one checkbox. It is the combined discipline of data quality, evaluation, product constraints, and human oversight.",
    },
    {
      type: "code",
      title: "A Simple Safety Gate",
      explanation:
        "Real systems often place lightweight checks around generation before the answer ever reaches the user.",
      code: `answer = model.generate(prompt)

if unsafe(answer):
    answer = "I can't help with that request."

return answer`,
      language: "python",
      highlightLines: [1, 3, 4, 6],
    },
    {
      type: "concept-breakdown",
      title: "The Main AI Safety Risks",
      description:
        "These are the failure modes that teams have to think about before shipping AI into real workflows.",
      steps: [
        {
          icon: "1",
          title: "Bias comes from data and decisions",
          explanation:
            "If the data under-represents people or reflects unfair historical patterns, the model can repeat those patterns at scale.",
        },
        {
          icon: "2",
          title: "Hallucinations look fluent but may be false",
          explanation:
            "Generative models can sound confident while being wrong. That is why grounding and evaluation matter so much.",
        },
        {
          icon: "3",
          title: "Prompt injection tries to hijack system behavior",
          explanation:
            "When models consume external text or tool outputs, malicious content may try to override the original instructions or trick the system into unsafe actions.",
        },
        {
          icon: "4",
          title: "Privacy and security still matter",
          explanation:
            "Sensitive prompts, documents, and outputs need careful handling, especially in enterprise or personal workflows.",
        },
        {
          icon: "5",
          title: "Human-in-the-loop is often a product choice, not a failure",
          explanation:
            "For high-stakes use cases, humans should review, approve, or override the model instead of treating it as infallible.",
        },
      ],
    },
    {
      type: "code",
      title: "A Basic Deployment Checklist",
      explanation:
        "Safer AI systems are built with gates and observability before launch, not added only after something goes wrong.",
      code: `check_data_quality()
run_eval_suite()
add_content_filters()
log_failures()
route_high_risk_cases_to_humans()`,
      language: "python",
      highlightLines: [1, 2, 3, 4, 5],
    },
    {
      type: "match",
      instruction: "Match the safety concern to the right response:",
      pairs: [
        { left: "Bias", right: "Review data and outcomes for unfair patterns" },
        { left: "Hallucination", right: "Ground answers and evaluate factuality" },
        { left: "Prompt injection", right: "Treat external instructions as untrusted input" },
        { left: "High-stakes decision", right: "Add human review and fallback paths" },
      ],
      xpBonus: 15,
    },
    {
      type: "quiz",
      question: "Why is human review important in high-stakes AI systems?",
      options: [
        "Because models are always slow",
        "Because strong outputs can still be wrong or harmful",
        "Because AI cannot process text",
        "Because retrieval stops working without it",
      ],
      correctIndex: 1,
      explanation:
        "In high-stakes settings, even polished model outputs can be incorrect, biased, or unsafe, so human oversight remains essential.",
      xpBonus: 15,
    },
    {
      type: "story",
      character: "bug",
      dialogue:
        "You made it through AI Odyssey. You now understand how AI systems learn, how they retrieve, rank, adapt, act with tools, operate in production, and where responsible teams draw safety boundaries.",
      mood: "celebrating",
    },
  ],
};
