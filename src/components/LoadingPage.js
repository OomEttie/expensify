import React from 'react';

const LoadingPage = props => {
  return (
    <div className="loader">
      <img className="loader__image" src="/images/loader.gif" />
    </div>
  );
};

export { LoadingPage as default };
