import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const CampaignCTA = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 sm:p-12 border border-white/20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Side: Text Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <motion.div 
                className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-4 py-1 rounded-full mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Zap className="w-5 h-5" />
                <span>Oferta Exclusiva</span>
              </motion.div>
              <motion.h2 
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Plano Basic de <span className="line-through opacity-70">R$97</span> por apenas <span className="text-yellow-400">R$79</span>!
              </motion.h2>
              <motion.p 
                className="text-lg text-white/80 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Aproveite essa condição especial válida apenas para o primeiro mês. Comece a prospectar hoje mesmo!
              </motion.p>
            </div>

            {/* Right Side: Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 120 }}
            >
              <a
                href="https://p.leadspj.com/auth/register?planId=cmgvdk0un00jb82uhslep2s4m"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <span>Quero a Oferta Agora</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCTA;