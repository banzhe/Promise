import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'virtual:uno.css'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <FluentProvider theme={webLightTheme}>
      <App />
    </FluentProvider>
  </React.StrictMode>,
)
