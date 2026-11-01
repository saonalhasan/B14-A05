import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load JSON Data
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load JSON:', err);
        setLoading(false);
      });
  }, []);

  // Add to Stack Functionality
  const handleAddToStack = (tech) => {
    const isAlreadyInStack = stack.some((item) => item.id === tech.id);

    if (isAlreadyInStack) {
      toast.warning(`${tech.name} is already in your stack!`, { position: 'bottom-right' });
      return;
    }

    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to stack!`, { position: 'bottom-right' });
  };

  // Remove Functionality
  const handleRemoveFromStack = (id) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    toast.info(`Removed ${itemToRemove?.name || 'item'} from stack.`, { position: 'bottom-right' });
  };

  // Clear All
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('Cleared all items from your stack.', { position: 'bottom-right' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />

      {/* Main Content Area */}
      <main id="tech" className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Explore the <span className="brand-gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        {/* Loading State Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Tech Cards Grid (3 Columns on Large Screens) */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = stack.some((item) => item.id === tech.id);
                return (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAdd={handleAddToStack}
                    isAdded={isAdded}
                  />
                );
              })}
            </div>

            {/* Sidebar (Your Stack) */}
            <div className="lg:col-span-1">
              <Sidebar
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
}