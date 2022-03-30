import ChartOne from './components/ChartOne';
import ChartThree from './components/ChartThree';
import ChartTwo from './components/ChartTwo';
import MissionLogs from './components/MissionLogs';
import './index.css';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Space X: Overview</h1>
      </div>
      <div className='chart-holder'>
        <div className='chart-one'>
          <ChartOne/>
        </div>
        <div className='chart-two'>
          <ChartTwo/>
        </div>
        <div className='chart-three'>
          <ChartThree/>
        </div>
      </div>
      <div className='mission-log-title'>
        <h4>Mission Log</h4>
      </div>
      <div className='mission-log-container'>
        <MissionLogs/>
      </div>
    </div>
  );
}

export default App;
