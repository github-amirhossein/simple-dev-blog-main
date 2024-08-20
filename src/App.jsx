import './App.css';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import { BrowserRouter  , Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Section2 />} />

        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
