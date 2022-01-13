
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Switch>
    </>
  );
}

export default App;
