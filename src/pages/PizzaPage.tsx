import React from 'react';
import PizzaFeature from '../features/PizzaFeature';

interface PizzaPageProps {}

const PizzaPage: React.FC<PizzaPageProps> = () => {
  return (
    <>
      <PizzaFeature />
    </>
  );
};

export default PizzaPage;
