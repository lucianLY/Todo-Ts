
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import { ITodoData } from '../src/js/typings'

/**
 * 
 * @param path 
 * @returns 
 */
export function readFile(path: string): string {
  return readFileSync(resolve(__dirname, path), 'utf-8')
}

/**
 * 
 * @param path 
 * @param data 
 */
export function writeFile(path: string, data: any): void {
  writeFileSync(resolve(__dirname, path), JSON.stringify(data))
}

/**
 * 
 * @param path 
 * @param fn 
 * @returns 
 */
export function fileOperation(path: string, fn?: any): string | any {
  let todoList: ITodoData[] = JSON.parse(readFile(path) || '[]')
  if (!fn) {
    return JSON.stringify(todoList)
  }
  todoList = fn(todoList)
  writeFile(path, todoList)

}