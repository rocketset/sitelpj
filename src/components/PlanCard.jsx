import { motion } from 'framer-motion';
import { Check, Sparkles, Crown, Rocket, Gem, ArrowRight } from 'lucide-react';

const PlanCard = ({ 
  title, 
  price, 
  subtitle, 
  features, 
  isPopular = false, 
  buttonText = "SELECIONAR PLANO",
  delay = 0,
  link 
}) => {

  const getTheme = () => {
    switch (title) {
      case 'Basic':
        return {
          gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500',
          textColor: 'text-cyan-500',
          icon: <Rocket className="w-7 h-7 text-white" />
        };
      case 'Profissional':
        return {
          gradient: 'bg-gradient-to-r from-pink-500 to-purple-600',
          textColor: 'text-pink-500',
          icon: <Crown className="w-7 h-7 text-white" />
        };
      case 'Enterprise':
        return {
          gradient: 'bg-gradient-to-r from-orange-400 to-red-500',
          textColor: 'text-orange-500',
          icon: <Gem className="w-7 h-7 text-white" />
        };
      default:
        return {
          gradient: 'bg-gradient-to-r from-gray-400 to-gray-500',
          textColor: 'text-gray-500',
          icon: <Rocket className="w-7 h-7 text-white" />
        };
    }
  };

  const theme = getTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative group w-full ${isPopular ? 'lg:scale-110 z-10' : ''}`}
    >
      {/* Card Container */}
      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">

        {/* Popular Badge */}
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className={`flex items-center gap-2 ${theme.gradient} text-white px-5 py-2 rounded-full font-bold text-xs shadow-lg`}>
              <Sparkles className="w-4 h-4" />
              MAIS POPULAR
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-6">
          {/* Icon */}
          <div className={`w-16 h-16 ${theme.gradient} rounded-2xl inline-flex items-center justify-center mb-5 shadow-md`}>
            {theme.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>

          {/* Price */}
          <div className="mb-3">
            <span className={`text-5xl font-black ${theme.textColor}`}>{price}</span>
            <span className="text-lg text-gray-500">/mês</span>
          </div>

          {/* Subtitle */}
          <p className="text-gray-500 h-12">{subtitle}</p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-4"></div>

        {/* Features */}
        <div className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`flex-shrink-0 w-6 h-6 ${theme.gradient} rounded-full flex items-center justify-center`}>
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className={`block w-full py-4 px-6 rounded-xl font-bold text-white text-center ${theme.gradient} shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <div className="flex items-center justify-center gap-2">
            {buttonText}
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PlanCard;