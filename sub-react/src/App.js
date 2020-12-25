import React from 'react'
import logo from './logo.svg'
import './App.css'

const jumpToVue = () => {
    window.history.pushState(null, 'sub-vue', '/sub-vue')
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    onClick={jumpToVue}
                >
                    Jump To Vue
                </button>
            </header>
        </div>
    )
}

export default App
