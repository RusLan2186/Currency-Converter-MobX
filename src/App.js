import './scss/App.scss';
import Container from '@mui/material/Container';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <Header />
      </header>
      <main className='main'>
        <Container sx={{ padding: 0 }}>
          <Routes>
            <Route path='/home' element={<Main />}></Route>
          </Routes>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
