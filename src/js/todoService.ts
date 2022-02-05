import $ from 'jquery'
import { ITodoData } from './typings'

export function getTodoList (
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(target, methodName, descriptor)
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