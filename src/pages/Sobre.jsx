import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle, 
  Users, 
  Database, 
  MessageSquare, 
  BarChart3, 
  Zap,
  Crown,
  Shield,
  Rocket,
  Target,
  ArrowRight,
  Star
} from 'lucide-react';
import PlanCard from '../components/PlanCard';
import FloatingParticles from '../components/FloatingParticles';
import GradientBlob from '../components/GradientBlob';

const Planos = () => {
  const heroRef = useRef(null);
  const plansRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isPlansInView = useInView(plansRef, { once: true });

  const plans = [
    {
      title: "Basic",
      price: "97,00",
      subtitle: "Inicie e turbine suas vendas com CRM + Leads",
      link: "https://p.leadspj.com/auth/register?planId=cmgo3hhcc000112rr4tiwip6j",
      features: [
        "1.000 Créditos mensais",
        "3 Usuários",
        "CRM Integrado",
        "Multi-Kanban",
        "Campanhas Whatsapp com I.A",
        "Acesso imediato à base de dados",
        "Leads qualificados mês a mês",
        "Ideal para quem quer começar agora sem vínculo",
        "Suporte Prioritário"
      ]
    },
    {
      title: "Profissional",
      price: "159,00",
      subtitle: "Grandes Operações, Grandes recursos",
      link: "https://p.leadspj.com/auth/register?planId=cmgo3hhsd000212rrezc4ph7i",
      features: [
        "5.000 Créditos mensais",
        "5 Usuários",
        "CRM Integrado",
        "Multi-Kanban",
        "Campanhas Whatsapp com I.A",
        "Acesso imediato à base de dados",
        "Leads qualificados mês a mês",
        "Ideal para quem quer começar agora sem vínculo",
        "Avançado"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "320,00",
      subtitle: "Hora de avançar sua operação sem limites",
      link: "https://p.leadspj.com/auth/register?planId=cmgo3hi8g000312rr5iq5kv7e",
      features: [
        "10.000 Créditos mensais",
        "Usuários ilimitados",
        "CRM Integrado",
        "Multi-Kanban",
        "Campanhas Whatsapp com I.A",
        "Acesso imediato à base de dados",
        "Leads qualificados mês a mês",
        "Ideal para quem quer começar agora sem vínculo",
        "Suporte Prioritário",
        "Treinamento personalizado",
        "Onboarding exclusivo",
        "Consultoria estratégica"
      ]
    }
  ];

  const benefits = [
    {
      icon: Database,
      title: "Base Atualizada",
      description: "Acesso à maior base de empresas do Brasil, sempre atualizada"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp com I.A",
      description: "Automatize suas campanhas com inteligência artificial"
    },
    {
      icon: BarChart3,
      title: "Métricas Avançadas",
      description: "Acompanhe suas conversões em tempo real"
    },
    {
      icon: Users,
      title: "Gestão de Equipe",
      description: "Gerencie sua equipe com pipelines multi-kanban"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "TechSolutions",
      text: "Aumentamos nossas vendas em 300% nos primeiros 3 meses usando a LeadsPJ",
      rating: 5
    },
    {
      name: "Ana Costa",
      company: "Marketing Pro",
      text: "A automação do WhatsApp revolucionou nossa operação comercial",
      rating: 5
    },
    {
      name: "Roberto Lima",
      company: "Vendas Plus",
      text: "O CRM integrado facilitou muito nossa gestão de leads",
      rating: 5
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
              <Crown className="w-8 h-8 text-accent" />
              <span className="text-accent font-semibold text-lg">PLANOS LEADSPJ</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Escolha o Plano
              <span className="block bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
                Ideal para Você
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transforme sua operação comercial com a plataforma mais completa do mercado. 
              <span className="text-accent font-semibold"> CRM + Prospecção + WhatsApp com I.A</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Sem taxa de setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span>Suporte especializado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Decorative Icons */}
        <motion.div
          className="absolute top-32 left-12 opacity-20 hidden lg:block"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Crown className="w-20 h-20 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-16 opacity-20 hidden lg:block"
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Rocket className="w-24 h-24 text-white" />
        </motion.div>
      </section>

      {/* ============ PLANS SECTION ============ */}
      <section ref={plansRef} className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-start rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary-end" />
              <span className="text-primary-end font-semibold">NOSSOS PLANOS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              Planos que <span className="gradient-text">Aceleram</span> Resultados
            </h2>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Escolha o plano ideal para o tamanho da sua operação e comece a gerar mais leads qualificados hoje mesmo
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <PlanCard
                key={plan.title}
                title={plan.title}
                price={plan.price}
                subtitle={plan.subtitle}
                features={plan.features}
                isPopular={plan.isPopular}
                link={plan.link}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-4xl font-black text-text-primary mb-12">
              O que você ganha com <span className="gradient-text">todos os planos</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-text-primary mb-2">{benefit.title}</h4>
                  <p className="text-text-secondary">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ TESTIMONIALS SECTION ============ */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        
        {/* Background Elements */}
        <FloatingParticles count={20} color="rgba(229, 199, 66, 0.3)" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">DEPOIMENTOS</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              O que nossos <span className="text-accent">clientes dizem</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card-glass text-white"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-accent">{testimonial.name}</p>
                  <p className="text-sm opacity-80">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-primary-end" />
              <span className="text-primary-end font-semibold">COMECE AGORA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6">
              Pronto para <span className="gradient-text">Acelerar</span> suas Vendas?
            </h2>
            
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de empresas que já transformaram seus resultados com a LeadsPJ
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/sobre"
                className="btn-primary inline-flex items-center gap-3 text-xl"
              >
                Começar Agora
                <ArrowRight className="w-6 h-6" />
              </Link>
            </motion.div>

            <p className="text-sm text-text-secondary mt-4">
              ✓ Sem taxa de setup • ✓ Cancele quando quiser • ✓ Suporte especializado
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Planos;
