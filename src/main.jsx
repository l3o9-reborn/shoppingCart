import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import routes from './routes'
import { CartProvider } from './components/CartContext'
import GlobalStyle from './components/GlobalStyle'


const router=createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </StrictMode>,
)
