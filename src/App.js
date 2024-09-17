// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import { courses } from './Data';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main cards ={courses}/>
      <Footer />
    </div>
  );
}

export default App;
