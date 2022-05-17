import './App.css';
import './assets/styles/cardItem.css';
import Card from './assets/components/Card';
import tariffs from './assets/tariffs';

function App() {
  return (
    <div className="App">
       {
          tariffs.map((tariff) =>
          <Card nameTariff = {tariff.nameTariff} rate={tariff.rate} colorItem = {tariff.colorItem} colorShell={tariff.colorShell} ></Card>
          )
        }
    </div>
  );
}

export default App;
