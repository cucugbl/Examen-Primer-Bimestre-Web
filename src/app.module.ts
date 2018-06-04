import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SistemaOperativoController, } from "./sistemaOperativo.controller";
import {soService} from "./so.service";

@Module({
  imports: [],
  controllers: [AppController,SistemaOperativoController],
  providers: [AppService,soService],
})
export class AppModule {}
