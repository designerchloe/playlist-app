import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import Track from './Track';

function App() {
  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar />
        <Track />
      </div>
    </div>
  );
}

export default App;
