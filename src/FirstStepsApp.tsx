import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
    productName: string;
    quantity: number;
}

const itemsInCart: ItemInCart[] = [
    { productName: 'Nintendo Switch 2', quantity: 10 },
    { productName: 'Pro Controller', quantity: 3 },
    { productName: 'Super Smash', quantity: 5 },
]
export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de Compras</h1>

            {
                itemsInCart.map( ({ productName, quantity }) => (
                    <ItemCounter key={productName} itemName={productName} itemQuantity={quantity} />
                ))
            }

            
        </>
    )
}