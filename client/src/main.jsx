import ReactDOM from 'react-dom/client'
import Router from './routes/Routes'
import { StrictMode } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router />
    </StrictMode>
)