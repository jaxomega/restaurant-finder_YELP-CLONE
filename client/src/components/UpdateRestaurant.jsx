import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'

const UpdateRestaurant = (props) => {
    const { id } = useParams()
    let history = useHistory()
    const { restaurant } = useContext(RestaurantContext)
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [priceRange, setPriceRange] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            constresponse =await RestaurantFinder.get(`/${id}`)
            console.log(response.data.data);
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.location)
            setPriceRange(response.data.data.restaurant.price_range)
        };
        fetchData()
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const UpdateRestaurant = await RestaurantFinder.put(`/${id}`, {
            name,
            location,
            price_range: priceRange,
        });
        history.push('/')
    };
    retun (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="name"
                        className="form-control"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        id="location"
                        className="form-control"
                        type="text"
                    />
               </div>
                <div className="form-group">
                    <label htmlFor="price_range">Price Range</label>
                    <input
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        id="price_range"
                        className="form-control"
                        type="number"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-primary"
                >Submit</button>
            </form>
        </div>
    );
};

export default UpdateRestaurant;