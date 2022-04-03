import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"



export const useFeedbackContext = () => {
    let context = useContext(FeedbackContext)
  
    if(!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
      }
    
      return context
}

