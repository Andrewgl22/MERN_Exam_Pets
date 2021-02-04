import './App.css';
import PetList from './components/PetList';
import PetEdit from './components/PetEdit';
import PetForm from './components/PetForm';
import PetDetail from './components/PetDetail';
import {Router} from '@reach/router';

function App() {
  return (
    <div>
      <Router>
        <PetList path="/pets" />
        <PetEdit path="/pet/edit/:id" />
        <PetForm path="/pet/new" />
        <PetDetail path="/pet/:id" />
      </Router> 
    </div>
  );
}

export default App;
