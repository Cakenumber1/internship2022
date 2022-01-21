import './App.css';
import { AppFunc } from './components/App/App';
import { ArticleOverviewComponentFunc } from './components/ArticleOverviewComponent/ArticleOverviewComponent';
import data_articles from './articles.json'
import data_notifications from './notifications.json'
import FeedContainer from './containers/FeedContainer/FeedContainer';
import NotificationContainer2 from './containers/NotificationContainer/NotificationContainer2';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthLayoutComponent from './components/AuthLayoutComponent/AuthLayoutComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import { routes } from './constants';
import RegisterComponent from './components/RegisterComponent/RegisterComponent';
import CommonLayoutComponent from './components/CommonLayoutComponent/CommonLayoutComponent';
import { isAuthenticated } from './authentication';
import NotFoundPageComponent from './components/NotFoundPageComponent/NotFoundPageComponent';
import Redirect from 'react-router-dom/es/Redirect';

const title = 'title123'
const content = 'contentText123'
const author = {
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
      <Router>
        {(isAuthenticated() ? <AppFunc fetchUser={fetchUser}/> : null)}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              (isAuthenticated()
                  ? <Redirect to="/feed"/>
                  : <Redirect to="/login"/>
              ))
          }}
          />
          <AuthLayoutComponent exact path={routes.LOGIN} component={LoginComponent}
                               isAuthenticated={isAuthenticated()}/>
          <AuthLayoutComponent exact path={routes.REGISTER} component={RegisterComponent}
                               isAuthenticated={isAuthenticated()}/>
          <CommonLayoutComponent exact path={routes.FEED} component={FeedContainer}
                                 isAuthenticated={isAuthenticated()}
                                 fetchArticles={() => {
                                   return new Promise((resolve) => {
                                     setTimeout(() => {
                                       resolve(data_articles);
                                     }, 1000)
                                   })
                                 }}/>
          <CommonLayoutComponent exact path={routes.ARTICLE} component={ArticleOverviewComponentFunc}
                                 isAuthenticated={isAuthenticated()}
                                 title={title}
                                 content={content}
                                 user={author}
                                 createdAt={createdAt}
                                 imageUrl={imageUrl}
          />
          <Route component={NotFoundPageComponent}/>
        </Switch>
      </Router>
      {(isAuthenticated()) ?
        <NotificationContainer2 fetchNotifications={() => {
          return new Promise((resolve) => {
            resolve(data_notifications)
          })
        }}/> : null}
    </div>);
}

export default App;
