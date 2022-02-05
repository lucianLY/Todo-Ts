import $ from 'jquery'
import { ITodoData } from './typings'

/**
 * 装饰器有三个参数
 * @param target 
 * @param methodName 
 * @param descriptor 
 */
export function getTodoList(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  // 保存原有的 init 函数
  const _orgin = descriptor.value
  // 重写 init 函数
  descriptor.value = function (todoData: ITodoData[]) {
    $.get('http://localhost:8080/').then((res: string) => {
      if (!res) {
        return
      }
      todoData = JSON.parse(res)
    }).then(() => {
      _orgin.call(this, todoData)
    })
  }
}

/**
 * 
 * @param target 
 * @param methodName 
 * @param descriptor 
 */
export function removeTodo(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
): void {
  // 保存原有的  removeTodo
  const _orgin = descriptor.value

  descriptor.value = function (target: HTMLElement, id: number) {
    $.post('http://localhost:8080/remove', { id }).then((res: string) => {
      _orgin.call(this, target, id)
    })
  }
}

/**
 * 
 * @param target 
 * @param methodName 
 * @param descriptor 
 */
export function toggleTodo(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
){
// 保存原有的  toggleTodo
const _orgin = descriptor.value

descriptor.value = function (target: HTMLElement, id: number) {
  $.post('http://localhost:8080/toggle', { id }).then((res: string) => {
    _orgin.call(this, target, id)
  })
}
}