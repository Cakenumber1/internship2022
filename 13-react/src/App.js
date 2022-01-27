import './App.css';

import {useState} from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch}
  from 'react-router-dom';

import ArticleOverviewComponent from './components/ArticleOverviewComponent';
import AuthLayoutComponent from './components/AuthLayoutComponent';
import CommonLayoutComponent from './components/CommonLayoutComponent';
import LoginComponent from './components/LoginComponent';
import NavBarComponent from './components/NavBarComponent';
import NotFoundPageComponent from './components/NotFoundPageComponent';
import RegisterComponent from './components/RegisterComponent';
import {routes} from './constants';
import FeedContainer from './containers/FeedContainer';
import NotificationContainer2 from './containers/NotificationContainer';
import {AuthenticationContext} from './context/authenticationContext';
import {fetchData, fetchDataWithDelay} from './fakeServer/fetch/fetchFunctions';
const title = 'title123';
const content = 'contentText123';
const author = {
  username: 'Oleg',
};
const createdAt = Date().toLocaleString();
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
function App() {
  const [user, setUser] = useState('Oleg');
  return (
    <AuthenticationContext.Provider value={[user, setUser]} className="App">
      <Router>
        {user ? <NavBarComponent/> : null}
        <Switch>
          <Route exact path="/" render={() => {
            return (
              (user ?
                  <Redirect to="/feed"/> :
                  <Redirect to="/login"/>
              ));
          }}
          />
          <AuthLayoutComponent
            exact path={routes.LOGIN} component={LoginComponent}
          />
          <AuthLayoutComponent
            exact path={routes.REGISTER} component={RegisterComponent}
          />
          <CommonLayoutComponent
            exact path={routes.FEED} component={FeedContainer}
            fetchArticles={fetchDataWithDelay}
          />
          <CommonLayoutComponent
            exact path={routes.ARTICLE} component={ArticleOverviewComponent}
            title={title}
            content={content}
            user={author}
            createdAt={createdAt}
            imageUrl={imageUrl}
          />
          <Route component={NotFoundPageComponent}/>
        </Switch>
      </Router>
      {user ?
        <NotificationContainer2 fetchNotifications={fetchData}/> : null}
    </AuthenticationContext.Provider>);
}

export default App;
