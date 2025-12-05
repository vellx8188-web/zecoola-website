
import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '../constants';
import { useLanguage } from '../LanguageContext';

const Team: React.FC = () => {
  const { language } = useLanguage();
  const { title, subtitle, members, founderBio } = CONTENT.team;

  return (
    <section id="team" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-zecoola-blue mb-4">{title[language]}</h2>
          <div className="w-24 h-1 bg-zecoola-orange mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg">
            {subtitle[language]}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              {/* Image Removed as requested */}
              <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
              <p className="text-zecoola-orange font-medium text-sm text-center">{member.role[language]}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-zecoola-blue mb-2">Grayson Tan ({members[0].role[language]})</h3>
            <p className="text-slate-600">
                {founderBio[language]}
            </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
