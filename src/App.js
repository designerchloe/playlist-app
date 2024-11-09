import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Button from './Button';
import Playlist from './Playlist';

function App() {
  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar />
        <SearchResults />
      </div>
      <Playlist />
    </div>
  );
}

export default App;
