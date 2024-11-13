import { ConfigService } from "@nestjs/config"
import { NestFactory } from "@nestjs/core"
import { NestExpressApplication } from "@nestjs/platform-express"

import { AppModule } from "./app.module"

const start = async () => {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const configService = app.get(ConfigService)
  const PORT = configService.get("PORT")
  app.enableCors({
    credentials: true,
    origin: true,
  })
  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`))
}
start()
