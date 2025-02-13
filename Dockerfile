# Etapa de build
FROM node:16 AS builder

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código-fonte para o diretório de trabalho no container
COPY . .

# Expor a porta que o NestJS usará
EXPOSE 3000

# Etapa de desenvolvimento
FROM node:16-slim

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar o arquivo de build do primeiro estágio (builder) para o container
COPY --from=builder /app /app

# Instalar as dependências de desenvolvimento
RUN npm install --only=development

# Expor a porta que o NestJS usará
EXPOSE 3000

# Comando para iniciar o servidor com hot reload
CMD ["npm", "run", "start:dev"]
