
import { readFileSync } from 'fs'
import { resolve } from 'path'

export function readFile (path: string): string {
  return readFileSync(resolve(__dirname, 'todo.json'), 'utf-8')
}