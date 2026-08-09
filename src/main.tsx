import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GameRules from './pages/GameRules.tsx'
import Formats from './pages/Formats.tsx'
import Cards from './pages/Cards.tsx'
import BuildingADeck from './pages/BuildingADeck.tsx'

const router = createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/game-rules", element: <GameRules />},
  {path: "/formats", element: <Formats />},
  {path: "/cards", element: <Cards />},
  {path: "/building-a-deck", element: <BuildingADeck />},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
