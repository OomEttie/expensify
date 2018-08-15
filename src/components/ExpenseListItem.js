import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt
}) => (
  <Link className="list-item" exact to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('MMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
);

// moment.unix(createdAt).toString("MMM DD, YYYY")
// export const ExpenseListItem = connect()(ExpenseListItemConnected);

// export default ExpenseListItem;
// export default connect()(ExpenseListItem);
