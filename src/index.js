import React from 'react';
import ReactDOM from 'react-dom';

import {
  DATA_CARD
} from './data/data-card.js';

import App from './components/app.jsx';

const pageMain = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
};

ReactDOM.render(
    <App
      cards={DATA_CARD}
      pageMain = {pageMain}
    />,
    document.getElementById(`root`)
);
