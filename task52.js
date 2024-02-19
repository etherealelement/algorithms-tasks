const prices1 = [7,1,5,3,6,4]

const maxProfit = (prices = prices1) => {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    }
    
    if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice
    }

  }
  return maxProfit;
}