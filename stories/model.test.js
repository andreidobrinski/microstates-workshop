import React from 'react'
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect'
import Model from '../src/model'
import microstate from 'microstates'

export default () => describe('Model', function() {
  let ms = microstate(Model)
  it('has an empty email field', function() {
    expect(ms.state.email).toEqual('')
  })
})
