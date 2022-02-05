export function findParentNode(target: HTMLElement, className: string): any {
  while (target = target.parentNode as HTMLElement) {
    if (target.className === className) {
      return target
    }
  }
}