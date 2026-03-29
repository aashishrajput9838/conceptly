export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ExplanationTopic {
  Beginner: string;
  Intermediate: string;
  Advanced: string;
}

export const mockExplanations: Record<string, ExplanationTopic> = {
  "newton's second law": {
    Beginner: "Newton's Second Law means that heavier things are harder to push. If you want a heavy box to move as fast as a light box, you have to push the heavy box much harder.",
    Intermediate: "Newton's Second Law states that the acceleration of an object depends on the mass of the object and the amount of force applied (Force = mass × acceleration).",
    Advanced: "Newton's Second Law describes the mathematical relationship between net force, mass, and acceleration as F = dp/dt. For constant mass, this simplifies to F = ma, where F is a vector denoting the net force, m is scalar mass, and a is the acceleration vector."
  },
  "photosynthesis": {
    Beginner: "Photosynthesis is how plants make their own food. They use sunlight, water, and air to create sugar, which gives them energy to grow.",
    Intermediate: "Photosynthesis is the process used by plants, algae, and certain bacteria to harness energy from sunlight and turn it into chemical energy, specifically glucose, using carbon dioxide and water.",
    Advanced: "Photosynthesis is a complex biochemical process where light energy is converted into chemical energy via light-dependent and light-independent reactions (Calvin cycle). It involves the photolysis of water, reduction of NADP+ to NADPH, and the phosphorylation of ADP to ATP."
  },
  "java inheritance": {
    Beginner: "Inheritance allows one class to use the properties and methods of another class.",
    Intermediate: "Inheritance in Java allows a subclass to acquire fields and methods from a parent class using the 'extends' keyword, helping developers avoid writing the same code twice.",
    Advanced: "Inheritance is an object-oriented mechanism that promotes code reusability and hierarchical relationships between classes while enabling method overriding and runtime polymorphism. In Java, multiple inheritance of state is not supported to prevent the Diamond Problem."
  },
  "recursion": {
    Beginner: "Recursion is when a computer program calls itself to solve a problem, kind of like a set of Russian nesting dolls getting smaller and smaller.",
    Intermediate: "Recursion is a programming technique where a function calls itself repeatedly until it reaches a base condition that stops the loop.",
    Advanced: "Recursion relies on the Call Stack to evaluate deferred operations. Each recursive call allocates a new stack frame holding local arguments. To prevent stack overflow, tail-call optimization can be used in supported languages, converting recursion into iteration at compile time."
  },
  "binary search": {
    Beginner: "Binary Search is a fast way to find an item in a sorted list. You look at the middle item, check if your item is higher or lower, and cut the list in half.",
    Intermediate: "Binary Search is a divide-and-conquer algorithm that repeatedly halves the search interval in a sorted array, reducing the time complexity compared to a linear search.",
    Advanced: "Binary Search operates with a time complexity of O(log n). It algorithmically narrows down the search space by comparing the target value to the middle element, updating low or high pointers until the value is matched or pointers cross."
  },
  "machine learning": {
    Beginner: "Machine learning is a way of teaching computers to do things by showing them examples, instead of typing out exact instructions.",
    Intermediate: "Machine learning is a subset of AI that uses statistical models to enable computer systems to improve their performance on a specific task through experience (data) without being explicitly programmed.",
    Advanced: "Machine learning encompasses supervised, unsupervised, and reinforcement algorithms optimizing a loss function. It utilizes backpropagation, gradient descent, and high-dimensional vector spaces to probabilistically infer patterns and map inputs to predicted outputs."
  }
};

export const getFallbackExplanation = (topic: string): ExplanationTopic => {
  return {
    Beginner: `Sorry, Conceptly AI does not have the topic "${topic}" simplified yet. Try topics like Recursion, Java Inheritance, or Photosynthesis.`,
    Intermediate: `Sorry, Conceptly AI does not have the topic "${topic}" mapped in our intermediate database. Please try exact matches like 'Binary Search' or 'Machine Learning'.`,
    Advanced: `Unresolved entity constraint: "${topic}". The Conceptly semantic engine could not locate advanced documentation for this query. Suggested fallbacks: Newton's Second Law, Photosynthesis.`
  };
};
