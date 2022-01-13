import './App.css';
import ArticleOverviewComponentFunc from './components/func/ArticleOverviewComponent';
import ArticleOverviewComponentClass from './components/class/ArticleOverviewComponent';
import AppWrapper from './components/func/App';

const data = {
  title: 'title123',
  content: 'contentText123',
  user: {
    username: 'Oleg',
  },
  createdAt: Date().toLocaleString(),
  imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}
function fetchUser() {
  return {
    username: 'Bill'
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppWrapper func ={fetchUser()}/>
        <ArticleOverviewComponentFunc data={ data }/>
        <ArticleOverviewComponentClass data={ data }/>
      </header>
    </div>
  );
}

export default App;
