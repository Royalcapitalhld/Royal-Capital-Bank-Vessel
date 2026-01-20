function generateASC860Journal(deal) {
  const { buyer, seller, price, bookValue, accumulatedDep } = deal;
  
  return {
    seller: [
      { dr: 'cash', amount: price },
      { dr: 'accum_depr', amount: accumulatedDep },
      { cr: 'real_estate_asset', amount: bookValue },
      { cr: 'gain_on_sale', amount: price - (bookValue - accumulatedDep) }
    ],
    buyer: [
      { dr: 'real_estate_asset', amount: price },
      { cr: 'cash', amount: price }
    ]
  };
}
