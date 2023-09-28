import Info from './components/Info/Info';
import './scss/App.scss';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className='wrapper'>
      <main className='main'>
        <Container sx={{ padding: 0 }}>
          <Info />
        </Container>
      </main>
    </div>
  );
}

export default App;
