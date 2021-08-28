import { Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Pages/Home';
import { Cart } from './components/Pages/Cart';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
};

export default App;
