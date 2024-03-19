import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { TasksProvider } from './components/Context/Context.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(<TasksProvider> <App /></TasksProvider> )
