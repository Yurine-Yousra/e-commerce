import { BiUser } from "react-icons/bi"
const Comment = () => {
    return (
    <div className="flex flex-row items-start justify-start gap-4 bg-white p-4 border-b ">
        <div>
        <figure className=" rounded-[50%] border border-solid border-black p-2">
            <BiUser className="text-[20px]" />
        </figure>
        </div>

        <div>
        <h2 className="font-bold">Username</h2>
        <p>User Comment Lorem ipsum eaque molestiae nobis ipsum eaque molestiae nobis</p>
        </div>
    </div>
        )
}

export default Comment
