import Card from "./shared/Card";
import { useState,useContext,useEffect } from "react"
import Button from "./shared/button";
import RatingSelect from "./ratingSelect";
import FeedbackContext from "../context/feedbackContext";


function FeedbackForm() {

    const [text,setText]=useState("")
    const [btnDisabled,setBtnDisabled]=useState(true)
    const [message,setMessage]=useState("")
    const [rating,setRating]=useState("")

    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
        }
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text===""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !=="" && text.trim().length <=10){
            setMessage("Text must be at least 10 character 😉")
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length >10){
            const newFeedback={
                text:text,
                rating:rating
            }

            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback);
            }

           
            setText('')
        }

    }


    return ( 
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us? 🪶</h2>
                <RatingSelect select={(rating)=>setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} value={text} type="text" placeholder="write a review" />
                    <Button isDisabled={btnDisabled} type="submit">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
     );
    
}

export default FeedbackForm;