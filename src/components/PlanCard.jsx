import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const PlanCard = ({ 
  name, 
  price, 
  subtitle, 
  features, 
  isPopular = false, 
  buttonText = "SELECIONAR PLANO",
  delay = 0,
  link 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative group ${
        isPopular 
          ? 'bg-gradient-to-br from-primary-start to-primary-end text-white scale-105 lg:scale-110' 
          : 'bg-gradient-to-br from-primary-start to-primary-end text-white'
      } rounded-3xl p-8 shadow-2xl hover:shadow-[0_25px_80px_rgba(57,28,220,0.4)] transition-all duration-500 hover:scale-105 border border-white/20`}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-accent text-text-primary px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
            <Sparkles className="w-4 h-4" />
            MAIS POPULAR
          </div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-sm opacity-80">R$</span>
          <span className="text-5xl font-black text-accent">{price}</span>
        </div>
        <p className="text-lg opacity-90 font-medium">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + (index * 0.1) }}
            viewport={{ once: true }}
            className="flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-text-primary font-bold" />
            </div>
            <span className="text-sm leading-relaxed opacity-95">{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`block w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 text-center ${
          isPopular
            ? 'bg-accent text-text-primary hover:bg-yellow-400 shadow-lg hover:shadow-xl'
            : 'bg-accent text-text-primary hover:bg-yellow-400 shadow-lg hover:shadow-xl'
        }`}
      >
        {buttonText}
      </motion.a>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 opacity-10">
        <Sparkles className="w-8 h-8" />
      </div>
      
      {/* Gradient Overlay for Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
    </motion.div>
  );
};

export default PlanCard;