import { useState } from 'react';

const Cars = ({brand, model, year}) => {

    const [car, setCar] = useState('');
    const [age, setAge] = useState('');
    const handleClick = () => {
        setCar(`You chose ${brand}`);
        setAge(`My car is ${2022 - year} years old `)
    }
    return (
        <div>
            <ul>
                <li>Car Brand: {brand}</li>
                <li>Car Model: {model}</li>
                <li>Model Year: {year}</li>
                <button onClick={handleClick}>Click Me</button>
            </ul>
            <p>{car}</p>
            <p>{age}</p>
        </div>
    );
}

export default Cars;
