import React from 'react';

import './cards-wrapper.scss';

export default function CardsWrapper({ children }: any) {
  return (
    <div className="cards-wrapper">
      {children}
    </div>
  );
}
