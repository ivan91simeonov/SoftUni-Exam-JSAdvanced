class VegetableStore{
    constructor(owner , location) {
        this.owner = owner ;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables (vegetables){
        for(let el of vegetables){
            let [type , quantity , price] = el.split(' ');
            quantity =  Number(quantity)
            const vegy = this.availableProducts.find(e => e.type === type);
            if(vegy){
                vegy.quantity += quantity;
                vegy.price = Math.max(price, vegy.price)
                
            }else {
                this.availableProducts.push({type , quantity , price});          
            }
        }

        return `Successfully added ${this.availableProducts.map(element=> element.type).join(', ')}`
    }

    buyingVegetables (selectedProducts){
        let currentTotalPrice = 0;
        selectedProducts.forEach(product => {
            let [type, quantity] = product.split(' ');
            quantity = Number(quantity);
            const currentVegy = this.findVegy(type);

            if(currentVegy) {
                if (currentVegy.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${currentTotalPrice.toFixed(2)}.`);
                }
                
                currentVegy.quantity -= quantity;
                const totalPrice = (currentVegy.price * quantity);
                currentTotalPrice += totalPrice;
            } else {
                throw new Error(`${type} is not available in the store, your current bill is $${currentTotalPrice.toFixed(2)}.`)
            }
        })
        

        return `Great choice! You must pay the following amount $${currentTotalPrice.toFixed(2)}.`
    }

    rottingVegetable (type, quantity){
       const currentVegi = this.findVegy(type);
       if(!currentVegi) {
         throw new Error `${type} is not available in the store.`
       }

       if(currentVegi.quantity <= quantity) {
           currentVegi.quantity = 0
       return `The entire quantity of the ${type} has been removed.`;
       }

       if(currentVegi.quantity > quantity) {
           currentVegi.quantity -= quantity;
            return  `Some quantity of the ${type} has been removed.`
       }
    }

    revision() {
        let rev = `Available vegetables:\n`;

        const veggies = this.availableProducts.sort((a, b) => a.price - b.price).map(current => `${current.type}-${current.quantity}-$${current.price}`);

        rev += veggies.join('\n');

        rev += `\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`

        return rev;
    }

    findVegy(type) {
        return this.availableProducts.find(e => e.type === type);
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());
