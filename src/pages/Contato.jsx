import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Users, 
  Zap,
  CheckCircle,
  ArrowRight,
  Crown,
  Shield,
  Target
} from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import GradientBlob from '../components/GradientBlob';

const Contato = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: "sac@leadspj.com",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(83) 99173-6111",
      description: "Atendimento imediato"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "Av. Cabo Branco, 1780, Cabo Branco",
      description: "João Pessoa/PB"
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Resposta Rápida",
      description: "Retornamos seu contato em até 2 horas úteis"
    },
    {
      icon: Users,
      title: "Suporte Especializado",
      description: "Equipe dedicada para atender suas necessidades"
    },
    {
      icon: Shield,
      title: "Demonstração Gratuita",
      description: "Conheça a plataforma sem compromisso"
    }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* ============ HERO SECTION ============ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#370CAF] via-[#391CDC] to-[#4a1f8a]"></div>
        
        {/* Mesh Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(229, 199, 66, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(74, 31, 138, 0.3) 0%, transparent 50%)
            `
          }}
        />

        {/* Floating Particles */}
        <FloatingParticles count={25} color="rgba(229, 199, 66, 0.4)" />

        {/* Gradient Blobs */}
        <GradientBlob 
          color1="rgba(229, 199, 66, 0.15)" 
          color2="rgba(255, 215, 0, 0.1)" 
          className="top-20 -left-40" 
          size={400} 
        />
        <GradientBlob 
          color1="rgba(255, 215, 0, 0.1)" 
          color2="rgba(229, 199, 66, 0.15)" 
          className="bottom-0 -right-40" 
          size={500} 
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold text-lg">FALE CONOSCO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Pronto para
              <span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
                Acelerar suas Vendas?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Entre em contato conosco e descubra como a LeadsPJ pode transformar 
              seus resultados de vendas com nossa 
              <span className="text-accent font-semibold"> plataforma completa</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Resposta em até 2 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Demonstração gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Suporte especializado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============ CONTACT FORM & INFO SECTION ============ */}
      <section ref={formRef} className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-text-primary">
              Vamos conversar sobre seu <span className="gradient-text">projeto</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato para uma conversa personalizada
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">Envie sua mensagem</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold mb-2 text-text-primary">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-text-primary">
                        E-mail corporativo *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-text-primary">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2 text-text-primary">
                        Empresa
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 bg-white"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-text-primary">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none bg-white"
                      placeholder="Conte-nos sobre seu projeto ou dúvida..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-start to-primary-end hover:from-primary-end hover:to-primary-start text-white py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFormInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="card-glass p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-start to-primary-end rounded-xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-text-primary">{info.title}</h3>
                        <p className="text-text-primary font-semibold mb-1">{info.content}</p>
                        <p className="text-text-secondary text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ BENEFITS SECTION ============ */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-start/5 to-primary-end/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-text-primary">
              Por que escolher a <span className="gradient-text">LeadsPJ</span>?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Oferecemos o melhor suporte e as melhores soluções para seu negócio
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="card-glass p-8 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-start to-primary-end rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-text-primary">{benefit.title}</h3>
                  <p className="text-text-secondary">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl p-12 bg-gradient-to-br from-[#370CAF] via-[#391CDC] to-[#4a1f8a]"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Pronto para começar?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Junte-se a milhares de empresas que já transformaram seus 
                resultados com a LeadsPJ
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/sobre"
                    className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Começar Agora
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.a
                  href="https://wa.me/5583991736111"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </motion.a>
              </div>

              <p className="text-sm text-white/70 mt-6">
                ✓ Resposta em até 2 horas • ✓ Demonstração gratuita • ✓ Suporte especializado
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
