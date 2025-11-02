import { afterEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { FirstStepsApp } from "./FirstStepsApp";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockItemCounter = vi.fn( (props: unknown) => {
    return (<div data-testid="ItemCounter" />)
});

vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => mockItemCounter(props),
}));

/* vi.mock('./shopping-cart/ItemCounter', () => ({
    ItemCounter: (props: unknown) => <div data-testid="ItemCounter" itemName={props.itemName} itemQuantity={props.itemQuantity} />,
})); */

describe('FirstStepsApp', () => {  
    afterEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshop', () => {  
        const { container } = render(<FirstStepsApp />);

        expect(container).toMatchSnapshot();
    });

    test('should render the correct number of ItemCounter component', () => {  
        render(<FirstStepsApp />);

        const itemCounters = screen.getAllByTestId('ItemCounter');
        expect(itemCounters.length).toBe(3);
        //screen.debug();
    });

    test('should render ItemCounter width correct props', () => {  
        render(<FirstStepsApp />);

        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            itemName: 'Nintendo Switch 2', itemQuantity: 10
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            itemName: 'Pro Controller', itemQuantity: 3
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            itemName: 'Super Smash', itemQuantity: 5
        });
    });
});