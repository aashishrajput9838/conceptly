import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileQuestion, CheckCircle2, RotateCw, Sparkles, ChevronDown, Check, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

type Question = {
  q: string;
  options: string[];
  answer: number;
};

const MOCK_DB: Record<string, Record<string, Question[]>> = {
  'Java Programming': {
    'Easy': [
      { q: 'What is a class in Java?', options: ['A blueprint for objects', 'A variable type', 'A method', 'A module'], answer: 0 },
      { q: 'How do you print text to the console?', options: ['console.log()', 'System.out.println()', 'print()', 'echo()'], answer: 1 },
      { q: 'What is a boolean?', options: ['A number', 'A string', 'True or False', 'An array'], answer: 2 }
    ],
    'Medium': [
      { q: 'What is inheritance in Java?', options: ['Using multiple databases', 'A class deriving from another class', 'Passing props', 'A security flaw'], answer: 1 },
      { q: 'What is polymorphism?', options: ['Multiple inheritance', 'Many forms of a method', 'A garbage collector', 'A memory leak'], answer: 1 },
      { q: 'Difference between ArrayList and LinkedList?', options: ['One uses arrays, the other doubly-linked lists', 'ArrayList is faster for add/remove', 'LinkedList uses less memory', 'No difference'], answer: 0 }
    ],
    'Hard': [
      { q: 'Explain the Java Memory Model.', options: ['Manages thread visibility', 'Manages disk space', 'Manages cloud storage', 'It is deprecated'], answer: 0 },
      { q: 'How does G1GC work?', options: ['It does not collect garbage', 'Divides heap into regions', 'Uses reference counting', 'Deletes random objects'], answer: 1 },
      { q: 'What is a ClassLoader?', options: ['Loads classes into JVM', 'Loads CSS files', 'A variable type', 'A design pattern'], answer: 0 }
    ]
  },
  'Physics': {
    'Easy': [
      { q: "What is Newton's First Law?", options: ['F=ma', 'Action and reaction', 'Inertia', 'Gravity'], answer: 2 },
      { q: 'Define velocity.', options: ['Speed', 'Speed with direction', 'Acceleration', 'Mass'], answer: 1 },
      { q: 'What is gravity?', options: ['A force pulling objects together', 'A pushing force', 'A type of energy', 'A chemical'], answer: 0 }
    ],
    'Medium': [
      { q: 'Kinetic energy of 5kg mass at 10m/s?', options: ['250J', '50J', '100J', '500J'], answer: 0 },
      { q: 'What is conservation of momentum?', options: ['Total momentum is constant', 'Momentum increases', 'Momentum decreases', 'Momentum is mass'], answer: 0 },
      { q: 'Explain Bernoulli\'s principle.', options: ['Higher velocity = lower pressure', 'Higher velocity = higher pressure', 'Velocity = pressure', 'Pressure is constant'], answer: 0 }
    ],
    'Hard': [
      { q: 'Equation of motion for damped harmonic oscillator?', options: ['mx" + cx\' + kx = 0', 'F=ma', 'E=mc2', 'v = u + at'], answer: 0 },
      { q: 'Trajectory with air resistance?', options: ['Parabola', 'Hyperbola', 'Not a perfect parabola', 'Straight line'], answer: 2 },
      { q: 'Explain Twin Paradox.', options: ['Time dilation due to relativity', 'Genetics', 'Light bending', 'Quantum entanglement'], answer: 0 }
    ]
  },
  'Mathematics': {
    'Easy': [
      { q: 'What is 5 x 5?', options: ['10', '25', '20', '30'], answer: 1 },
      { q: 'What is the sum of angles in a triangle?', options: ['90', '180', '360', '270'], answer: 1 },
      { q: 'What is pi?', options: ['Ratio of circumference to diameter', 'A fruit', 'Ratio of radius to area', 'Exactly 3.14'], answer: 0 }
    ],
    'Medium': [
      { q: 'Derivative of x^2?', options: ['x', '2x', 'x/2', 'x^3'], answer: 1 },
      { q: 'Integral of 2x?', options: ['x^2', 'x^2 + C', '2x^2', '2'], answer: 1 },
      { q: 'What is a prime number?', options: ['Divisible only by 1 and itself', 'Even numbers', 'Odd numbers', 'Divisible by 2'], answer: 0 }
    ],
    'Hard': [
      { q: 'What is Euler\'s formula?', options: ['e^(i*pi) + 1 = 0', 'a^2 + b^2 = c^2', 'F=ma', 'E=mc^2'], answer: 0 },
      { q: 'What is a Riemann sum?', options: ['Approximation of an integral', 'A type of derivative', 'A sequence', 'A matrix'], answer: 0 },
      { q: 'What is a manifold?', options: ['A topological space', 'A car part', 'A type of probability', 'A group'], answer: 0 }
    ]
  }
};

export const QuizGeneratorSection = () => {
  const { activeQuizTopic, setActiveQuizTopic, updateStatsFromQuiz } = useAppContext();
  
  const [difficulty, setDifficulty] = useState('Medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizState, setQuizState] = useState<'config' | 'taking' | 'result'>('config');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const topics = Object.keys(MOCK_DB);

  // If active topic changes from outside (SubjectsSection), update internal
  useEffect(() => {
    if (!topics.includes(activeQuizTopic)) {
      setActiveQuizTopic('Java Programming');
    }
  }, [activeQuizTopic, setActiveQuizTopic, topics]);

  const handleGenerate = () => {
    setIsGenerating(true);
    setQuizState('config'); // Reset if re-generating
    
    // Simulate generation delay
    setTimeout(() => {
      const topicData = MOCK_DB[activeQuizTopic] || MOCK_DB['Java Programming'];
      setQuestions(topicData[difficulty]);
      setAnswers([]);
      setIsGenerating(false);
      setQuizState('taking');
    }, 1500);
  };

  const selectAnswer = (qIndex: number, optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const submitQuiz = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    
    // Update Global Context
    updateStatsFromQuiz(score, questions.length);
    setQuizState('result');
  };

  const calculateScore = () => {
    if (questions.length === 0) return 0;
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });
    return score;
  };

  return (
    <section id="quiz" className="py-24 bg-[#0f172a] relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative"
        >
          <div className="glass border border-white/5 p-8 rounded-2xl shadow-2xl relative z-20 bg-[#1e293b]/80 min-h-[500px] flex flex-col">
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-inner">
                  <FileQuestion className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Interactive Quiz</h3>
                  <p className="text-sm text-blue-400">{quizState === 'taking' ? 'Test In Progress' : quizState === 'result' ? 'Quiz Completed' : 'AI Context Loading'}</p>
                </div>
              </div>
              <button 
                 className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 shadow-sm transition-colors ${
                   quizState === 'result' ? 'text-purple-400 bg-purple-400/10 border border-purple-400/20' : 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/20'
                 }`}
                 onClick={() => { if(quizState === 'result') setQuizState('config') }}
              >
                {quizState === 'result' ? <><RotateCw className="w-3 h-3"/> New Quiz</> : <><CheckCircle2 className="w-3 h-3" /> Ready</>}
              </button>
            </div>

            <AnimatePresence mode="wait">
              {quizState === 'config' && (
                <motion.div 
                  key="config"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6 flex-1"
                >
                  
                  {/* Topic Selection */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-400 mb-2">Subject Target</label>
                    <div 
                      className="w-full bg-black/30 border border-white/10 p-3 rounded-lg text-white font-medium flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      <span className="flex items-center gap-2">
                        {activeQuizTopic}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                    
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }} 
                          animate={{ opacity: 1, y: 0 }} 
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 w-full mt-2 bg-[#1e293b] border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden"
                        >
                          {topics.map(t => (
                            <div 
                              key={t}
                              className="px-4 py-3 hover:bg-white/5 text-gray-200 cursor-pointer text-sm font-medium transition-colors"
                              onClick={() => { setActiveQuizTopic(t); setIsDropdownOpen(false); }}
                            >
                              {t}
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Difficulty Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty Constraint</label>
                    <div className="flex gap-2">
                      {['Easy', 'Medium', 'Hard'].map((diff) => (
                        <button 
                          key={diff}
                          onClick={() => setDifficulty(diff)}
                          className={`flex-1 text-center py-2 rounded-lg border text-sm transition-all ${
                            difficulty === diff 
                            ? 'border-purple-500 bg-purple-500/20 text-purple-300 font-medium shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                            : 'border-white/10 text-gray-400 hover:bg-white/5'
                          }`}
                        >
                          {diff}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Loading State Space */}
                  <div className="pt-4 min-h-[100px] flex items-center justify-center">
                    {isGenerating && (
                       <div className="flex flex-col items-center justify-center py-2 text-purple-400 gap-3">
                          <RotateCw className="w-8 h-8 animate-spin" />
                          <span className="text-sm font-medium animate-pulse">Running AI Generator...</span>
                       </div>
                    )}
                  </div>

                  <button 
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="w-full mt-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <RotateCw className={`w-5 h-5 ${isGenerating ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
                    {isGenerating ? 'Generating...' : 'Launch Quiz'}
                  </button>
                </motion.div>
              )}

              {quizState === 'taking' && (
                <motion.div 
                  key="taking"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-8 flex-1"
                >
                  <div className="space-y-6">
                    {questions.map((q, qIndex) => (
                      <div key={qIndex} className="bg-black/20 p-4 rounded-xl border border-white/5">
                        <p className="text-white font-medium mb-4 flex gap-2">
                          <span className="text-purple-400">{qIndex + 1}.</span> {q.q}
                        </p>
                        <div className="space-y-2">
                          {q.options.map((opt, optIdx) => (
                            <div 
                              key={optIdx} 
                              onClick={() => selectAnswer(qIndex, optIdx)}
                              className={`p-3 rounded-lg border text-sm cursor-pointer transition-all flex items-center gap-3 ${
                                answers[qIndex] === optIdx
                                ? 'bg-blue-500/20 border-blue-500/50 text-white shadow-[0_0_10px_rgba(59,130,246,0.1)]'
                                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                              }`}
                            >
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                answers[qIndex] === optIdx ? 'border-blue-400 bg-blue-500' : 'border-gray-500'
                              }`}>
                                {answers[qIndex] === optIdx && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                              </div>
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={submitQuiz}
                    disabled={answers.filter(a => a !== undefined).length !== questions.length}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-6"
                  >
                    Submit Answers
                  </button>
                </motion.div>
              )}

              {quizState === 'result' && (
                <motion.div 
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex-1 flex flex-col items-center justify-center text-center space-y-6 min-h-[300px]"
                >
                  <div className="relative">
                    <svg className="w-32 h-32 transform -rotate-90">
                      <circle cx="64" cy="64" r="60" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                      <motion.circle 
                        cx="64" cy="64" r="60" 
                        stroke="url(#gradient)" 
                        strokeWidth="8" 
                        fill="none" 
                        strokeDasharray="377"
                        initial={{ strokeDashoffset: 377 }}
                        animate={{ strokeDashoffset: 377 - (377 * calculateScore() / questions.length) }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-3xl font-bold text-white">{Math.round((calculateScore() / questions.length) * 100)}%</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quiz Completed!</h3>
                    <p className="text-gray-400">You scored {calculateScore()} out of {questions.length}.</p>
                    <p className="text-emerald-400 text-sm mt-3 animate-pulse">Dashboard Stats Updated Automatically</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-[40px] z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[50px] z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI Quiz Generation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Test Your Knowledge with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Dynamic Quizzes</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Stop relying on generic test banks. Our AI instantly reads your progress, understands your weaknesses, and generates interactive quizzes designed to directly improve your dashboard stats.
          </p>
          
          <ul className="space-y-4">
            {['Take the quiz and get instant scoring', 'Results automatically update Dashboard', 'Difficulty algorithm scales based on score', 'Answers are evaluated logically'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
};
