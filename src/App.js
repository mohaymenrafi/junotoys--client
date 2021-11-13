import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Contact from './Pages/Contact/Contact';
import Products from './Pages/Products/Products';
import ProductDetails from './Pages/Products/ProductDetails/ProductDetails';
import Order from './Pages/Order/Order';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import ThankYou from './Pages/ThankYou/ThankYou';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/thank-you" component={ThankYou} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/order/:productid">
            <Order />
          </PrivateRoute>
          <Route path="/product/:productid" component={ProductDetails} />
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
