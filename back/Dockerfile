#Usa una imagen que sera la base de tu container
FROM node:20

#Establece el directorio de trabajo en el contenedor
WORKDIR /home/app

#Copia el archivo package.json e instala las dependencias
COPY package*.json ./
RUN npm install
# Instala Angular CLI globalmente
RUN npm install -g @angular/cli

#Copia el resto de los archivos de la aplicación
COPY . .

#Expone el puerto para que la aplicación sea accesible
EXPOSE 4200



#Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["ng", "serve","--host","0.0.0.0"]