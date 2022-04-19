import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../context/RestaurantsContext'
import RestaurantFinder from '../apis/RestaurantFinder'
import StarRating from '../components/StarRating'
import Reviews from '../components/Reviews'
import AddReview from '../components/AddReview'

