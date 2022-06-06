import './App.css';
{/* import the zodiac array */}
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';
import { zodiac } from './data';


function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      <Header />
      <Main zodiacs={zodiac}/>
      <Footer />

    </div>
  );
}

export default App;

{/* the Header component needs a string passed in as the `name` prop */}
{/* the Footer component needs a year passed in as the `year` prop */}
{/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}