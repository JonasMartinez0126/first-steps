import type { CSSProperties } from "react";

const firstName = 'Jonas';
const lastName = 'Martinez';

const favoriteGames = ['Elden Ring', 'Smash', 'Genshin Impact', 'Metal Gear'];
const isActive = true;

const address = {
    zipcode: 'ABC-2040',
    country: 'Paraguay'
};

const myStyles: CSSProperties = {
    backgroundColor: '#fafafa',
    borderRadius: isActive ? 10 : 20,
    padding: 10,
    marginTop: 10
}
export const MyAwesomeApp = () => {


    return (
        <>
            <h1>{ firstName }</h1>
            <h3>{ lastName }</h3>

            <p>{ favoriteGames.join(', ', ) }</p>

            <h2>{ isActive ? 'Activo' : 'No ACtivo' }</h2>

            <p
                style={ myStyles }
            >
                { JSON.stringify(address) }
            </p>
        </>
    )
}