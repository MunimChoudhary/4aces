import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Router from './Router'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
