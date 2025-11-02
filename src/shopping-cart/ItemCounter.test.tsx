import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => { 

    test('should render width default values', () => {  
        const name = 'Test Item'
        render(<ItemCounter itemName={name} />);

        expect( screen.getByText(name)).toBeDefined();
        expect( screen.getByText(name)).not.toBeNull();

    });

    test('should render width custom quantity', () => {  
        const name = 'Test Item';
        const quantity = 10;
        render(<ItemCounter itemName={name} itemQuantity={quantity} />);

        expect(screen.getByText(quantity));
    });

    test('should increase count when +1 button is pressed', () => {  
        render(<ItemCounter itemName={'Test Item'} itemQuantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();
    });

    test('should increase count when -1 button is pressed', () => {  
        render(<ItemCounter itemName={'Test Item'} itemQuantity={5} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();
    });

    test('should not decrease count when -1 button is pressed and quantity is 1', () => {  
        render(<ItemCounter itemName={'Test Item'} itemQuantity={1} />);

        const [, buttonSubtract] = screen.getAllByRole('button');

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is 1', () => {
        const name = 'Test Name';
        const quantity = 1;
        render(<ItemCounter itemName={name} itemQuantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');
    });

    test('should change to black when count is greater than 1', () => {
        const name = 'Test Name';
        const quantity = 2;
        render(<ItemCounter itemName={name} itemQuantity={quantity} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');
    });
});