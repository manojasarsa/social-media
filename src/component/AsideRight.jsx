import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { UserDetails } from "./UserDetails";

export const AsideRight = () => {

    const {
        user: { users },
        auth: { userData }
    } = useSelector(state => state);

    const suggestionList = users.filter(
        suggestedUser => suggestedUser.username !== userData.username && 
        !suggestedUser.followers.find(existingUser => existingUser.username === userData.username)
    )

    return (
        <aside className="w-full basis-2/6 flex-col ml-3 hidden sm:flex">

            <div className="sticky mt-3 flex items-center pl-4 pr-10 w-full rounded-md">
                <span className="basis-8 text-xl">
                    <BsSearch className="absolute left-20 bottom-2" />
                </span>
                <div className="flex-1">
                    <input className="w-full bg-slate-200 text-center p-2 rounded-3xl 
                    placeholder:text-black cursor-pointer text-md" 
                        type="text" 
                        placeholder="Search" 
                    />
                </div>
            </div>

            <h1 className="text-xl mt-6 text-center font-bold">Suggestions for you</h1>
            <ul className="">
                {suggestionList.map(user => (
                    <UserDetails key={user._id} currentUser={user} />
                ))}
            </ul>     
        </aside>
    )
};