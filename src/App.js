import './App.css';
import RestaurantApp from './components/RestaurantApp';
import data from './data.json'
function App() {
  return (
    <div className="App">
        <RestaurantApp data={data} />
    </div>
  );
}

export default App;
