# Deploy no EasyPanel

Este documento contém as instruções para fazer deploy da aplicação LeadsPJ no EasyPanel.

## Arquivos de Configuração

- `Dockerfile`: Configuração multi-stage para build otimizado
- `docker/nginx.conf`: Configuração do Nginx para SPA React
- `.dockerignore`: Exclusão de arquivos desnecessários

## Configuração no EasyPanel

### 1. Criar Nova Aplicação

1. Acesse o painel do EasyPanel
2. Clique em "Create Application"
3. Escolha "From Source Code"

### 2. Configurações da Aplicação

**Source:**
- Repository: `[URL_DO_SEU_REPOSITORIO]`
- Branch: `main` (ou sua branch principal)
- Build Path: `/`

**Build:**
- Build Command: `docker build -t leadspj-site .`
- Dockerfile Path: `./Dockerfile`

**Deploy:**
- Port: `80`
- Health Check Path: `/health`

### 3. Variáveis de Ambiente (se necessário)

Se sua aplicação usar variáveis de ambiente, adicione-as na seção "Environment Variables":

```
NODE_ENV=production
VITE_API_URL=https://sua-api.com
```

### 4. Domínio Customizado

1. Vá para a seção "Domains"
2. Adicione seu domínio personalizado
3. Configure o SSL (automático no EasyPanel)

## Build Local (Teste)

Para testar o build localmente:

```bash
# Build da imagem
docker build -t leadspj-site .

# Executar container
docker run -p 8080:80 leadspj-site

# Acessar em http://localhost:8080
```

## Características da Configuração

### Dockerfile
- **Multi-stage build**: Reduz o tamanho da imagem final
- **Node.js 18 Alpine**: Imagem leve para build
- **Nginx Alpine**: Servidor web otimizado para produção

### Nginx
- **SPA Support**: Configurado para React Router
- **Cache**: Otimizado para arquivos estáticos
- **Compressão**: Gzip habilitado
- **Segurança**: Headers de segurança configurados
- **Health Check**: Endpoint `/health` para monitoramento

### Otimizações
- Cache de 1 ano para assets estáticos
- Compressão gzip para reduzir transferência
- Headers de segurança para proteção
- Configuração otimizada para SPA

## Troubleshooting

### Problema: Rotas não funcionam
- Verifique se o `try_files` está configurado no nginx.conf
- Certifique-se de que o React Router está configurado corretamente

### Problema: Assets não carregam
- Verifique se o build está sendo copiado para `/usr/share/nginx/html`
- Confirme se os caminhos dos assets estão corretos

### Problema: Build falha
- Verifique se todas as dependências estão no package.json
- Confirme se o comando `npm run build` funciona localmente