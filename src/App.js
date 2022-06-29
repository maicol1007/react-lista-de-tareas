import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import ListaTareas from './components/ListaTareas/ListaTareas';

function App() {
  return (
   <div>
    <Header 
      titulo='Lista de Tareas'
    />
    <ListaTareas />
   </div>
  );
}

export default App;
