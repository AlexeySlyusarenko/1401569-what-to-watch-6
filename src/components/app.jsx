import React from 'react';
import PropTypes from 'prop-types';

import PageMain from './page-main.jsx';

const App = (props) => {
  const {cards = [], pageMain = {}} = props;

  return (
    <PageMain
      cards = {cards}
      pageMain = {pageMain}
    />
  );
};

App.propTypes = {
  cards: PropTypes.array.isRequired,
  pageMain: PropTypes.object.isRequired,
};

export default App;
