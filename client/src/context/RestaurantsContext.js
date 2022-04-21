import React, { useState, createContext } from 'react'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [selectedRestaurants, setSelectedRestaurant] = useState(null)
    const addRestaurants = (restaurants) => {
        setRestaurants([...restaurants, restaurants])
    };
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                setRestaurants,
                addRestaurants,
                selectedRestaurants,
                setSelectedRestaurant
            }}
        >
            {props.children}
        </RestaurantsContext.Provider>
    )
};

export default RestaurantsContext;