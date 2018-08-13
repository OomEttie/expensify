import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({
  dispatch,
  id,
  description,
  amount,
  createdAt
}) => (
  <div>
    <NavLink exact to={`/edit/${id}`}>
      <h2>{description}</h2>
    </NavLink>
    <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
    <p>Created At: {moment(createdAt).format('MMM Do, YYYY')}</p>
  </div>
);

// moment.unix(createdAt).toString("MMM DD, YYYY")
// export const ExpenseListItem = connect()(ExpenseListItemConnected);

// export default ExpenseListItem;
// export default connect()(ExpenseListItem);
