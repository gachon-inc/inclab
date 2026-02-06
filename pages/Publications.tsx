
import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';

const Publications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Journal' | 'Conference'>('All');
  
  const filteredPublications = activeTab === 'All' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.type === activeTab);

  const years = Array.from(new Set(PUBLICATIONS.map(p => p.year))).sort((a, b) => b - a);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4 tracking-tight">Publications</h1>
          <p className="text-slate-600 text-lg">Our research outcomes in leading international journals and flagship conferences.</p>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-xl ring-1 ring-slate-200">
          {(['All', 'Journal', 'Conference'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-bold rounded-lg transition-all ${
                activeTab === tab 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {tab}s
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        {years.map(year => {
          const yearPubs = filteredPublications.filter(p => p.year === year);
          if (yearPubs.length === 0) return null;

          return (
            <div key={year}>
              <h2 className="text-3xl font-black text-slate-200 mb-6 flex items-center gap-4">
                {year}
                <div className="flex-grow h-px bg-slate-100"></div>
              </h2>
              <div className="space-y-6">
                {yearPubs.map(pub => (
                  <div key={pub.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:border-blue-100 group">
                    <div className="flex gap-4">
                       <div className={`flex-shrink-0 w-2 h-16 rounded-full ${pub.type === 'Journal' ? 'bg-blue-600' : 'bg-indigo-400'}`}></div>
                       <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{pub.title}</h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {pub.authors.map((author, i) => (
                              <React.Fragment key={i}>
                                <span className={author.includes('Kim') ? 'font-bold underline text-slate-800' : ''}>{author}</span>
                                {i < pub.authors.length - 1 ? ', ' : ''}
                              </React.Fragment>
                            ))}
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded uppercase tracking-wider italic">{pub.venue}</span>
                            {pub.link && (
                              <a href={pub.link} className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1">
                                [PDF]
                              </a>
                            )}
                          </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Publications;
