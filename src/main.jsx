import React from 'react'
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import "/src/components/estilos.css"
import {Main} from './pages/Main'
import {ShopingCart} from './pages/ShopingCart'
import {NotFound} from './pages/NotFound'
import {Products} from './pages/Products'
import { Account } from './pages/Account'
import { Favorites } from './pages/Favorites'
import { Search } from './pages/Search'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/noSession" element={<h1>se necesita iniciar sesion</h1>}/>
        <Route path="/myAccount" element={<Account/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/favorites" element={<h1><Favorites/></h1>}/>
        <Route path="/shopingCart" element={<ShopingCart/>}/>
        <Route path="/products/:id" element={<Products/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
