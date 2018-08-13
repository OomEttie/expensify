import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = props => (
  <div>
    <h3>404!</h3>
    <Link to="/">go Home!</Link>
  </div>
);

export default NotFoundPage;
