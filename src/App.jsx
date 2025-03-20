import './App.css';
import Calculator from './components/Calculator';
import { CalculatorProvider } from './components/CalculatorProvider';
import Routes from './routes/RoutesApp';

function App() {
  return (
    <CalculatorProvider>
      <Routes />
    </CalculatorProvider>
  );
}

export default App;
