import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import { Home } from './Pages/Home.tsx'
import { RecoilRoot } from 'recoil'
// import { NavbarItems } from './components/NavbarItems'
import LandingPage from './Pages/LandingPage.tsx'
// import { Signup } from './components/Signup'
// import { Signin } from './components/Signin'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      {/* <Home /> */}
      <LandingPage />
      {/* <Signup /> */}
      {/* <NavbarItems /> */}
    </RecoilRoot>
  </StrictMode>,
)
