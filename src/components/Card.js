import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Card.scss';

import timeLeftIcon from '../images/icon-clock.svg';
import viewIcon from '../images/icon-view.svg';

const Card = ({ options }) => {
  const {
    image,
    title,
    description,
    icon,
    amount,
    currency,
    daysLeft,
    avatar,
    creator,
  } = options;

  return (
    <section className='Card'>
      <div className='Card__image' style={{ backgroundImage: `url(${image})` }}>
        <div className='Card__image__details'>
          <img src={viewIcon} alt='View Details' />
        </div>
      </div>
      <div className='Card__info'>
        <h1 className='Card__title'>{title}</h1>
        <p className='Card__text'>{description}</p>
        <div className='Card__qty'>
          <div className='Card__amount'>
            <img className='Card__coin__icon' src={icon} alt='ETH Icon' />$
            {amount} {currency}
          </div>
          <div className='Card__timeLeft'>
            <img
              className='Card__timeLeft__icon'
              src={timeLeftIcon}
              alt='Time Left Icon'
            />
            {daysLeft} days left
          </div>
        </div>
        <div className='Card__line' />
        <div className='Card__creator'>
          <img className='Card__avatar' src={avatar} alt='Person avatar' />
          <p className='Card__name'>
            Creation of <span>{creator}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

Card.propTypes = {
  options: PropTypes.objectOf(PropTypes.string),
};

export default Card;
