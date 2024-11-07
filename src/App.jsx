//Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//App component's style sheet
import './App.css'

//Importing other child components
import ContextComponent from './ContextComponent';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
 

  return (
    <>
    {/* wrapping the child component which gonna use context inside the ContextComponent*/}
    <ContextComponent>
      <Header/>
      <ProductList/>
    </ContextComponent>
    </>
  )
}

export default App
