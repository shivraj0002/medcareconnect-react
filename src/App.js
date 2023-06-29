import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Container from '@mui/material/Container'
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Box from '@mui/material/Box'
import { grey } from '@mui/material/colors';
import AboutUsPage from './components/About/About';
import ContactUs from './components/ConactPage/ContactUs';
import ProductsPage from './components/ProductPage/ProductPage';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<ProductsPage />}
        />
        <Route
          path="/about"
          element={<AboutUsPage />}
        />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
        <Route
          path="*"
          element={<h1>Error Page Not Found</h1>}
        />
      </Routes>
      <Box width={'100vw'} sx={{ bgcolor: grey[100] }}>
        <Footer />
      </Box>
    </div >
  );
}

export default App;
