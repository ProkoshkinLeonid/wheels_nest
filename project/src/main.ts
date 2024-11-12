import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

const PORT = 5001

const start = async () => {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: true,
  })
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}
start();
