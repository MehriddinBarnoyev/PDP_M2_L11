import StackedBarChart from "./Components/Polar";
import SalesDashboard from "./Components/StackedBarChart";

function App() {
  return (
    <div className="App container">
      <div className="row d-flex mt-5">
        <div className="col">
          <StackedBarChart />
        </div>
        <div className="col">
          <SalesDashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
