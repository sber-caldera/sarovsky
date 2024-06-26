
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

type Setters<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (val: T[K]) => void
}

type PojoOutput<T> = T & Getters<T> & Setters<T>

export function useState<T extends object> (defaults: T): PojoOutput<T> {
  const reactive = { ...defaults };
  return new Proxy(defaults, {
    get (target, p, receiver) {
      if ('string' === typeof p) {
        if (p[0] === 'g' && p[1] === 'e' && p[2] === 't') {
          const prop = p[3].toLowerCase() + p.substring(4)
          return () => reactive[prop as keyof T]
        }
        if (p[0] === 's' && p[1] === 'e' && p[2] === 't') {
          const prop = p[3].toLowerCase() + p.substring(4)
          return (val: any) => reactive[prop as keyof T] = val
        }
        return reactive[p as keyof T]
      } else {
        return reactive[p as keyof T]
      }
    }
  }) as PojoOutput<T>
}
