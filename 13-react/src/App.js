import './App.css';
import { AppFunc } from './components/App/App';
import { ArticleOverviewComponentFunc } from './components/ArticleOverviewComponent/ArticleOverviewComponent';
import FeedContainer from './containers/FeedContainer/FeedContainer';
import NotificationContainer2 from './containers/NotificationContainer/NotificationContainer2';
import { fetchData, fetchDataWithDelay } from './fetch/fetchFunctions';

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

//height for test
function App() {
  return (
    <div className="App" style={{height: '2000px'}}>
      <AppFunc fetchUser={fetchUser}/>
      <ArticleOverviewComponentFunc
        title={title}
        content={content}
        user={user}
        createdAt={createdAt}
        imageUrl={imageUrl}
      />
      <FeedContainer fetchArticles={fetchDataWithDelay}/>
      <NotificationContainer2 fetchNotifications={fetchData}/>
    </div>);
}

export default App;
