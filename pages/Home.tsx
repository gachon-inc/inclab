
import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS, RESEARCH_AREAS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.50),white)] opacity-40"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-700 mb-6 tracking-wide uppercase">
              Intelligence & Networking Computing Lab
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
              Innovating the Future of <span className="text-blue-600">Networked Intelligence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We explore the intersection of machine learning, high-performance networking, and distributed computing to build the architectures for tomorrow's digital world.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/research" className="rounded-md bg-blue-900 px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all">
                Explore Research
              </Link>
              <Link to="/people" className="text-sm font-bold leading-6 text-slate-900 flex items-center gap-1 group">
                Meet the Team <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Areas */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Core Research Domains</h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto italic">Bridging intelligence, networking, and distributed computing.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {RESEARCH_AREAS.map((area) => (
              <div key={area.id} className="bg-white p-8 rounded-2xl shadow-sm ring-1 ring-slate-200 hover:ring-blue-200 transition-all hover:shadow-md">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{area.description}</p>
                <Link to="/research" className="text-blue-600 text-sm font-bold hover:underline">Learn more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News & Map */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Latest Updates</h2>
            <div className="space-y-6">
              {NEWS.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border-l-4 border-blue-600 shadow-sm">
                  <div className="flex-shrink-0 pt-1">
                    <span className="text-xs font-bold text-slate-400 block mb-1">{item.date}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                      item.tag === 'Paper' ? 'bg-green-100 text-green-700' :
                      item.tag === 'Award' ? 'bg-yellow-100 text-yellow-700' :
                      item.tag === 'Project' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="text-slate-400 text-sm font-semibold hover:text-slate-600 transition-colors">View All News</button>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden bg-slate-100 min-h-[400px] shadow-inner ring-1 ring-slate-200">
             <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-900/60 to-transparent">
                <h3 className="text-white text-xl font-bold">Visit Us</h3>
                <p className="text-slate-200 text-sm">Gachon University, AI Building, Sujeong-gu, Seongnam-si</p>
             </div>
             <img src="https://picsum.photos/seed/gachon/800/600" alt="Lab Location" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
