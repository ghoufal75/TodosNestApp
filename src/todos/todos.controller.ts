import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TodosService } from './todos.service';
import { PostTodoDTO } from './dto/postTodo.dto';
import { PatchTodoDTO } from './dto/patchTodo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Post()
  postTodo(@Body() data: PostTodoDTO) {
    return this.todosService.addTodo(data);
  }

  @Patch('/:id')
  patchTodo(@Param('id') id: number, @Body() updateDTO: PatchTodoDTO) {
    return this.todosService.updateTodo(id, updateDTO);
  }
}
