// import logo from './logo.svg';
import './App.css';
import Final from './Final section/Final';
import HeroSec from './Herosection/Herosec';
import Navbar from './navbar/Navbar';
import Sectionb from './Sectionbottom/Sectionb';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSec/>
      <Sectionb />
      <Final/>
    </div>
  );
}

export default App;
