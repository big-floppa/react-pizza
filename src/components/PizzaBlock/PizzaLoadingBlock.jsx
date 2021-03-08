import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={0.5}
      width={260}
      height={520}
      viewBox="0 0 260 520"
      backgroundColor="#e2e2e2"
      foregroundColor="#ecebeb">
      <circle cx="130" cy="130" r="130" />
      <rect x="0" y="320" rx="6" ry="6" width="260" height="84" />
      <rect x="0" y="425" rx="6" ry="6" width="89" height="43" />
      <rect x="108" y="425" rx="23" ry="23" width="151" height="43" />
      <rect x="0" y="270" rx="3" ry="3" width="260" height="24" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
