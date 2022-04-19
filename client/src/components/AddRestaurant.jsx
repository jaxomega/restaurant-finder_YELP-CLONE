import React, {useState, useContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantContext } from '../context/RestaurantContext'

const AddRestaurant = () => {
    const { addRestaurant } = useContext(RestaurantContext)
    const [name, setName] = useState('')
    const [location, setlocation] = useState('')
    const [priceRange, setPriceRange] = useState('Price Range');
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post('/', {
                name,
                location,
                price_range: priceRange
            });
            console.log(response.data.data);
            addRestaurants(response.data.data.restaurant)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="">
            <form action="">
                <div className="form-row">
                    <div className="col">
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                </div>
            </form>
        </div>
    )
}