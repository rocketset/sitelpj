import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Zap, Users, TrendingUp, Database, MessageSquare, BarChart3, Rocket, Star, ArrowRight } from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import GradientBlob from '../components/GradientBlob';
import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import { fadeInUp, staggerContainer, staggerItem, cardHover, buttonHover } from '../utils/animations';

const Home = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const benefits = [
    'Base de empresas segmentada e atualizada',
    'Empresas abertas hoje e por período',
    'Campanhas de WhatsApp com I.A, em escala',
    'Pipelines Multi-Kanban e gestão de equipe',
    'Métricas em tempo real do topo ao fechamento',
  ];

  const steps = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Encontre',
      description: 'Filtre por CNAE, cidade, estado, porte, situação cadastral e mais.',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Priorize',
      description: 'Use Empresas Abertas Hoje para iniciar relação na primeira hora.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'Atue',
      description: 'Dispare campanhas de WhatsApp com I.A e personalize mensagens.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Converta',
      description: 'Acompanhe abertura, resposta e conversão no CRM e nos funis.',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const features = [
    {
      icon: <Target className="w-10 h-10 text-accent" />,
      title: 'Mais qualificados, menos esforço',
      description: 'Prospeção guiada por dados.',
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: 'Escala com personalização',
      description: 'I.A escreve como humano, com contexto.',
    },
    {
      icon: <Database className="w-10 h-10 text-accent" />,
      title: 'Time alinhado',
      description: 'Multi-Kanban, permissões simples e histórico completo.',
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-accent" />,
      title: 'Decisão rápida',
      description: 'Painéis que mostram o que importa, em tempo real.',
    },
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Diretor Comercial',
      company: 'Tech Solutions',
      text: 'Aumentamos nossa taxa de resposta em 300% com as Empresas Abertas Hoje.',
      rating: 5,
    },
    {
      name: 'Marina Costa',
      role: 'CEO',
      company: 'Contabilidade Prime',
      text: 'A automação de WhatsApp com I.A economizou 15 horas por semana da nossa equipe.',
      rating: 5,
    },
  ];

  const plans = [
    {
      name: 'Basic',
      price: '97',
      period: 'mês',
      popular: false,
      features: [
        '1.000 créditos mensais',
        '3 usuários',
        'CRM integrado',
        'Multi-Kanban',
        'Campanhas WhatsApp com I.A',
        'Acesso imediato à base',
        'Suporte prioritário',
      ],
    },
    {
      name: 'Profissional',
      price: '159',
      period: 'mês',
      popular: true,
      features: [
        '5.000 créditos mensais',
        '5 usuários',
        'CRM integrado',
        'Multi-Kanban',
        'Campanhas WhatsApp com I.A',
        'Recursos avançados',
        'Análises detalhadas',
      ],
    },
    {
      name: 'Enterprise',
      price: '320',
      period: 'mês',
      popular: false,
      features: [
        '10.000 créditos mensais',
        'Usuários ilimitados',
        'Tudo do Profissional',
        'Treinamento personalizado',
        'Onboarding exclusivo',
        'Consultoria estratégica',
        'API customizada',
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="LeadsPJ | CRM + Prospecção B2B, WhatsApp com I.A e Empresas Abertas Hoje"
        description="Encontre empresas qualificadas, acesse CNPJs abertos no dia, automatize WhatsApp com I.A e gerencie seu funil em um só lugar. Teste a LeadsPJ hoje."
        keywords="CRM B2B, prospecção, leads, WhatsApp automação, empresas abertas, CNPJ, vendas B2B"
        ogTitle="LeadsPJ | CRM + Prospecção B2B, WhatsApp com I.A"
        ogDescription="Transforme leads em vendas com CRM + Prospecção B2B + Automação de WhatsApp com I.A"
        ogUrl="https://leadspj.com/"
        twitterCard="summary_large_image"
        twitterUrl="https://leadspj.com/"
        twitterTitle="LeadsPJ | CRM + Prospecção B2B"
        twitterDescription="Transforme leads em vendas com CRM + Prospecção B2B + Automação de WhatsApp com I.A"
      />
      <div className="pt-16 overflow-hidden">
      {/* ============ HERO SECTION ============ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
        {/* Background Effects */}
        <FloatingParticles count={50} color="rgba(229, 199, 66, 0.4)" />
        <GradientBlob color1="rgba(55, 12, 175, 0.3)" color2="rgba(57, 28, 220, 0.2)" className="top-10 -left-20" size={600} />
        <GradientBlob color1="rgba(229, 199, 66, 0.2)" color2="rgba(255, 215, 0, 0.1)" className="bottom-10 -right-20" size={500} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10"></div>

        <div className="section-container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge Animado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Rocket className="w-5 h-5 text-accent" />
              <span className="text-text-light font-semibold">
                🎉 Mais de <AnimatedCounter end={5000} suffix="+" /> clientes ativos
              </span>
            </motion.div>

            {/* Título Principal com Gradiente Animado */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-text-light leading-tight"
            >
              Transforme{' '}
              <span className="relative inline-block">
                <span className="text-shimmer">Leads</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-yellow-300 to-accent"
                  initial={{ scaleX: 0 }}
                  animate={isHeroInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
              <br />
              em <span className="neon-glow text-accent">Vendas</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl mb-10 text-text-light/90 max-w-4xl mx-auto font-medium leading-relaxed"
            >
              CRM + Prospecção B2B + Automação de WhatsApp com I.A — e o{' '}
              <span className="text-accent font-bold">Extrator de Leads PJ</span>{' '}
              com Empresas Abertas Hoje para você abordar primeiro e vender mais rápido.
            </motion.p>

            {/* Lista de Benefits */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isHeroInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 gap-4 mb-12 max-w-3xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-left text-text-light font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="/sobre"
                  className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 group"
                >
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Testar Agora Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.a
                href="#plans"
                className="btn-ghost text-lg px-10 py-5 inline-flex items-center gap-2 group"
                variants={buttonHover}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Ver Planos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>

            {/* Stats Animados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
            >
              {[
                { value: 500, suffix: 'K+', label: 'Empresas na base' },
                { value: 300, suffix: '%', label: 'Aumento de resposta' },
                { value: 15, suffix: 'h', label: 'Economizadas/semana' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-sm md:text-base text-text-light/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-accent rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Continua nas próximas seções... */}
      <SocialProofSection testimonials={testimonials} />
      <HowItWorksSection steps={steps} />
      <BenefitsSection features={features} />
      <ExtractorSection />
      <PricingSection plans={plans} />
      <IntegrationsSection />
      <FinalCTASection />
      </div>
    </>
  );
};

// ============ SOCIAL PROOF SECTION ============
const SocialProofSection = ({ testimonials }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-background to-white overflow-hidden">
      <GradientBlob color1="rgba(143, 132, 206, 0.1)" color2="rgba(55, 12, 175, 0.05)" className="top-0 right-0" size={400} />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-3xl md:text-4xl text-text-primary mb-4">
            Mais de <span className="font-bold gradient-text text-5xl"><AnimatedCounter end={5} suffix=" mil" /></span> profissionais acelerando o B2B
          </p>
          <p className="text-xl text-text-secondary">Veja o que nossos clientes dizem</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardHover}
              initial="rest"
              whileHover="hover"
              className="card group cursor-pointer"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-text-primary mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-start to-primary-end flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{testimonial.name}</p>
                  <p className="text-sm text-text-secondary">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Continuarei criando as outras seções nos próximos arquivos...
export default Home;