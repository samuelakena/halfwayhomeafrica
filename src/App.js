import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DesignScreen from './screens/DesignScreen';
import DesignDetailScreen from './screens/DesignDetailScreen';
import HomeScreen from './screens/HomeScreen';
import BlogScreen from './screens/BlogScreen';
import AboutusScreen from './screens/AboutusScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="main_container">
        <Route path="/product/:id" component={DesignDetailScreen} />
        <Route path="/ourdesigns" component={DesignScreen} />
        <Route path="/blog" component={BlogScreen} />
        <Route path="/aboutus" component={AboutusScreen} />
        <Route path="/cart" component={CartScreen} />
        <Route path="/signin" component={SigninScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
