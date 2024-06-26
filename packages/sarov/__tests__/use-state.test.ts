import { describe, test, expect } from 'vitest'
import { init } from '../src/init'
import { useState } from '../src/use-state'


describe('useState', () => {

  test('supports default object', () => {
    init({ useState: (v: number) => [v, () => null] })
    const { val } = useState({ val: 3 })
    expect(val).toBe(3)
  })

  test('supports setter and getter', () => {
    init({ useState: (v: number) => [v, () => null] })
    const { val, getVal, setVal } = useState({ val: 3 })
    setVal(7)
    expect(val).toBe(3)
    expect(getVal()).toBe(7)
  })

})
