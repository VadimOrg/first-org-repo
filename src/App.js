import swHeader from './images/sw-header.webp';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="hero">
        <img className="img" src={swHeader} alt="Star Wars" />
      </div>
      <div className="textContainer">
        <h1 className="title">Watch yout favorite movies and TV shows</h1>
        <p className="text">
          Stream unlimited movies and TV shows on your pc, tablet, mobile and TV
        </p>
        <a className="button" href="#">
          Get started!
        </a>
      </div>
    </div>
  );
}

export default App;
