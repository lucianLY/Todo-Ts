import { ITodoData } from "./typings";

class TodoTemplate {
  protected todoView (todo: ITodoData) {
    const {id, content, completed} = todo
    return `
      <input type="checkbox" ${completed ? 'checked': ''} data-id="${id}"/>
      <span style="text-decoration: ${completed ? 'line-through' : 'none'}"></span>
      <button data-id="${id}">删除</botton>
    `
  }
}

export default TodoTemplate