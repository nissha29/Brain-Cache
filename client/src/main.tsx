import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>,
)
