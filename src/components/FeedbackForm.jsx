import React, { useEffect } from 'react'
import { useState } from 'react'
import { useFeedbackContext } from '../hooks/useFeedbackContext'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    const { addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit } = useFeedbackContext()

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }

    },[feedbackEdit])

    const handleTextChange = async (e) => {
        setText(e.target.value)

        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length < 11){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                setFeedbackEdit({
                    item: {},
                    edit: false,
                })
            } else {
                addFeedback(newFeedback)
            }

            setText('')
        }
    }

    return (
      <Card>
          <form onSubmit={handleSubmit}>
              <h2>How would you rate our service</h2>
              <RatingSelect select={(rating) => setRating(rating)} />
              <div className="input-group">
                  <input
                    onChange={handleTextChange}
                    type="text"
                    placeholder='write a review'
                    value={text}  
                />
                  <Button type='submit' isDisabled={btnDisabled} > Send </Button>
              </div>
              { message && <div className='message'>{message} </div> }
          </form>
      </Card>
    )
}

export default FeedbackForm
