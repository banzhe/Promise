import { render } from '@testing-library/react'
import React from 'react'
import App from './App'

it('renders without crashing', () => {
  const { baseElement } = render(<App />)
  expect(baseElement).toBeDefined()
})
