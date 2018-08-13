export const getTotalExpensesAmount = expenses => {
  if (expenses.length == 0) {
    return 0;
  } else {
    const arrAmounts = expenses.map((expense) => expense.amount);
    
    const sum = arrAmounts.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);

    return sum;
  }
};
