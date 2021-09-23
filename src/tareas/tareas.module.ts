import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TareasService } from './services/tareas.service';
import { TareasController } from './controllers/tareas.controller';
import { Tarea } from './entities/tarea.entity';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Tarea, User, Profile])
  ],
  providers: [TareasService, UserService],
  controllers: [TareasController, UserController]
})
export class TareasModule {}
