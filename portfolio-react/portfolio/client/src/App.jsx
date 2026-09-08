import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
