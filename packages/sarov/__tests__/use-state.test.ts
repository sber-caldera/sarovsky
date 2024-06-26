import { describe, test, expect } from 'vitest'
import { useState } from '../src/use-state'


describe('useState', () => {

  test('supports default object', () => {
    const { val } = useState({ val: 3 })
    expect(val).toBe(3)
  })

  test('supports setter and getter', () => {
    const { val, getVal, setVal } = useState({ val: 3 })
    setVal(7)
    expect(val).toBe(3)
    expect(getVal()).toBe(7)
  })

})
