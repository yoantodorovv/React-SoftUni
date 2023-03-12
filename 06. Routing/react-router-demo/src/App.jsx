import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import About from './components/About'
import Navigation from './components/Navigation'
import CharacterList from './components/CharacterList'
import CharacterInfo from './components/CharacterInfo'

function App() {


    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path='*' element={<h1>404</h1>} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/characters' element={<CharacterList />} />
                <Route path='/characters/:id/*' element={<CharacterInfo />} />
            </Routes>
        </div>
    )
}

export default App
