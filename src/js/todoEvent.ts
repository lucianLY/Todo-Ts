import TodoDom from "./todoDom"
import {ITodoData} from "./typings"
import addItem from './todoDom'

class TodoEvent extends TodoDom {
  private todoData: ITodoData[]

  constructor(todoData: ITodoData[], todoWapper: HTMLElement) {
    super(todoWapper)
    this.todoData = todoData
    this.init()
  }

  protected init () {
    this.initList(this.todoData)
  }

  public addTodo (todo: ITodoData): undefined | number {
    const _todo = this.todoData.find( (item: ITodoData) => item.content === todo.content)
    if (!_todo) {
      this.todoData.push(todo)
      this.addItem(todo)
      return
    }
    return 1001
  }

  public removeTodo (target: HTMLElement, id: number): void {
    this.todoData = this.todoData.filter( (item: ITodoData) => item.id !== id)
    this.removeItem(target)
  }

  public toggleCompleted (target: HTMLElement, id: number): void {
    this.todoData = this.todoData.map( (item: ITodoData) => {
      if (item.id === id ) {
        item.completed = !item.completed
      }
      return item
    })
  }
}
export default TodoEvent