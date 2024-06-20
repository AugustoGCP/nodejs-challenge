# Use a imagem base oficial do Node.js
FROM node:18.18.2

# Crie e defina o diretório de trabalho no container
WORKDIR /src

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código do projeto para o diretório de trabalho
COPY ./ /src/

RUN npx prisma generate
# RUN npx prisma studio

# Exponha a porta que a aplicação vai rodar
EXPOSE 9000
EXPOSE 5555

# Comando para rodar a aplicação
CMD ["npm", "start"]
