var BestTimetoBuyandSellStock = function (prices ) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const element = array[i];
    if (minPrice > element) {
      minPrice = element
    } else {
      maxProfit = Math.max(maxProfit, element - minPrice)
    }

  }

}

console.log(BestTimetoBuyandSellStock([7, 1, 5, 3, 6, 4]));