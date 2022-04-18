require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./db')

const morgan = require('morgan')

const app = express()

app.use(cors())
app.use(express.json())

//Get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {
    try {
        const restaurantRatingsData = await db.query(
            "select * from restaurants left join (select restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) as average_rating from reviews group by restaurant_id) reviews on restaurants.id = reviews.restaurant_id"
        )
        res.status(200).json({
            status: 'success',
            results: restaurantRatingsData.rows.length,
            data: {
                restaurants: restaurantRatingsData.rows,
            }
        })
    } catch (err) {
        console.log(err)
    }
});


//Get a restaurant



//Create a restaurant



//Update restaurants



//Delete restaurant