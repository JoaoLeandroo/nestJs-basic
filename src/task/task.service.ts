import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  //PRIVATE PARA ARMAZENAR EM MEMORIA, ENQUANTO NÃO ADICIONO BANCO DE DADOS
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
    console.log(this.tasks);
  }

  findById(id: string): TaskDto {
    const foundTask = this.tasks.filter((t) => t.id === id);

    if (foundTask.length) {
      return foundTask[0];
    }

    throw new NotFoundException(`Task with id ${id} not found`);
  }
}
