import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/', isExternal: false },
    { name: 'Planos', path: '/sobre', isExternal: false },
    { name: 'Blog', path: 'https://leadspj.com/blog', isExternal: true },
    { name: 'Treinamento', path: 'https://cursos.leadspj.com', isExternal: true },
    { name: 'Contato', path: '/contato', isExternal: false },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center group">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="flex items-center">
                <img 
                  src={isScrolled ? "/assets/logo-black.png" : "/assets/logo-white.png"} 
                  alt="LeadsPJ" 
                  className="h-10 w-auto transition-all duration-300"
                />
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {menuItems.map((item, index) => (
                <motion.div key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  {item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isScrolled ? 'text-text-primary hover:text-primary-end hover:bg-background' : 'text-white hover:text-accent hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        location.pathname === item.path
                          ? isScrolled ? 'text-primary-end bg-primary-end/10' : 'text-accent bg-accent/20'
                          : isScrolled ? 'text-text-primary hover:text-primary-end hover:bg-background' : 'text-white hover:text-accent hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <a
                  href="https://p.leadspj.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 bg-accent hover:bg-accent/90 text-text-primary font-bold px-6 py-3 rounded-lg inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                Acessar Plataforma
                <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            <motion.button
              className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'bg-background' : 'bg-white/10'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X className={`h-6 w-6 ${isScrolled ? 'text-text-primary' : 'text-white'}`} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu className={`h-6 w-6 ${isScrolled ? 'text-text-primary' : 'text-white'}`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center">
                    <img 
                      src="/assets/logo-black.png" 
                      alt="LeadsPJ" 
                      className="h-8 w-auto"
                    />
                  </div>
                  <motion.button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-background rounded-lg" whileTap={{ scale: 0.9 }}>
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                <nav className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div key={item.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.05 }}>
                      {item.isExternal ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 rounded-lg font-semibold transition-all text-text-primary hover:bg-background"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                            location.pathname === item.path ? 'bg-gradient-to-r from-primary-start to-primary-end text-white shadow-lg' : 'text-text-primary hover:bg-background'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://p.leadspj.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 w-full bg-accent hover:bg-accent/90 text-text-primary font-bold px-6 py-4 rounded-lg inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    Acessar Plataforma
                  <ChevronRight className="w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
