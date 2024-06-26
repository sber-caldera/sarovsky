import type { PojoOutput } from './types'


export function pojoProxy<T extends object> (target: T): PojoOutput<T> {
  return new Proxy(target, {
    get (t, p, receiver) {
      if ('string' === typeof p) {
        if (p[0] === 'g' && p[1] === 'e' && p[2] === 't') {
          const prop = p[3].toLowerCase() + p.substring(4)
          return () => t[prop as keyof T]
        }
        if (p[0] === 's' && p[1] === 'e' && p[2] === 't') {
          const prop = p[3].toLowerCase() + p.substring(4)
          return (val: any) => t[prop as keyof T] = val
        }
        return t[p as keyof T]
      } else {
        return t[p as keyof T]
      }
    }
  }) as PojoOutput<T>
}
