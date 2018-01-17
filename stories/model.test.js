import React from 'react'
import { specs, describe, it } from 'storybook-addon-specifications'
import expect from 'expect'
import Model from '../src/model'
import microstate from 'microstates'

export default () => describe('Model', function() {
    it('has email address field', function() {
      expect(ms.state.email).toExist()
    })
})
