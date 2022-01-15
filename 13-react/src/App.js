import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppFunc } from './components/App/App';
import Counter from './components/Counter/Counter';
import { ArticleOverviewComponentFunc } from './components/ArticleOverviewComponent/ArticleOverviewComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';

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
    <Counter/>
    <LoginComponent login={(username, password) => {
      if(username && password)
      console.log('Form parameters: ', username, password)
    }}/>
  </div>);
}

export default App;
