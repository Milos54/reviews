import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { useFeedbackContext } from '../hooks/useFeedbackContext'

function FeedbackItem({item}) {
    const { handleDelete, editFeedback } = useFeedbackContext() 
   
    return (
        <Card >
            <div className="num-display">{item.rating}</div>
            <button className="close">
                <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
            </button>
            <button className="edit">
                <FaEdit color='purple' onClick={() => editFeedback(item)} />
            </button>
            <div className="text-display">{item.text} </div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem
