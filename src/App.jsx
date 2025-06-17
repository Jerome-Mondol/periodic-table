import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import Table from './pages/Table'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
