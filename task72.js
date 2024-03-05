const maxProfit = (prices = [7,1,5,3,6,4]) => {
    let currentPrice = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        currentPrice = Math.min(price, currentPrice);
        let profit = price - currentPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

console.log(maxProfit())