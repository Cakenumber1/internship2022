import './App.css';
import ArticleOverviewComponentFunc from './components/func/ArticleOverviewComponent';
import ArticleOverviewComponentClass from './components/class/ArticleOverviewComponent';
import AppWrapperFunc from './components/func/App';
import AppWrapperClass from './components/class/App';

const title = 'title123'
const content = 'contentText123'
const user = {
  username: 'Oleg',
}
const createdAt = Date().toLocaleString()
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'

function fetchUser() {
  return {
    username: 'Bill'
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppWrapperFunc func={fetchUser}/>
        <AppWrapperClass func={fetchUser}/>
        <ArticleOverviewComponentFunc title={title} content={content} user={user} createdAt={createdAt} imageUrl={imageUrl}/>
        <ArticleOverviewComponentClass title={title} content={content} user={user} createdAt={createdAt} imageUrl={imageUrl}/>
      </header>
    </div>
  );
}

export default App;
