import './App.css';
import { Footer, Navbar} from './components/index';
import { Home } from './pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
