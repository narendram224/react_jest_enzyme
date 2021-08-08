import './App.css';
import Counter from './Counter';
import PersonList from './components/PersonList';

function App() {
  state={people:[]}
  return (
    <div className="App">
      <Counter /> 
      <PersonList  people={this.state.people} />
    </div>
  );
}

export default App;
