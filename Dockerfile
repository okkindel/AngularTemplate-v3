FROM node:lts-alpine as builder

COPY package.json ./

RUN npm set progress=true && npm config set depth 0 && npm cache clean --force

RUN npm install --save && mkdir / application

RUN mv ./node_modules ./application && mv ./package.json ./application

WORKDIR /application

RUN apk add git

COPY . .

RUN sh ./scripts/version.sh

RUN npm run build

FROM nginx:1.18.0-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /application/dist/project/browser /usr/share/nginx/html

RUN chmod -R 555 /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
