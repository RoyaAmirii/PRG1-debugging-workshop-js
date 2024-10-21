function calculatePercentageChange(original, newAmount) {
  if (original ===0) {
    return 0; //this way you avoid diving 0 by the original which is also worth 0
  }
  const Change = (newAmount - original);
  const percentageChange = (Change / original) * 100;
  return Math.ceil(percentageChange)
}

module.exports = { calculatePercentageChange }; 

calculatePercentageChange(50, 40); // should return -20 as there's been a 20% decrease from 50 to 40
