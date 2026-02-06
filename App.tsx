
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LabAssistant from './components/LabAssistant';
import Home from './pages/Home';
import Research from './pages/Research';
import People from './pages/People';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-slate-200 py-12">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start">
        <span className="text-lg font-black text-blue-900">INC LAB</span>
        <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Intelligence & Networking Computing</span>
      </div>
      <p className="text-slate-500 text-xs font-medium">© 2024 INC Lab, Gachon University. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Twitter</a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">GitHub</a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">LinkedIn</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/people" element={<People />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <LabAssistant />
      </div>
    </Router>
  );
};

export default App;
