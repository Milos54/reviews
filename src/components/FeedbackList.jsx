import FeedbackItem from "./FeedbackItem"
import {motion, AnimatePresence} from 'framer-motion'
import { useFeedbackContext } from "../hooks/useFeedbackContext"

function FeedbackList() {
    const {feedback} = useFeedbackContext()

    if(!feedback || feedback.length === 0 ) {
        return <p>No Feedback yet</p>
    }

    return (
        <div className="feedback-list">
        <AnimatePresence>
        {feedback.map((f) => (
            <motion.div
             key={f.id}
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
            >
                <FeedbackItem 
                    key={f.id}
                    item={f} 
                />
            </motion.div>
        ))}
        </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //     {feedback.map((f) => (
    //        <FeedbackItem 
    //        key={f.id}
    //        item={f} 
    //        handleDelete={handleDelete}
    //        />
    //     ))}
    //     </div>
    // )
}

 
export default FeedbackList
