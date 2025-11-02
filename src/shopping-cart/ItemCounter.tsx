import { useState } from "react";
//import "./ItemCounter.css";
import styles from "./ItemCounter.module.css";

interface Props {
    itemName: string;
    itemQuantity?: number;
};

export const ItemCounter = ({ itemName, itemQuantity = 1} : Props) => {

    const [count, setCount] = useState(itemQuantity);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubtract = () => {
        if(count === 1) return;
        setCount(count - 1);
    }

  return (
    <section className={styles['item-row']}>
        <span
            className={styles.text}
            style={{
                color: count === 1 ? 'red' : 'black'
            }}
        >{ itemName }</span>
        <button
            onClick={ handleAdd }
        >+1</button>
        <span
            
        >{ count }</span>
        <button
            onClick={ handleSubtract }
        >-1</button>
    </section>
  )
};
