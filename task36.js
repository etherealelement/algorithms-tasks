var BestTimetoBuyandSellStock = function (prices ) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }
  }

  return maxProfit;

}

console.log(BestTimetoBuyandSellStock([7, 1, 5, 3, 6, 4]));