import { BookOpen, Target, Database, MessageSquare, Users, TrendingUp, FileText } from 'lucide-react';

const Treinamento = () => {
  const modules = [
    {
      icon: <Target className="w-12 h-12 text-accent" />,
      title: 'ICP e Oferta',
      description: 'Quem abordar, por quê e com qual proposta.',
      duration: '2 horas',
    },
    {
      icon: <Database className="w-12 h-12 text-accent" />,
      title: 'Base & Filtros',
      description: 'CNAE, regiões, portes e segmentações que funcionam.',
      duration: '1.5 horas',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-accent" />,
      title: 'Empresas Abertas Hoje',
      description: 'Rotina diária para chegar primeiro.',
      duration: '1 hora',
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-accent" />,
      title: 'WhatsApp com I.A',
      description: 'Estruturas de copy e personalização que convertem.',
      duration: '2.5 horas',
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: 'Funis & Equipe',
      description: 'Multi-Kanban, handoffs e boas práticas operacionais.',
      duration: '2 horas',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-accent" />,
      title: 'Métricas que importam',
      description: 'Abertura, resposta, oportunidades e ciclo.',
      duration: '1.5 horas',
    },
    {
      icon: <FileText className="w-12 h-12 text-accent" />,
      title: 'Playbooks por nicho',
      description: 'Modelos prontos (contábil, tech, educação etc.).',
      duration: '3 horas',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-bg text-text-light py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Do zero ao avançado em prospecção B2B
            </h1>
            <p className="text-xl lg:text-2xl opacity-95">
              Trilha para colocar a LeadsPJ em produção: da definição de ICP à otimização de conversão.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="section-container">
        <h2 className="text-4xl font-bold text-center mb-4">Módulos do Treinamento</h2>
        <p className="text-center text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
          Conteúdo prático e aplicável para você dominar todas as funcionalidades da plataforma
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="card">
              <div className="mb-4">
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
              <p className="text-text-secondary mb-4">{module.description}</p>
              <div className="text-sm text-accent font-semibold">
                ⏱ {module.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-background section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">O que você vai aprender</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Definir seu ICP (Perfil de Cliente Ideal) com precisão',
              'Usar filtros avançados para encontrar empresas qualificadas',
              'Aproveitar dados de Empresas Abertas Hoje para prospecção ativa',
              'Criar campanhas de WhatsApp com I.A que geram resposta',
              'Estruturar funis Multi-Kanban para sua equipe',
              'Acompanhar métricas que realmente impactam vendas',
              'Aplicar playbooks testados no seu nicho específico',
              'Otimizar continuamente seu processo de vendas B2B',
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-text-primary font-bold text-sm">✓</span>
                </div>
                <p className="text-lg text-text-primary">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Para quem é este treinamento</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Empreendedores',
                description: 'Que querem estruturar uma operação de vendas B2B eficiente',
              },
              {
                title: 'Gestores Comerciais',
                description: 'Que precisam escalar resultados sem aumentar custos',
              },
              {
                title: 'SDRs e Vendedores',
                description: 'Que buscam mais produtividade e melhores taxas de conversão',
              },
            ].map((audience, index) => (
              <div key={index} className="card text-center">
                <h3 className="text-xl font-bold mb-2 text-text-primary">{audience.title}</h3>
                <p className="text-text-secondary">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque Plano Mensal */}
      <section className="bg-gradient-primary text-text-light py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-accent text-text-primary px-4 py-2 rounded-full font-semibold mb-4">
              Exclusivo Plano Mensal
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Onboarding personalizado + Consultoria estratégica
            </h2>
            <p className="text-xl mb-8 opacity-95">
              No Plano Mensal você recebe treinamento personalizado, onboarding exclusivo 
              e consultoria estratégica para acelerar seus resultados desde o primeiro dia.
            </p>
            <a href="/#plans" className="btn-primary text-lg px-8 py-4 inline-block">
              Conhecer Plano Mensal
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto bg-background rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Quero participar do treinamento</h2>
          <p className="text-xl text-text-secondary mb-8">
            Preencha o formulário e nossa equipe entrará em contato
          </p>
          
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nome completo*"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                placeholder="E-mail corporativo*"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            
            <input
              type="tel"
              placeholder="Telefone/WhatsApp"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            
            <input
              type="text"
              placeholder="Empresa"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            
            <button type="submit" className="btn-primary w-full text-lg py-4">
              Solicitar Treinamento
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Treinamento;
