import { createContext, useState} from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is from context',
            rating: 10
        }
    ])

    const handleDelete = (id) => {
        if(window.confirm('are you sure you want to delete this item?')){
            setFeedback(feedback.filter(f => f.id !== id ))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback ])
    } 

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const editFeedback = (item) => { 
        setFeedbackEdit({
            item,
            edit: true,
        })
    }


    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id  ? 
            {...item, ...updItem} : item
        ))
    }




    return (
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            handleDelete,
            addFeedback,
            editFeedback,
            updateFeedback,
            setFeedbackEdit,

        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext