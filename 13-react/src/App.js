import './App.css';
import { AppFunc } from './components/App/App';
import { ArticleOverviewComponentFunc } from './components/ArticleOverviewComponent/ArticleOverviewComponent';


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
  return (<div className="App">
    <AppFunc fetchUser={fetchUser}/>
    <ArticleOverviewComponentFunc
      title={title}
      content={content}
      user={user}
      createdAt={createdAt}
      imageUrl={imageUrl}
    />
  </div>);
}

export default App;
