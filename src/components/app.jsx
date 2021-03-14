import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import PageMain from './page-main.jsx';
import PageSignIn from './page-sign-in.jsx';
import PageMyList from './page-my-list.jsx';
import PageFilm from './page-film.jsx';
import PageAddReview from './page-add-review.jsx';
import PagePlayer from './page-player.jsx';
import PageNotFound from './page-not-found.jsx';

const App = (props) => {
  const {cards = [], pageMain = {}} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {/* Если использовать
          <Route path="/" exact render = {PageMain}>
          как можно передать пропсы card и pageMain в компонент PageMain? */}
          <PageMain
            cards = {cards}
            pageMain = {pageMain}
          />
        </Route>
        <Route path="/login" exact render = {PageSignIn} />
        <Route path="/mylist" exact render = {PageMyList} />
        <Route path="/films/:id" exact render = {PageFilm} />
        <Route path="/films/:id/review" exact render = {PageAddReview} />
        <Route path="/player/:id" exact render = {PagePlayer} />
        <Route render = {PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired,
  pageMain: PropTypes.object.isRequired,
};

export default App;
