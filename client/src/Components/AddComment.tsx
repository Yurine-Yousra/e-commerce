import { useState } from "react"
const AddComment = () => {
    const [comment , setComment] = useState('')
    const HandelChange = (e) => {
        setComment(e.target.value)
    }
  return (
    <form className="w-[100%] m-auto flex flex-col items-center gap-4">
       <textarea onChange={HandelChange} className="form__input mt-6" rows={3}/>
       <button className="btn__secondary rounded-none  px-4 py-3">Submit</button>
    </form>
  )
}

export default AddComment
