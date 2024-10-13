import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ShopContextProvider} from './Context/ShopContext.tsx';
import ShopCategory from './Pages/ShopCategory.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShopContextProvider>
      <App />
      
      
    </ShopContextProvider>

  </StrictMode>,
)

