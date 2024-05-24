import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/components/Home'
import Add from './pages/Add';
import Header from './layout/Header';
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />

      </Routes>
    </>
  )
}

export default App
