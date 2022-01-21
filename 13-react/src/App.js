import './App.css';
import { AppFunc } from './components/App/App';
import { ArticleOverviewComponentFunc } from './components/ArticleOverviewComponent/ArticleOverviewComponent';
import data_articles from './articles.json'
import data_notifications from './notifications.json'
import FeedContainer from './containers/FeedContainer/FeedContainer';
import NotificationContainer2 from './containers/NotificationContainer/NotificationContainer2';

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
      <FeedContainer fetchArticles={() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(data_articles);
          }, 1000)
        })
      }}/>
      <NotificationContainer2 fetchNotifications={() => {
        return new Promise((resolve) => {
          resolve(data_notifications)
        })
      }}/>
    </div>);
}

export default App;
