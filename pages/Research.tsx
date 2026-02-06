
import React from 'react';
import { RESEARCH_AREAS } from '../constants';

const Research: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4 tracking-tight">Research Innovation</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our research strategy focuses on the deep integration of AI with advanced communication and distributed computing frameworks.
          </p>
        </div>

        <div className="space-y-24">
          {RESEARCH_AREAS.map((area, index) => (
            <div key={area.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest">
                  {area.icon} Area 0{index + 1}
                </div>
                <h2 className="text-3xl font-bold text-slate-900">{area.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {area.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                      </div>
                      <span className="text-slate-700 font-medium text-sm leading-snug">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 w-full aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200 relative group">
                <img src={`https://picsum.photos/seed/${area.id}/800/600`} alt={area.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
