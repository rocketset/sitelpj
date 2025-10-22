import { motion } from 'framer-motion';

const GradientBlob = ({ color1, color2, className = '', size = 400, animate: shouldAnimate = true }) => {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color1}, ${color2})`,
      }}
      animate={shouldAnimate ? {
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "58% 42% 75% 25% / 76% 46% 54% 24%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
      } : {}}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default GradientBlob;