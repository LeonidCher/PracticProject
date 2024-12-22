import Layout from './Components/Layout'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/api/cards', {mode: 'no-cors'})
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
 
  return (
    <>
    <BrowserRouter>
     <Layout></Layout>
     {data  ? <h1>{data}</h1> : null}
    </BrowserRouter>
    </>
  )
}

export default App
