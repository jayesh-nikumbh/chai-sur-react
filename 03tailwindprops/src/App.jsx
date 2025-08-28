import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    userName: "jayesh nikumbh",
    age: 19
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Telvant test</h1>
      <Card userName="chai aur code" btnText="Click me" />
      <Card userName="JCBro" btnText="Visit me" />
    </>
  )
}

export default App
