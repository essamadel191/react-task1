import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App />

)
