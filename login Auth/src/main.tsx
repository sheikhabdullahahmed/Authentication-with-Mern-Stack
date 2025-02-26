import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
<Auth0Provider
    domain="dev-fomn2stqgnujrctb.us.auth0.com"
    clientId="8ewadtjmc42SSa44b3ztbDKDF6Gf55cH"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
