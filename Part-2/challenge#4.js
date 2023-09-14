const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
  
  /* Write your code below. Good luck! 🙂 */
  
  const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  //console.log(calcTip(bills[0]));
  
  const tips = [];
  const totals = [];
  
  for(let i = 0; i < bills.length; i++){
      
      const tip = calcTip(bills[i]);
      tips.push(tip);
      totals.push(tip + bills[i]);
  
  }
  
  console.log(bills, tips, totals);