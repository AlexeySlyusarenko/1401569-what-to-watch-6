import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {title = `Не определен`, imgURL = `img/shutter-island.jpg`} = props;

  return (
    <Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={imgURL} alt={title} width={280} height={175} />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    </Fragment>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
};

export default Card;
