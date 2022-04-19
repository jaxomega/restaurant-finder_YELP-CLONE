import React, { useState, useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'

const UpdateRestaurant = (props) => {
    const { id } = useParams()
    let history = useHistory()
    const { restaurants } = useContext(RestaurantsContext)
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
}