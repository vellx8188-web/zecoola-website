
import React from 'react';
import { motion } from 'framer-motion';

const HomeV2: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-32 pb-20">
      <div className="text-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100 max-w-4xl mx-auto"
        >
          <span className="text-orange-600 font-black text-xs uppercase tracking-[0.5em] mb-6 block">Version 2.0 / Laboratory</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 italic tracking-tighter uppercase leading-none">
            NEW V2 <br/><span className="text-orange-600">WORKSPACE.</span>
          </h1>
          <p className="text-xl text-slate-400 font-bold mb-12 max-w-lg mx-auto leading-relaxed">
            这里是全新 V2 版本的“隐身实验室”。请将你本地电脑上的代码贴给 AI，我将立即在此处为你同步和优化。
          </p>
          <div className="w-12 h-1 bg-slate-200 mx-auto"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeV2;
