import { useParams } from "react-router-dom";

export default function User() {
    const { userId } = useParams();
    console.log(userId);
    return (
        <>
            <h1 className="text-3xl bg-yellow-400 text-center " >User is : {userId}</h1>
        </>
    )
}