import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle, Target, Zap, MessageSquare, TrendingUp,
  Sparkles, ArrowRight, Rocket, Database, BarChart3, Users, Clock,
  Globe, Layers, Filter, Bot, LineChart, KanbanSquare, Plug
} from 'lucide-react';
import FloatingParticles from '../components/FloatingParticles';
import GradientBlob from '../components/GradientBlob';
import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';

const Home = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const benefits = [
    { icon: Database, text: 'Base de empresas segmentada e atualizada' },
    { icon: Clock, text: 'Empresas abertas hoje e por período' },
    { icon: MessageSquare, text: 'Campanhas de WhatsApp com I.A em escala' },
    { icon: Layers, text: 'Pipelines Multi-Kanban e gestão de equipe' },
    { icon: BarChart3, text: 'Métricas em tempo real do topo ao fechamento' },
    { icon: Globe, text: 'Integração com CRM e ferramentas do seu workflow' },
  ];

  const steps = [
    { icon: Target, title: 'Encontre', description: 'Filtre por CNAE, cidade, estado, porte e mais.' },
    { icon: Zap, title: 'Priorize', description: 'Use Empresas Abertas Hoje para iniciar relação.' },
    { icon: MessageSquare, title: 'Atue', description: 'Dispare campanhas com I.A e personalize.' },
    { icon: TrendingUp, title: 'Converta', description: 'Acompanhe métricas e conversões no CRM.' },
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
      <div className="overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      
      {/* ============ HERO SECTION ============ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        
        {/* Background Gradient Hero */}
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
        <FloatingParticles count={30} color="rgba(229, 199, 66, 0.4)" />

        {/* Gradient Blobs */}
        <GradientBlob 
          color1="rgba(229, 199, 66, 0.15)" 
          color2="rgba(255, 215, 0, 0.1)" 
          className="top-20 -left-40" 
          size={500} 
        />
        <GradientBlob 
          color1="rgba(255, 215, 0, 0.1)" 
          color2="rgba(229, 199, 66, 0.15)" 
          className="bottom-0 -right-40" 
          size={600} 
        />

        {/* Floating Decorative Icons */}
        <motion.div
          className="absolute top-32 left-12 opacity-20 hidden lg:block"
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database className="w-20 h-20 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-40 right-16 opacity-20 hidden lg:block"
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <TrendingUp className="w-24 h-24 text-white" />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 opacity-20 hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <MessageSquare className="w-16 h-16 text-white" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-32 opacity-20 hidden lg:block"
          animate={{ y: [0, 25, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >
          <BarChart3 className="w-20 h-20 text-white" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-10 opacity-15 hidden lg:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <Users className="w-16 h-16 text-white" />
        </motion.div>

        {/* Main Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-[#E5C742]" />
              <span className="text-white text-sm font-medium">
                Mais de <AnimatedCounter end={5000} suffix="+" /> clientes ativos
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
            >
              CRM de Vendas
              <br />
              com Lista de{' '}
              <motion.span 
                className="text-[#E5C742] inline-block"
                animate={{ 
                  filter: [
                    'drop-shadow(0 0 10px rgba(229, 199, 66, 0.5))',
                    'drop-shadow(0 0 20px rgba(229, 199, 66, 0.8))',
                    'drop-shadow(0 0 10px rgba(229, 199, 66, 0.5))',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                Leads CNPJ
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Encontre empresas abertas <span className="text-[#E5C742] font-bold">hoje</span>, qualifique com I.A e venda automaticamente via WhatsApp. Tudo em uma única plataforma.
            </motion.p>

            {/* Benefits Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const colors = ['from-blue-400 to-blue-600', 'from-purple-400 to-purple-600', 'from-green-400 to-green-600', 'from-pink-400 to-pink-600', 'from-orange-400 to-orange-600', 'from-indigo-400 to-indigo-600'];
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(229, 199, 66, 0.4)' }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 hover:border-[#E5C742]/50 transition-all"
                >
                  <div className={`bg-gradient-to-br ${colors[index]} rounded-lg p-2 flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white text-sm font-medium text-left">{benefit.text}</span>
                </motion.div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/sobre"
                  className="bg-[#E5C742] hover:bg-[#d4b833] text-black font-bold px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-all shadow-lg"
                >
                  Começar Agora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.a
                href="#como-funciona"
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-lg border-2 border-white/30 inline-flex items-center gap-2 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Como Funciona
                <Rocket className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#E5C742] mb-1">
                  <AnimatedCounter end={5000} suffix="+" />
                </div>
                <div className="text-white/80 text-sm">Clientes Ativos</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#E5C742] mb-1">
                  <AnimatedCounter end={98} suffix="%" />
                </div>
                <div className="text-white/80 text-sm">Satisfação</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-[#E5C742] mb-1">
                  <AnimatedCounter end={300} suffix="%" />
                </div>
                <div className="text-white/80 text-sm">Mais Conversões</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ============ COMO FUNCIONA ============ */}
      <section id="como-funciona" className="py-32 bg-white relative overflow-hidden">
        
        {/* Background decorative blobs */}
        <GradientBlob 
          color1="rgba(229, 199, 66, 0.05)" 
          color2="rgba(57, 28, 220, 0.05)" 
          className="top-0 right-0" 
          size={600} 
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#E5C742] text-black px-4 py-2 rounded-full text-sm font-bold mb-4"
            >
              NOSSO PROCESSO
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              Como Funciona?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              4 passos simples para transformar sua prospecção B2B em vendas reais
            </p>
          </motion.div>

          {/* Steps with connector line */}
          <div className="relative">
            {/* Connector line - hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#370CAF] via-[#E5C742] to-[#391CDC]" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const iconGradients = ['from-blue-500 to-blue-600', 'from-purple-500 to-indigo-600', 'from-pink-500 to-rose-600', 'from-green-500 to-teal-600'];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ y: -15 }}
                    className="relative group"
                  >
                    <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-md hover:shadow-2xl hover:border-[#391CDC] transition-all duration-300">
                      
                      {/* Number badge */}
                      <motion.div 
                        className={`absolute -top-6 -left-6 bg-gradient-to-br ${iconGradients[index]} text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg text-lg`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {index + 1}
                      </motion.div>

                      {/* Icon */}
                      <motion.div 
                        className={`bg-gradient-to-br ${iconGradients[index]} w-16 h-16 rounded-full flex items-center justify-center text-white mx-auto mb-6`}
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon className="w-8 h-8" />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed mb-6 text-center">{step.description}</p>
                      
                      {/* Learn more link */}
                      <motion.a
                        href="#"
                        className="text-[#391CDC] font-semibold text-sm inline-flex items-center gap-2 group/link hover:text-[#E5C742] transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Saiba mais
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ============ EXTRATOR DE LEADS PJ - FILTROS AVANÇADOS ============ */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        
        {/* Animated Background Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
            y: [0, -50, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1.4, 1.1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-violet-500/20 backdrop-blur-sm border border-violet-400/40 rounded-full px-6 py-2 mb-6"
            >
              <Database className="w-5 h-5 text-violet-300" />
              <span className="text-violet-200 font-semibold">Base de Dados Exclusiva</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Extrator de <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Leads PJ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Encontre empresas abertas hoje, filtre por CNAE, localização, porte e muito mais.
              Base atualizada diariamente com milhões de CNPJs ativos.
            </p>
          </motion.div>

          {/* Main Content - Image + List */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Left Column - List Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200"
              >
                <img
                  src="/leads-list.png"
                  alt="Lista de Leads"
                  className="w-full h-auto"
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#370CAF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl px-6 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  <span className="font-bold">2000 Leads</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 lg:order-2"
            >
              {[
                {
                  icon: <Target className="w-7 h-7" />,
                  title: 'Filtros Avançados',
                  desc: 'Encontre empresas por CNAE, cidade, estado, porte e situação cadastral',
                  gradient: 'from-purple-500 to-indigo-500'
                },
                {
                  icon: <Clock className="w-7 h-7" />,
                  title: 'Empresas Abertas Hoje',
                  desc: 'Acesse CNPJs recém-criados para ser o primeiro a abordar',
                  gradient: 'from-green-500 to-emerald-500'
                },
                {
                  icon: <Users className="w-7 h-7" />,
                  title: 'Dados Completos',
                  desc: 'CNPJ, razão social, telefone, email, endereço e capital social',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <Database className="w-7 h-7" />,
                  title: 'Base Atualizada',
                  desc: 'Milhões de CNPJs ativos sincronizados diariamente',
                  gradient: 'from-orange-500 to-yellow-500'
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex gap-4 bg-slate-800/60 backdrop-blur-md rounded-xl border-2 border-violet-500/30 p-6 group hover:border-violet-400 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-violet-500/20 transition-all cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 inline-flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white rounded-lg p-3 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-violet-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Bottom - Filters Showcase + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20"
          >
            
            {/* Two column layout: Image + Stats */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              
              {/* Left - Image (smaller and more contained) */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="text-left mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-2 bg-violet-500/20 backdrop-blur-sm border border-violet-400/40 rounded-full px-4 py-2 mb-4"
                  >
                    <Filter className="w-4 h-4 text-violet-300" />
                    <span className="text-sm font-bold text-violet-200">Filtros Inteligentes</span>
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                    Segmentação <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Poderosa</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Filtre por CNAE, localização, porte, situação cadastral e muito mais. Encontre exatamente o perfil de empresa ideal.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl shadow-violet-500/20 border-2 border-violet-500/30 group"
                >
                  <img
                    src="/leads-filters.png"
                    alt="Filtros Avançados"
                    className="w-full h-auto"
                  />
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>
              </motion.div>

              {/* Right - Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <h4 className="text-2xl font-black text-white mb-3">
                    Cobertura Nacional Completa
                  </h4>
                  <p className="text-gray-300">
                    Acesse milhões de empresas cadastradas em todo o Brasil com dados atualizados diariamente.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { 
                      icon: <Globe className="w-6 h-6" />, 
                      number: '27', 
                      label: 'Estados',
                      sublabel: 'Todos os UFs',
                      gradient: 'from-blue-500 to-cyan-500' 
                    },
                    { 
                      icon: <Filter className="w-6 h-6" />, 
                      number: '5000+', 
                      label: 'CNAEs',
                      sublabel: 'Categorias',
                      gradient: 'from-purple-500 to-pink-500' 
                    },
                    { 
                      icon: <Database className="w-6 h-6" />, 
                      number: '60M+', 
                      label: 'Empresas',
                      sublabel: 'Base ativa',
                      gradient: 'from-green-500 to-emerald-500' 
                    },
                    { 
                      icon: <CheckCircle className="w-6 h-6" />, 
                      number: '100%', 
                      label: 'Atualizado',
                      sublabel: 'Dados reais',
                      gradient: 'from-orange-500 to-amber-500' 
                    }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, type: "spring" }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative bg-slate-800/60 backdrop-blur-md border-2 border-violet-500/30 rounded-xl p-5 group hover:border-violet-400 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-violet-500/30 transition-all cursor-pointer overflow-hidden"
                    >
                      {/* Gradient background on hover */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                        initial={false}
                      />

                      <div className="relative z-10 transition-colors duration-300">
                        <div className={`inline-flex items-center justify-center bg-gradient-to-br ${stat.gradient} text-white rounded-lg p-2.5 mb-3 shadow-lg group-hover:shadow-xl transition-all`}>
                          {stat.icon}
                        </div>
                        <div className="text-3xl font-black text-white mb-1 transition-colors">
                          {stat.number}
                        </div>
                        <div className="text-sm font-bold text-gray-200 transition-colors">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-400 transition-colors">
                          {stat.sublabel}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)' }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to="/sobre"
                      className="w-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 text-white font-bold py-4 px-6 rounded-xl shadow-xl shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2 group"
                    >
                      <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                      <span>Começar Agora</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ============ SISTEMA EM AÇÃO ============ */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        
        {/* Background decorations */}
        <GradientBlob 
          color1="rgba(229, 199, 66, 0.1)" 
          color2="rgba(57, 28, 220, 0.1)" 
          className="top-0 right-0" 
          size={800} 
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#E5C742] text-black px-4 py-2 rounded-full text-sm font-bold mb-4"
            >
              PLATAFORMA COMPLETA
            </motion.span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6">
              Seu Sistema de <span className="text-[#391CDC]">Vendas</span> em um só lugar
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              CRM integrado + Base de Dados + Automação com I.A + Métricas em Tempo Real. Tudo que você precisa para fechar mais negócios.
            </p>
          </motion.div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            
            {/* Left: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#391CDC] to-[#E5C742] rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Image container */}
              <motion.div
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white bg-white"
              >
                <img 
                  src="/dashboard.png" 
                  alt="Dashboard LeadsPJ"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </motion.div>
            </motion.div>

            {/* Right: Features */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
                Tudo que você precisa para vender mais
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <span className="inline-block rounded-xl p-3 shadow-lg bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400">
                        <BarChart3 className="w-7 h-7 text-white" style={{filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'}} />
                      </span>
                    ),
                    title: 'Dashboard Inteligente',
                    desc: 'Visualize seus leads, contatos, campanhas e oportunidades em tempo real'
                  },
                  {
                    icon: (
                      <span className="inline-block rounded-xl p-3 shadow-lg bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600">
                        <Filter className="w-7 h-7 text-white" style={{filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'}} />
                      </span>
                    ),
                    title: 'Filtros Avançados',
                    desc: 'Encontre empresas por CNAE, região, porte, situação cadastral e mais'
                  },
                  {
                    icon: (
                      <span className="inline-block rounded-xl p-3 shadow-lg bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600">
                        <Bot className="w-7 h-7 text-white" style={{filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'}} />
                      </span>
                    ),
                    title: 'Automação com I.A',
                    desc: 'Envie campanhas de WhatsApp com mensagens personalizadas automaticamente'
                  },
                  {
                    icon: (
                      <span className="inline-block rounded-xl p-3 shadow-lg bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500">
                        <LineChart className="w-7 h-7 text-white" style={{filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'}} />
                      </span>
                    ),
                    title: 'Métricas Precisas',
                    desc: 'Acompanhe cada etapa do seu funil de vendas com dados detalhados'
                  },
                  {
                    icon: (
                      <span className="inline-block rounded-xl p-3 shadow-lg bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700">
                        <KanbanSquare className="w-7 h-7 text-white" style={{filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'}} />
                      </span>
                    ),
                    title: 'Kanban Colaborativo',
                    desc: 'Organize seu time com pipelines visuais e histórico completo'
                  },
                  {
                    icon: (
                      <span className="inline-block rounded-xl p-3 shadow-lg bg-gradient-to-br from-purple-500 via-violet-600 to-purple-700">
                        <Plug className="w-7 h-7 text-white" style={{filter:'drop-shadow(0 2px 6px rgba(0,0,0,0.2))'}} />
                      </span>
                    ),
                    title: 'Integração Total',
                    desc: 'Conecte com seus CRMs e ferramentas favoritas facilmente'
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#391CDC] transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/sobre"
                    className="bg-gradient-to-r from-[#391CDC] to-[#370CAF] hover:shadow-lg text-white font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Rocket className="w-5 h-5" />
                    Começar Agora
                  </Link>
                </motion.div>

                <motion.a
                  href="#"
                  className="bg-white border-2 border-[#391CDC] text-[#391CDC] font-bold px-8 py-4 rounded-xl inline-flex items-center justify-center gap-2 hover:bg-[#391CDC]/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Ver Demo
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

          </div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6 bg-gradient-to-br from-white via-purple-50/30 to-white rounded-3xl border border-purple-200/50 p-10 shadow-2xl"
            style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
          >
            {[
              { 
                label: 'Leads Processados', 
                value: '1M+', 
                icon: <BarChart3 className="w-10 h-10" />,
                gradient: 'from-blue-500 to-cyan-500',
                bgGradient: 'from-blue-50 to-cyan-50'
              },
              { 
                label: 'Taxa de Resposta', 
                value: '300%', 
                icon: <TrendingUp className="w-10 h-10" />,
                gradient: 'from-emerald-500 to-green-500',
                bgGradient: 'from-emerald-50 to-green-50'
              },
              { 
                label: 'Tempo de Setup', 
                value: '5min', 
                icon: <Zap className="w-10 h-10" />,
                gradient: 'from-yellow-500 to-orange-500',
                bgGradient: 'from-yellow-50 to-orange-50'
              },
              { 
                label: 'Clientes Ativos', 
                value: '375+', 
                icon: <Users className="w-10 h-10" />,
                gradient: 'from-purple-500 to-pink-500',
                bgGradient: 'from-purple-50 to-pink-50'
              },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
                }}
                className={`relative text-center p-6 rounded-2xl bg-gradient-to-br ${stat.bgGradient} border border-gray-200/50 group overflow-hidden cursor-pointer`}
              >
                {/* Animated background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.05, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Icon with gradient */}
                <motion.div 
                  className={`inline-flex items-center justify-center mb-4 bg-gradient-to-br ${stat.gradient} text-white rounded-xl p-3 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.icon}
                </motion.div>

                {/* Value with animation */}
                <motion.div 
                  className={`text-4xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 + 0.2, type: "spring" }}
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <div className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
                  {stat.label}
                </div>

                {/* Floating particles effect */}
                <motion.div
                  className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${stat.gradient} opacity-60`}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ============ CAMPANHAS DE WHATSAPP COM I.A ============ */}
      <section className="py-24 bg-gradient-to-br from-[#370CAF] via-[#391CDC] to-[#4a1f8a] relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#E5C742]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-[#E5C742]/20 backdrop-blur-sm border border-[#E5C742]/30 rounded-full px-6 py-2 mb-6"
            >
              <Bot className="w-5 h-5 text-[#E5C742]" />
              <span className="text-white font-semibold">Automação Inteligente</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Campanhas de WhatsApp{' '}
              <span className="text-[#E5C742]">com I.A</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Envie mensagens personalizadas em escala com Inteligência Artificial que escreve como humano.
              Automatize sua prospecção e multiplique seus resultados.
            </p>
          </motion.div>

          {/* Main Content - Two Columns */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <img
                  src="/campaigns.png"
                  alt="Campanhas de WhatsApp"
                  className="w-full h-auto"
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#E5C742]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-6 -right-6 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-2xl px-6 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-bold">100% Ativo</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#E5C742] to-[#FFD700] text-black rounded-2xl px-6 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span className="font-bold">I.A Personalizada</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Features List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Bot className="w-7 h-7" />,
                  title: 'I.A que Escreve como Humano',
                  desc: 'Mensagens personalizadas automaticamente com base no perfil de cada lead',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: <Target className="w-7 h-7" />,
                  title: 'Segmentação Avançada',
                  desc: 'Filtre por CNAE, cidade, porte e situação cadastral para atingir o público certo',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: <Zap className="w-7 h-7" />,
                  title: 'Disparo em Escala',
                  desc: 'Envie milhares de mensagens mantendo a personalização e autenticidade',
                  gradient: 'from-yellow-500 to-orange-500'
                },
                {
                  icon: <BarChart3 className="w-7 h-7" />,
                  title: 'Métricas em Tempo Real',
                  desc: 'Acompanhe enviados, falhas, pendentes e taxa de sucesso instantaneamente',
                  gradient: 'from-emerald-500 to-green-500'
                },
                {
                  icon: <MessageSquare className="w-7 h-7" />,
                  title: 'Templates Inteligentes',
                  desc: 'Crie campanhas com variáveis dinâmicas e personalize cada interação',
                  gradient: 'from-indigo-500 to-purple-500'
                },
                {
                  icon: <Clock className="w-7 h-7" />,
                  title: 'Agendamento Automático',
                  desc: 'Configure horários ideais e deixe o sistema trabalhar para você 24/7',
                  gradient: 'from-rose-500 to-pink-500'
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 group hover:bg-white/15 transition-all cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`flex-shrink-0 inline-flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white rounded-lg p-3 shadow-lg`}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#E5C742] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(229,199,66,0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/sobre"
                className="inline-flex items-center gap-3 bg-[#E5C742] hover:bg-[#FFD700] text-black font-bold px-10 py-5 rounded-xl shadow-2xl transition-all text-lg group"
              >
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Começar Minhas Campanhas Agora
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <p className="text-white/70 mt-4 text-sm">
              Sem cartão de crédito • Configure em 5 minutos
            </p>
          </motion.div>

        </div>
      </section>

      {/* ============ DEPOIMENTOS ============ */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block bg-[#E5C742] text-black px-4 py-2 rounded-full text-sm font-bold mb-4"
            >
              DEPOIMENTOS
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
              O Que Nossos <span className="text-[#391CDC]">Clientes</span> Dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Histórias reais de empresas que transformaram suas vendas com LeadsPJ
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative max-w-6xl mx-auto">
            <motion.div
              className="flex gap-6 pb-8"
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Depoimentos - renderizados 2x para loop infinito */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6">
                  {[
                    {
                      name: "Carlos Eduardo Silva",
                      role: "Diretor Comercial",
                      company: "TechSolutions Brasil",
                      text: "Cara, que ferramenta! Aumentamos 280% de conversão em 3 meses. O lance de pegar empresa que abriu hoje é diferenciado demais, chegamos antes da concorrência sempre.",
                      rating: 5
                    },
                    {
                      name: "Mariana Costa",
                      role: "CEO",
                      company: "Inovare Consultoria",
                      text: "Sinceramente? Revolucionou nosso comercial. A I.A escreve melhor que muito vendedor que eu já vi (risos). Batemos meta em 45 dias e já pagou o investimento do ano todo.",
                      rating: 5
                    },
                    {
                      name: "Roberto Mendes",
                      role: "Gerente de Vendas",
                      company: "Alpha Distribuidora",
                      text: "Finalmente uma plataforma que junta tudo num lugar só. Antes era planilha pra cá, WhatsApp pra lá... Agora tá tudo organizado e o time consegue trabalhar de verdade.",
                      rating: 5
                    },
                    {
                      name: "Juliana Oliveira",
                      role: "Fundadora",
                      company: "StartHub Digital",
                      text: "Eu estava super receosa de investir mais uma ferramenta, mas meu Deus... 18 dias e fechamos o primeiro cliente! Os filtros são muito precisos, você acha exatamente quem precisa.",
                      rating: 5
                    },
                    {
                      name: "Fernando Santos",
                      role: "Head de Growth",
                      company: "Vendas Pro",
                      text: "Já testei umas 7 ferramentas diferentes. O LeadsPJ é a única que não preciso ficar exportando, importando, integrando... Funciona. Meu time tá economizando umas 20h por semana fácil.",
                      rating: 5
                    }
                  ].map((testimonial, idx) => (
                    <motion.div
                      key={`${setIndex}-${idx}`}
                      className="min-w-[450px] bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-xl hover:shadow-2xl hover:border-[#391CDC] transition-all group"
                      whileHover={{ y: -8, scale: 1.02 }}
                    >
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-yellow-400 text-xl"
                          >
                            ⭐
                          </motion.span>
                        ))}
                      </div>

                      {/* Text */}
                      <p className="text-gray-700 leading-relaxed mb-6 text-base italic">
                        "{testimonial.text}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#391CDC] to-[#370CAF] flex items-center justify-center text-xl font-bold text-white shadow-lg group-hover:scale-110 transition-transform">
                          {testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-lg">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-sm text-[#391CDC] font-semibold">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg border-2 border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
              </div>
              <div className="text-left border-l-2 border-gray-200 pl-4">
                <div className="font-bold text-gray-900">375+ Clientes Ativos</div>
                <div className="text-sm text-gray-600">Média de 4.9/5 estrelas</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-32 bg-gradient-to-br from-[#370CAF] via-[#391CDC] to-[#4a1f8a] relative overflow-hidden">
        
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#E5C742]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FFD700]/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, -60, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge animado */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#E5C742]/20 backdrop-blur-sm border border-[#E5C742]/30 rounded-full px-6 py-2 mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#E5C742]" />
              <span className="text-white font-semibold text-sm">Milhares de empresas confiam</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
            >
              Pronto para{' '}
              <motion.span 
                className="text-[#E5C742] inline-block"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10x
              </motion.span>{' '}
              suas vendas?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed"
            >
              Junte-se a milhares de empresas que já transformaram sua prospecção B2B
            </motion.p>

            {/* Botão Principal com mais animações */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/sobre"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E5C742] via-[#FFD700] to-[#E5C742] text-black font-bold px-14 py-6 rounded-2xl shadow-2xl transition-all text-xl relative overflow-hidden group"
                  style={{ boxShadow: '0 10px 50px 0 rgba(229,199,66,0.4)' }}
                >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
                
                <motion.span
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center"
                >
                  <Rocket className="w-7 h-7 text-black" />
                </motion.span>
                
                <span className="relative z-10 font-black tracking-tight">
                  Começar Agora
                </span>
                
                <motion.span
                  className="flex items-center"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-7 h-7 text-black" />
                </motion.span>

                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_50px_15px_rgba(229,199,66,0.6)] transition-shadow duration-300"></span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Info text animado */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex items-center justify-center gap-6 text-white/80"
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-[#E5C742]" />
                <span className="text-sm font-medium">Setup em 5 minutos</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-[#E5C742]" />
                <span className="text-sm font-medium">Suporte dedicado</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-5 h-5 text-[#E5C742]" />
                <span className="text-sm font-medium">Dados seguros</span>
              </motion.div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      </div>
    </>
  );
};

export default Home;
