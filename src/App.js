import swHeader from './images/sw-header.webp';
import './App.css';

function App() {
  return (
    <div>
      <div>
        <img src={swHeader} alt="Star Wars" />
      </div>
      <div>
        <h1>Watch yout favorite movies and TV shows</h1>
        <p>
          Stream unlimited movies and TV shows on your pc, tablet, mobile and TV
        </p>
        <a href="#">Get started!</a>
      </div>
    </div>
  );
}

export default App;
