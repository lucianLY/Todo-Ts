
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export function readFile (path: string): string {
  return readFileSync(resolve(__dirname, 'todo.json'), 'utf-8')
}

export function writeFile(path: string, data: any): void {
  writeFileSync(resolve(__dirname, 'todo.json'), JSON.stringify(data))
}