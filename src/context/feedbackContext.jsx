import { createContext,useState } from "react";
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext=createContext()


export const FeedbackProvider=({children})=>{
    const [feedback,setFeedback]=useState([
        {id:1, text:"Great Template😉",rating:10},
        {id:2, text:"Very Easy To Use😀",rating:9},
        {id:3, text:"User Friendly😍",rating:10}

    ])

    //update Feedback item
    const updateFeedback=(id,UpdateItem)=>{
      setFeedback(feedback.map((item)=>item.id === id? {...item,...UpdateItem}:item))
    }


    //Add Feedback

    const[feedbackEdit,setFeedbackEdit]=useState({item:{},edit:false})
      
      
    //set item to be updated

    const editFeedback=(item)=>{
      setFeedbackEdit({ item:item ,edit:true })
    }


    // delete feedback 

    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete ?🥺"))
          setFeedback(feedback.filter((item) => (
            item.id !== id
          )))
      }

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }


    return(
        <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit, updateFeedback}}>

            {children}

        </FeedbackContext.Provider>
        
    )
}
export default FeedbackContext