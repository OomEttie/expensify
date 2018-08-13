import moment from 'moment';

export const getVisibleExpenses = (
  expenses,
  { text, sortBy, startDate, endDate }
) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      // typeof startDate != 'number' || expense.createdAt >= startDate;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      // typeof endDate != 'number' || expense.createdAt <= endDate;
      const textMatch =
        expense.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy == 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy == 'amount') {
        return a.amount > b.amount ? -1 : 1;
      }
    });
};
