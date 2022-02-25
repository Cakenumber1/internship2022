import './App.css';

import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Redirect, Route, Switch}
  from 'react-router-dom';

import ArticleOverviewComponent from './components/ArticleOverviewComponent';
import AuthLayoutComponent from './components/AuthLayoutComponent';
import CommonLayoutComponent from './components/CommonLayoutComponent';
import LoginComponent from './components/LoginComponent';
import NavBarComponent from './components/NavBarComponent';
import NotFoundPageComponent from './components/NotFoundPageComponent';
import RegisterComponent from './components/RegisterComponent';
import UserProfileComponent from './components/UserProfileComponent';
import {routes} from './constants';
import FeedContainer from './containers/FeedContainer';
import NotificationContainer2 from './containers/NotificationContainer';
import {fetchData} from './fakeServer/fetch/fetchFunctions';
import NewArticleComponent from "./components/NewArticleComponent";

const title = 'title123';
const content = 'contentText123';
const author = {
  username: 'Oleg',
};
const createdAt = Date().toLocaleString();
const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';

function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">
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
          />
          <CommonLayoutComponent
            exact path={routes.PROFILE} component={UserProfileComponent}
          />
          <CommonLayoutComponent
            exact path={routes.CREATEARTICLE} component={NewArticleComponent}
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
    </div>);
}

export default App;
