FROM node:18-alpine as build
WORKDIR /app
COPY Frontend ./Frontend
COPY Backend ./Backend
WORKDIR /app/Frontend
RUN yarn install --frozen-lockfile
RUN yarn build
WORKDIR /app/Backend
RUN yarn install --frozen-lockfile
RUN yarn build

FROM node:18-alpine as production
WORKDIR /app
COPY --from=build /app/Backend ./Backend
WORKDIR /app/Backend
EXPOSE 5000
EXPOSE 80
CMD ["yarn", "start"]