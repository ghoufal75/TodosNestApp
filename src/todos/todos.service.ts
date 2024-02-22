import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './models/todo.model';
import { PostTodoDTO } from './dto/postTodo.dto';
import { PatchTodoDTO } from './dto/patchTodo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getTodos() {
    return { todos: this.todos };
  }

  addTodo(data: PostTodoDTO) {
    data.accomplished = false;
    let id = 0;
    if (this.todos.length != 0) {
      id = this.todos[this.todos.length - 1].id + 1;
    }
    data.id = id;
    this.todos.push(data);
    return { msg: 'Todo was succesfully created' };
  }

  updateTodo(id: number, data: PatchTodoDTO) {
    console.log(data);
    if (
      this.todos.findIndex(function (el) {
        if (el.id == id) {
          return true;
        } else {
          return false;
        }
      }) != -1
    ) {
      this.todos[id] = { ...this.todos[id], ...data };
      return { msg: 'Todo succesfully updated' };
    } else {
      throw new NotFoundException();
    }
  }
}
