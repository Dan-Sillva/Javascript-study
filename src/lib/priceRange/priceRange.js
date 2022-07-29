export const priceRange = [
    {
        tooltip: "Abaixo de",
        min:null,
        max:100
    },
    {
        tooltip: "Entre",
        min:101,
        max:250
    },
    {
        tooltip: "Entre",
        min:251,
        max:500
    },
    {
        tooltip: "Acima de",
        min:500,
        max:null
    }
]

function Product (id, price){
    this.name = 'produto ' + id,
    this.price = price
}

export function upList(){
    const list = []
    
    for (let inter = 1; inter <= 15; inter++) {
        list.push(new Product(inter, Math.floor((Math.random() * 700) + 1)))
    }
    
    return list
}

export function filter(productList, prop){
    const list = []

    for (let block in productList) {
        if (productList[block].price > prop.min && productList[block].price < prop.max) {
            list.push(productList[block])
        }
    }

    return list
}

// Test 

// const productList = upList()

// const newList = filter(priceRange[2])

// console.log("Selecionado: ")
// console.log(priceRange[2])

// console.table(newList)


// console.log("Total: ")
// console.table(productList)