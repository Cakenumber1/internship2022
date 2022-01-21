import './App.css';

import {BrowserRouter as Router, Redirect, Route, Switch}
  from 'react-router-dom';

import dataArticles from './articles.json';
import {isAuthenticated} from './authentication';
import {AppFunc} from './components/App/App';
import {ArticleOverviewComponentFunc}
  from './components/ArticleOverviewComponent/ArticleOverviewComponent';
import AuthLayoutComponent from
  './components/AuthLayoutComponent/AuthLayoutComponent';
import CommonLayoutComponent from
  './components/CommonLayoutComponent/CommonLayoutComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import NotFoundPageComponent from
  './components/NotFoundPageComponent/NotFoundPageComponent';
import RegisterComponent from
  './components/RegisterComponent/RegisterComponent';
import {routes} from './constants';
import FeedContainer from './containers/FeedContainer/FeedContainer';
import NotificationContainer2
  from './containers/NotificationContainer/NotificationContainer2';
import dataNotifications from './notifications.json';

const title = 'title123';
const content = 'contentText123';
const author = {
  username: 'Oleg',
};
const createdAt = Date().toLocaleString();
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

function fetchUser() {
  return {
    username: 'Bill',
  };
}

function App() {
  return (
    <div className="App">
      <Router>
        {(isAuthenticated() ? <AppFunc fetchUser={fetchUser}/> : null)}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              (isAuthenticated() ?
                  <Redirect to="/feed"/> :
                  <Redirect to="/login"/>
              ));
          }}
          />
          <AuthLayoutComponent
            exact path={routes.LOGIN} component={LoginComponent}
            isAuthenticated={isAuthenticated()}
          />
          <AuthLayoutComponent
            exact path={routes.REGISTER} component={RegisterComponent}
            isAuthenticated={isAuthenticated()}
          />
          <CommonLayoutComponent
            exact path={routes.FEED} component={FeedContainer}
            isAuthenticated={isAuthenticated()}
            fetchArticles={() => {
              return new Promise((resolve) => {
                setTimeout(() => {
                  resolve(dataArticles);
                }, 1000);
              });
            }}
          />
          <CommonLayoutComponent
            exact path={routes.ARTICLE} component={ArticleOverviewComponentFunc}
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
            resolve(dataNotifications);
          });
        }}/> : null}
    </div>);
}

export default App;
