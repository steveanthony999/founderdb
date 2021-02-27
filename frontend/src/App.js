import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Components
import FounderSignup from './components/FounderSignup';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Screens
import Home from './screens/Home';
import FounderProfileScreen from './screens/FounderProfileScreen';

function App() {
  return (
    <Router>
      <FounderSignup />
      <Navigation />
      <main>
        <Container>
          <Route exact path='/' component={Home} />
          <Route path='/founder/:id' component={FounderProfileScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
