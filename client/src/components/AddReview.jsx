import React, { useState } from 'react'
import RestaurantFinder from '../apis/RestaurantFinder'
import { useLocation, useParams, useHistory } from 'react-router-dom'

const AddReview = () => {
    const { id } = useParams()
    const location = useLocation()
    console.log(location);

    const history = useHistory
    console.log(id);

    const [name, setName] = useState('')
    const [reviewText, setReviewText] = useState('')
    const [rating, setRating] = useState('Rating')
    const handleSubmitReview = async (e) => {
        e.preventDefault()
        try {
            const response =await RestaurantFinder.post(`/${id}/addReview`, {
                name,
                review: reviewText,
                rating
            });
            history.push('/')
            history.push(location.pathname)
        } catch (err) {}
    };
    return (
        <div className="mb-2">
            <form action="">
                <div className="form-row">
                    <div className="form-group col-8">
                        <label htmlFor="name">Name</label>
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placholder="name"
                            type="text"
                            className="form-control"
                            />
                    </div>
                    
                </div>
            </form>
        </div>
    )
}