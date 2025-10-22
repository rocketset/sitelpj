import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Como usar Empresas Abertas Hoje para gerar demanda B2B',
      excerpt: 'Estratégias práticas para abordar empresas recém-abertas e aumentar sua taxa de conversão em 300%.',
      category: 'Estratégia B2B',
      date: '15 Out 2025',
      readTime: '5 min',
    },
    {
      title: 'WhatsApp com I.A: Como personalizar mensagens em escala',
      excerpt: 'Descubra como automatizar conversas sem perder o toque humano e conquistar mais clientes.',
      category: 'WhatsApp & I.A',
      date: '12 Out 2025',
      readTime: '7 min',
    },
    {
      title: 'Definindo ICP: O primeiro passo para prospecção eficiente',
      excerpt: 'Aprenda a criar um Perfil de Cliente Ideal que direciona toda sua estratégia de vendas B2B.',
      category: 'Estratégia B2B',
      date: '10 Out 2025',
      readTime: '6 min',
    },
    {
      title: 'Multi-Kanban: Organize seu funil e aumente a produtividade',
      excerpt: 'Como estruturar pipelines eficientes que mantêm sua equipe alinhada e focada em resultados.',
      category: 'Operação & Métricas',
      date: '08 Out 2025',
      readTime: '4 min',
    },
    {
      title: 'Copy que converte: Templates para mensagens B2B',
      excerpt: 'Modelos testados de mensagens que geram resposta e abrem oportunidades de venda.',
      category: 'Copy & Criativos',
      date: '05 Out 2025',
      readTime: '8 min',
    },
    {
      title: 'Métricas B2B: O que realmente importa acompanhar',
      excerpt: 'Dashboard essencial para tomada de decisão: da abertura ao fechamento.',
      category: 'Operação & Métricas',
      date: '03 Out 2025',
      readTime: '5 min',
    },
  ];

  const categories = [
    'Todos',
    'Estratégia B2B',
    'WhatsApp & I.A',
    'Copy & Criativos',
    'Operação & Métricas',
    'Casos',
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="gradient-bg text-text-light py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Insights práticos para gerar demanda B2B
            </h1>
            <p className="text-xl lg:text-2xl opacity-95">
              Estratégias de prospecção, ICP/Oferta, WhatsApp com I.A, operação e métricas — sem enrolação.
            </p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="bg-background py-8">
        <div className="section-container">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? 'bg-accent text-text-primary'
                    : 'bg-white text-text-secondary hover:bg-accent hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="card group cursor-pointer">
              <div className="mb-4">
                <span className="inline-block bg-background px-3 py-1 rounded-full text-sm font-medium text-text-secondary">
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-end transition-colors">
                {post.title}
              </h3>
              
              <p className="text-text-secondary mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-sm text-text-secondary mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span>{post.readTime} leitura</span>
              </div>
              
              <a href="#" className="flex items-center gap-2 text-primary-end font-semibold group-hover:gap-3 transition-all">
                Ler artigo <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-primary text-text-light py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Receba novos artigos por e-mail
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Conteúdos exclusivos direto na sua caixa de entrada. Sem spam, só valor.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-6 py-3 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Quero receber
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
