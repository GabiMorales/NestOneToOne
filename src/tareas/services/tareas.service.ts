import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Tarea } from "../entities/tarea.entity";

@Injectable()
export class TareasService {

    constructor(
        @InjectRepository(Tarea) private tareaRepo: Repository<Tarea> 
    ){}
    
    findAllTareas() {
        return this.tareaRepo.find();
    }

    findOneTarea(id: number){
        return this.tareaRepo.findOne(id);
    }

    createTarea(body:any){
        const newtarea = new Tarea();
        newtarea.name = body.name;
        return this.tareaRepo.save(newtarea);
    }

    async updateTarea(id:number, body:any){
        const tarea = await this.tareaRepo.findOne(id);
        this.tareaRepo.merge(tarea, body);
        return this.tareaRepo.save(tarea);
    }

    deleteTarea(id: number){
        this.tareaRepo.delete(id);
        return true;
    }
}
