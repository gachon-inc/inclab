
import React from 'react';
import { MEMBERS } from '../constants';

const People: React.FC = () => {
  const professor = MEMBERS.find(m => m.role === 'Professor');
  const students = MEMBERS.filter(m => m.role !== 'Professor');

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4 tracking-tight">Our People</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">Meet the brilliant minds pushing the boundaries of intelligence and networking.</p>
      </div>

      {/* Professor Section */}
      {professor && (
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-2">Principal Investigator</h2>
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden ring-1 ring-slate-200 lg:flex">
            <div className="lg:w-1/3">
              <img src={professor.image} alt={professor.name} className="w-full h-full object-cover aspect-square" />
            </div>
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900">{professor.name}</h3>
                  <p className="text-blue-600 font-bold mb-6">Professor, Gachon University</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Research Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {professor.researchInterests.map(interest => (
                          <span key={interest} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contact</h4>
                      <p className="text-slate-600 text-sm font-medium">{professor.email}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex gap-4">
                  <a href={professor.links?.googleScholar} className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors">Google Scholar</a>
                  <a href={professor.links?.website} className="px-4 py-2 ring-1 ring-slate-200 text-slate-900 text-xs font-bold rounded-lg hover:bg-slate-50 transition-colors">Website</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Students Section */}
      <div className="space-y-16">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-2">Researchers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map(member => (
              <div key={member.id} className="bg-white rounded-2xl shadow-sm ring-1 ring-slate-200 overflow-hidden hover:shadow-lg transition-all group">
                <div className="aspect-[4/5] relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <p className="text-blue-300 text-xs font-bold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1.5">
                      {member.researchInterests.map(interest => (
                        <span key={interest} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded">
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-medium text-slate-400">{member.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
