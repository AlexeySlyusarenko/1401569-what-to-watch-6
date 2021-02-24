import React from 'react';
import ReactDOM from 'react-dom';

import {
  dataCard
} from './data/data-card.js';

import App from './components/app.jsx';

const pageMain = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
};

ReactDOM.render(
    <App
      cards={dataCard}
      pageMain = {pageMain}
    />,
    document.getElementById(`root`)
);
