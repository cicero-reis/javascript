 const stocks = [
    {
        id: 1,
        name: 'BMW',
        price: 110
    }, 
    {
        id: 2,
        name: 'Google',
        price: 200
    }, 
    {
        id: 3,
        name: 'Apple',
        price: 280
    }, 
    {
        id: 4,
        name: 'Twitter',
        price: 83
    },
]

const state = {
    funds: 10000,
    stocks: [
        {
            id: 1,
            quantity: 5
        }
    ]
}

const order = {
    stockId: 1,
    stockPrice: 110,
    quantity: 5
}

const buyStock = (state, { stockId, quantity, stockPrice }) => {

    const record = state.stocks.find(element => element.id == stockId);

    record ? 
        record.quantity += quantity :
        state.stocks.push({
            id: stockId,
            quantity: quantity
        })

        state.funds -= stockPrice * quantity

};

const sellStock = (state, { stockId, quantity, stockPrice}) => {

    const record = state.stocks.find(element => element.id == stockId)

    record.quantity > quantity ?
                    record.quantity -= quantity :
                    state.stocks.splice(state.stocks.indexOf(record), 1)

    state.funds += stockPrice * quantity

}

const stockPortfolio = (state, getters) => {

    return state.stocks.map(stock => {

        const record = getters.find(element => element.id == stock.id)

        stock.name = record.name
        stock.price = record.price

        return
    })

}

buyStock(state, order)

console.log(state)

sellStock(state, order)

stockPortfolio(state, stocks)

console.log(state)