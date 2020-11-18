import Polygon from 'polygon-maker/dist';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <Polygon shape="square" color="red"/>
      <Polygon shape="rectangle" color="coral"/>
      <Polygon shape="oval" color="yellow"/>
      <Polygon shape="triangleUp" color = "green"/>
      <Polygon shape="triangleDown" color = "blue"/>
      <Polygon shape="trapezoid" color = "purple"/>
      <Polygon shape="parallelogram" color = "pink"/>
    </div>
  );
}

export default App;