import React, { useContext, useEffect, usseContext } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantContext'
import { useHistory } from 'react-router-dom'
import StarRating from './StarRating'

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await RestaurantFinder.get('/')
            console.log(response.data.data);
            setRestaurants(response.data.data.restaurants)
        } catch (err) {}
        };
        fetchData();
    }, []);
    const handleDelete = async (e, id) => {
        e.stopPropagation();
        try {
            const response = await RestaurantFinder.delete(`/${id}`)
            setRestaurants(
                restaurants.filter((restaurant) => {
                    return restaurant.id !== id;
                })
            );
        } catch (err) {
            console.log(err)
        };
    };
    const handleUpdate = (e, id) => {
        e.stopPropagation()
        history.push(`/restaurants/${id}/update`)
    };
    const handleRestaurantSelect = (id) => {
        history.push(`/restaurants/${id}`)
    };
    const renderRating = (restaurant) => {
        if (!restaurant.count) {
            return <span className="text-warning">0 reviews</span>
        };
        return (
            <>
            <StarRating rating={restaurant.id} />
            <span className="text-warning 1">({restaurant.count})</span>
            </>
        );
    };
}