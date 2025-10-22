import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-primary text-text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* LeadsPJ */}
          <div>
            <h3 className="text-xl font-bold mb-4">LeadsPJ</h3>
            <p className="text-sm opacity-90">
              A plataforma que une dados + automação + operação para transformar leads em vendas.
            </p>
            <Link to="/sobre" className="text-sm hover:text-accent transition-colors mt-2 inline-block">
              Saiba mais →
            </Link>
          </div>

          {/* Soluções */}
          <div>
            <h3 className="text-lg font-bold mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#" className="hover:text-accent transition-colors">CRM</a></li>
              <li><a href="/#" className="hover:text-accent transition-colors">Prospecção</a></li>
              <li><a href="/#" className="hover:text-accent transition-colors">Empresas Abertas Hoje</a></li>
              <li><a href="/#" className="hover:text-accent transition-colors">WhatsApp com I.A</a></li>
              <li><a href="/#" className="hover:text-accent transition-colors">Métricas</a></li>
            </ul>
          </div>

          {/* Conteúdos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Conteúdos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/treinamento" className="hover:text-accent transition-colors">Treinamento</Link></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Central de ajuda</a></li>
              <li><Link to="/contato" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
            <h3 className="text-lg font-bold mb-4 mt-6">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© {currentYear} LeadsPJ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
