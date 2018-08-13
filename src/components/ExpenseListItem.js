import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

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
    <p>Amount: {amount}</p>
    <p>Created At: {createdAt}</p>
  </div>
);

// moment.unix(createdAt).toString("MMM DD, YYYY")
// export const ExpenseListItem = connect()(ExpenseListItemConnected);

// export default ExpenseListItem;
// export default connect()(ExpenseListItem);
