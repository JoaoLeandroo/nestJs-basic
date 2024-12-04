import { Injectable } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable()
export class TaskService {
  //PRIVATE PARA ARMAZENAR EM MEMORIA, ENQUANTO NÃO ADICIONO BANCO DE DADOS
  private tasks: TaskDto[] = [];

  create(task: TaskDto) {
    this.tasks.push(task);
    console.log(this.tasks);
  }
}
