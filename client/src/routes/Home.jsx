import React from 'react'
import Header from '../components/Header'
import AddRestaurant from '../components/AddRestaurant'
import ResaurantList from '../components/RestaurantList'

const Home = () => {
    return (
        <div>
            <Header />
            <AddRestaurant />
            <ResaurantList />
        </div>
    );
};

export default Home;