
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <BasicExample/>
    <ItemListContainer greeting={'Bienvenidos a la tienda'} />

       
    </>
  );
}

export default App;
