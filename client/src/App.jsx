import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import Display from './components/Display';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/products/:id' element={<Display/>} />
        <Route path='/' element={<Form/>} />
      </Routes>
    </div>
  );
}

export default App;
