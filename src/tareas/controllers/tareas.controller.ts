import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TareasService } from "./../services/tareas.service";

@Controller('api/tareas')
export class TareasController {

    constructor(
        private tareasService: TareasService
    ){}

    //traer todo
    @Get()
    getAll() {
        return this.tareasService.findAllTareas();
    }

    //traer uno
    @Get(':id')
    getOne(@Param('id') id: number){
        return this.tareasService.findOneTarea(id);
    }

    //crear
    @Post()
    CreateTarea(@Body() body:any) {
        return this.tareasService.createTarea(body);
    }

    //Editar
    @Put(':id')
    updateTarea(@Param('id') id: number, @Body() body:any){
        return this.tareasService.updateTarea(id, body);
    }

    @Delete(':id')
    deleteTarea(@Param('id') id:number){
        return this.tareasService.deleteTarea(id);
    }
}
