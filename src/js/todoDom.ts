import TodoTemplate from "./todoTemplate"
import { ITodoData } from "./typings"
import {findParentNode, createItem} from './utils'

class TodoDom extends TodoTemplate{
  private todoWapper: HTMLElement

  constructor (todoWapper: HTMLElement) {
    super()
    this.todoWapper = todoWapper
  }

  protected initList (todoData: ITodoData[]): void {
    if (todoData.length > 0) {
      const  oFrag: DocumentFragment = document.createDocumentFragment()
      todoData.map( (todo: ITodoData) => {
        const oItem: HTMLElement = createItem('div','todo-item', this.todoView(todo))
        oFrag.appendChild(oItem)
      })
      this.todoWapper.appendChild(oFrag)
    }
  }

  protected addItem (todo: ITodoData): void {
    const oItem: HTMLElement = createItem('div','todo-item', this.todoView(todo))
    this.todoWapper.appendChild(oItem)
  }

  public removeItem (target: HTMLElement): void {
    const oParentNode:HTMLElement = findParentNode(target, 'todo-item')
    oParentNode.remove()
  }

  public changeCompleted (target: HTMLElement, completed: boolean): void{
    const oParentNode: HTMLElement = findParentNode(target, 'todo-item')
    const oContent: HTMLElement = oParentNode.getElementsByTagName('span')[0]
    oContent.style.textDecoration = 'none'
  }
}

export default TodoDom