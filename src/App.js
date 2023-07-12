import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import BannerPart from './components/BannerPart';
import AIBooks from './components/AIBooks';
import CustomerFeedback from './components/CustomerFeedback';
import Need from './components/Need';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <hr/> */}
      <BannerPart/>
      <AIBooks/>
      <CustomerFeedback/>
      <Need/>
    </div>
  );
}

export default App;
