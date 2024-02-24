const maxProfit = (prices = [7,1,5,3,6,4]) =>  {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 0; i < prices.length; i++) {
        const current = prices[i];
        if (minPrice > current) {
            minPrice = current
        }

        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice
        }
    }

    return maxProfit;
};

console.log(maxProfit())

