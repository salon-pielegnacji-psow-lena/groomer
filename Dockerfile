FROM node
RUN mkdir /app
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200 49999
CMD ng serve --host 0.0.0.0 --disable-host-check --poll 1000