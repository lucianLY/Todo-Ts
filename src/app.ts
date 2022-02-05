import { ITodoData } from './js/typings'
import TodoEvent from './js/todoEvent'
;((doc) => {
  /**
   * input | button | 
   */
  const oInput: HTMLInputElement  = document.querySelector('input')
  const oAddBtn: HTMLButtonElement = document.querySelector('button')
  const oTodoList: HTMLDivElement = document.querySelector('.todo-list')


  const todoData: ITodoData[] = [
    {
      id: 1, 
      content: '张三',
      completed: true
    },
    {
      id: 2, 
      content: '李四',
      completed: true
    },
    {
      id: 3, 
      content: '王五',
      completed: true
    },
    {
      id: 4, 
      content: '赵六',
      completed: true
    }
  ] 

  const init = () : void => {
    bindEvent()
  }
  const todoEvent: TodoEvent = new TodoEvent(todoData, oTodoList)

  function bindEvent (): void {
    oAddBtn.addEventListener('click', handleAddBtnclick, false)
    oTodoList.addEventListener('click', handleListclick, false)
  }

  function handleAddBtnclick (): void {
    const val: string = oInput.value.trim()
    console.log('val =>', val)
    if (val.length) {
      todoEvent.addTodo(<ITodoData>{
        id: 5,
        content: '七七',
        completed: true
      })
    }
    console.log(todoData)
  }

  function  handleListclick (e: MouseEvent): void {
    const tar = e.target as HTMLElement
    const tagName = tar.tagName
    if (tagName === 'input' || tagName === 'button') {
      console.log(tagName)
      switch (tagName) {
        case 'input':
          break;
        case 'button':
          break
      }
    }
  }

  init()

})(document)
console.log(1)