import Info from './components/Info/Info';
import './scss/App.scss';
import Container from '@mui/material/Container';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='wrapper'>
      <header>
        <Header />
      </header>
      <main className='main'>
        <Container sx={{ padding: 0 }}>
          <Info />
        </Container>
      </main>
    </div>
  );
}

export default App;
