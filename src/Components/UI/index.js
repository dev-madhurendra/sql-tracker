import { useState, useEffect } from 'react';
import {exercises} from '../../Utils/constants'

// Main application component
export default function SQLExerciseTracker() {
  // Load saved data from localStorage if available
  const loadFromStorage = (key, defaultValue) => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  };

  // State for tracking completed exercises and solutions
  const [completed, setCompleted] = useState(loadFromStorage('completed', {}));
  const [solutions, setSolutions] = useState(loadFromStorage('solutions', {}));
  const [activeLevel, setActiveLevel] = useState('easy');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [solution, setSolution] = useState('');
  const [search, setSearch] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

  useEffect(() => {
    localStorage.setItem('solutions', JSON.stringify(solutions));
  }, [solutions]);

  // Functions for tracking progress
  const toggleCompleted = (id) => {
    setCompleted(prev => {
      const newCompleted = { ...prev };
      if (newCompleted[id]) {
        delete newCompleted[id];
      } else {
        newCompleted[id] = true;
      }
      return newCompleted;
    });
  };

  const saveSolution = () => {
    if (selectedExercise && solution.trim()) {
      setSolutions(prev => ({
        ...prev,
        [selectedExercise.id]: solution
      }));
      // Also mark as completed when solution is saved
      if (!completed[selectedExercise.id]) {
        toggleCompleted(selectedExercise.id);
      }
      alert('Solution saved successfully!');
    }
  };

  const selectExercise = (exercise) => {
    setSelectedExercise(exercise);
    setSolution(solutions[exercise.id] || '');
  };

  // Filter exercises based on search term and completion status
  const filteredExercises = exercises[activeLevel].filter(exercise => {
    const matchesSearch = search === '' || 
                          exercise.title.toLowerCase().includes(search.toLowerCase()) ||
                          exercise.category.toLowerCase().includes(search.toLowerCase());
    const matchesCompletion = showCompleted || !completed[exercise.id];
    return matchesSearch && matchesCompletion;
  });

  // Group exercises by category
  const groupedExercises = filteredExercises.reduce((acc, exercise) => {
    if (!acc[exercise.category]) {
      acc[exercise.category] = [];
    }
    acc[exercise.category].push(exercise);
    return acc;
  }, {});

  // Calculate progress statistics
  const totalExercises = exercises.easy.length + exercises.medium.length + exercises.hard.length;
  const completedCount = Object.keys(completed).length;
  const progressPercent = Math.round((completedCount / totalExercises) * 100);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-indigo-800 mb-2">SQL Exercise Tracker</h1>
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <p className="text-gray-600">Track your progress through 100 SQL exercises</p>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-indigo-600 h-4 rounded-full" 
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 mt-1">Progress: {completedCount} of {totalExercises} exercises ({progressPercent}%)</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 mt-4 md:mt-0">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Search exercises..."
                  className="p-2 border rounded"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    id="showCompleted"
                    checked={showCompleted}
                    onChange={() => setShowCompleted(!showCompleted)}
                  />
                  <label htmlFor="showCompleted" className="text-sm">Show completed</label>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveLevel('easy')}
                  className={`px-3 py-1 rounded text-sm ${activeLevel === 'easy' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}
                >
                  Easy ({Object.keys(completed).filter(id => id <= 40).length}/{exercises.easy.length})
                </button>
                <button 
                  onClick={() => setActiveLevel('medium')}
                  className={`px-3 py-1 rounded text-sm ${activeLevel === 'medium' ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800'}`}
                >
                  Medium ({Object.keys(completed).filter(id => id > 40 && id <= 80).length}/{exercises.medium.length})
                </button>
                <button 
                  onClick={() => setActiveLevel('hard')}
                  className={`px-3 py-1 rounded text-sm ${activeLevel === 'hard' ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800'}`}
                >
                  Hard ({Object.keys(completed).filter(id => id > 80).length}/{exercises.hard.length})
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column - Exercise List */}
          <div className="w-full md:w-1/2 lg:w-2/5">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">
                {activeLevel.charAt(0).toUpperCase() + activeLevel.slice(1)} Exercises
              </h2>
              <div className="space-y-6 overflow-y-auto max-h-96">
                {Object.keys(groupedExercises).map(category => (
                  <div key={category}>
                    <h3 className="font-semibold text-indigo-700 mb-2">{category}</h3>
                    <ul className="space-y-2">
                      {groupedExercises[category].map(exercise => (
                        <li 
                          key={exercise.id} 
                          className={`
                            flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-100
                            ${selectedExercise?.id === exercise.id ? 'bg-indigo-100 border-l-4 border-indigo-500' : ''}
                          `}
                          onClick={() => selectExercise(exercise)}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={!!completed[exercise.id]}
                              onChange={(e) => {
                                e.stopPropagation();
                                toggleCompleted(exercise.id);
                              }}
                            />
                            <span className={completed[exercise.id] ? 'line-through text-gray-500' : ''}>
                              {exercise.id}. {exercise.title}
                            </span>
                          </div>
                          {solutions[exercise.id] && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Solved</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {Object.keys(groupedExercises).length === 0 && (
                  <p className="text-gray-500 italic text-center py-4">No exercises match your filters</p>
                )}
              </div>
            </div>
          </div>

          {/* Right column - Solution Editor */}
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="bg-white rounded-lg shadow-md p-6">
              {selectedExercise ? (
                <>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">{selectedExercise.id}. {selectedExercise.title}</h2>
                    <p className="text-gray-600">{selectedExercise.category}</p>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Your SQL Solution:</label>
                    <textarea
                      value={solution}
                      onChange={(e) => setSolution(e.target.value)}
                      className="w-full h-64 p-3 border border-gray-300 rounded font-mono text-sm"
                      placeholder="-- Write your SQL solution here"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button 
                      onClick={saveSolution}
                      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                    >
                      Save Solution
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Completed:</span>
                      <input
                        type="checkbox"
                        checked={!!completed[selectedExercise.id]}
                        onChange={() => toggleCompleted(selectedExercise.id)}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-gray-500">Select an exercise to start solving</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
