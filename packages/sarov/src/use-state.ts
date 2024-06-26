import type { PojoOutput } from './types'
import { settings } from './settings'
// import { pojoProxy } from './pojo-proxy'


// export function useState<T extends object> (defaults: T): PojoOutput<T> {
//   return pojoProxy({ ...defaults });
// }

export function useState<T extends object> (defaults: T): PojoOutput<T> {
  const setters = {} as any;
  const getters = {} as any;
  for (const key in defaults) {
    const [v, setV] = settings.useState(defaults[key])
    getters[key] = v
    setters[key] = setV
  }
  return new Proxy(defaults, {
    get (target, p, receiver) {
      if ('string' === typeof p) {
        if (p[0] === 'g' && p[1] === 'e' && p[2] === 't') {
          const prop = p[3].toLowerCase() + p.substring(4)
          return () => getters[prop as keyof T]
        }
        if (p[0] === 's' && p[1] === 'e' && p[2] === 't') {
          const prop = p[3].toLowerCase() + p.substring(4)
          return (val: any) => setters[prop as keyof T](val)
        }
        return getters[p as keyof T]
      } else {
        return getters[p as keyof T]
      }
    }
  }) as PojoOutput<T>
}
