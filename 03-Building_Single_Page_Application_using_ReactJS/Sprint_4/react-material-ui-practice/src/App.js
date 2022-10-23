import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Poster from './Components/Poster';
import BlogBody from './Components/BlogBody';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='border'>
        
        <hr></hr>
      </div>
      <Poster/>
      <BlogBody/>
      <Footer/>
    </div>
  );
}

export default App;

