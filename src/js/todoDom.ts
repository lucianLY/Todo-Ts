import TodoTemplate from "./todoTemplate"
import { ITodoData } from "./typings"
import {findParentNode} from './utils'

class TodoDom extends TodoTemplate{
  private todoWapper: HTMLElement

  constructor (todoWapper: HTMLElement) {
    super()
    this.todoWapper = todoWapper
  }

  public addItem (todo: ITodoData): void {
    const oItem: HTMLElement = document.createElement('div')
    oItem.className = 'todo-item'
    oItem.innerHTML = this.todoView(todo)
    this.todoWapper.appendChild(oItem)
  }

  public removeItem (target: HTMLElement): void {
    const oParentNode:HTMLElement = findParentNode(target, 'todo-item')
    oParentNode.remove()
  }

  public changeCompleted (target: HTMLElement, completed: boolean): void{
    const oParentNode:HTMLElement = findParentNode(target, 'todo-item')
    const oContent = oParentNode.getElementsByTagName('span')[0]
    oContent.style.textDecoration = 'none'
  }
}

export default TodoDom