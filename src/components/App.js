import React from 'react';

import Card from './Card';

import equilibrium from '../images/image-equilibrium.jpg';
import ethIcon from '../images/icon-ethereum.svg';
import avatar from '../images/image-avatar.png';

const cardOptions = {
  image: equilibrium,
  title: 'Equilibrium #3429',
  description: 'Our Equilibrium collection promotes balance and calm.',
  icon: ethIcon,
  amount: '0.041',
  currency: 'ETH',
  daysLeft: '3',
  avatar,
  creator: 'Jules Wyvern',
};

const App = () => (
  <>
    <Card options={cardOptions} />
  </>
);

export default App;
