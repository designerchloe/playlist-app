import logo from './logo.svg';
import './App.css';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  return (
    <div className='page-container'>
      <div className='main-column'>
        <h1>Create a Playlist</h1>
        <SearchBar />
        <SearchResults />
      </div>
    </div>
  );
}

export default App;
