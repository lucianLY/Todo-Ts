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
      const result = todoEvent.addTodo(<ITodoData>{
        id: 5,
        content: val,
        completed: true
      })

      if (result === 1001) {
        alert('列表项已存在')
      }

    }
    oInput.value = ''
  }

  function  handleListclick (e: MouseEvent): void {
    const tar = e.target as HTMLElement
    
    const tagName = tar.tagName.toLowerCase()
    console.log('tar =>', tar)
    if (tagName === 'input' || tagName === 'button') {
      const id = parseInt(tar.dataset.id)
      switch (tagName) {
        case 'input':
          todoEvent.toggleCompleted(tar, id)
          break;
        case 'button':
          todoEvent.removeTodo(tar, id)
          break
      }
    }
  }

  init()

})(document)
