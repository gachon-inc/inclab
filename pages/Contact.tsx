
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-4 tracking-tight">Get in Touch</h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
          We are always looking for passionate researchers and collaborators. Reach out to us if you're interested in our work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-bold mb-1">Office Location</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    AI Building, Room 402, Gachon University<br />
                    1342 Seongnam-daero, Sujeong-gu, Seongnam-si<br />
                    Gyeonggi-do, South Korea (13120)
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-slate-900 font-bold mb-1">Email</p>
                  <p className="text-slate-600 text-sm">joongheon@gachon.ac.kr</p>
                </div>
              </div>
            </div>
          </div>

          <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Join Us</h2>
             <p className="text-slate-600 text-sm leading-relaxed mb-6">
               Motivated undergraduate interns, Master's students, and PhD candidates are always welcome. Please include your CV and a brief statement of research interests in your inquiry.
             </p>
             <button className="bg-blue-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20">
               Apply Now
             </button>
          </div>
        </div>

        <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
          {/* Placeholder for real Google Map iframe */}
          <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
             <div className="text-center">
               <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
               <span className="font-bold">Interactive Map Component</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
