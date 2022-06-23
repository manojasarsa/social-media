import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../utilities/debounce";
import { UserDetails } from "./UserDetails";
import { searchUser } from "../features/user/userSlice";
import { followUser, unFollowUser } from "../features/user/helpers";
import { Link } from "react-router-dom";

export const AsideRight = () => {

    const {
        user: { users, foundUsers, searchTerm },
        auth: { userData, token }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const suggestionList = users.filter(
        suggestedUser => suggestedUser.username !== userData.username &&
            !suggestedUser.followers.find(existingUser => existingUser.username === userData.username)
    )

    const currentUser = users.find(user => user.username === userData.username);

    return (
        <aside className="w-full basis-2/6 flex-col ml-3 hidden sm:flex ">

            {/* <div className="sticky mt-3 flex items-center pl-4 pr-10 w-full rounded-md">
                <span className="basis-8 text-xl">
                    <BsSearch className="absolute left-20 bottom-2" />
                </span>
                <div className="flex-1">
                    <input
                        onChange={debounce(e => dispatch(searchUser(e.target.value)), 400)}
                        className="w-full bg-slate-200 text-center p-2 rounded-3xl placeholder:text-black cursor-pointer text-md"
                        type="search"
                        placeholder="Search"
                    />
                </div>
            </div> */}

            <div className="mt-2 top-12 right-0 w-full absolute bg-secondary-color-50 dark:bg-secondary-color-dm-50 rounded-lg">
                {searchTerm.trim() !== "" ? (
                    <div>
                        {foundUsers?.length === 0 && (
                            <h2 className="text-lg w-full text-center">No user found</h2>
                        )}

                        {foundUsers.map(user => (
                            <div key={user._id}
                                className="flex flex-wrap items-center gap-2 p-2 rounded-md hover:bg-secondary-color-100 dark:hover:bg-secondary-color-dm-100">
                                <div className="basis-14 shrink-0">
                                    {user?.profileUrl ? (
                                        <Link to={`/profile/${user?.username}`}>
                                            <img
                                                className="rounded-[50%]"
                                                src={user?.profileUrl}
                                                alt={`${user?.firstName} ${user?.lastName}`}
                                            />
                                        </Link>
                                    ) : (
                                        <div className="bg-primary-color-100 w-14 h-14 rounded-[50%] flex justify-center items-center text-3xl">{`${user?.firstName[0].toUpperCase()} ${user?.lastName[0].toUpperCase()}`}</div>
                                    )}
                                </div>

                                <div className="flex-1 flex flex-col">
                                    <Link to={`/profile/${user?.username}`} className="font-semibold">
                                        {`${user?.firstName} ${user?.lastName}`}
                                    </Link>
                                    <Link to={`/profile/${user?.username}`} className="text-secondary-color-200 text-sm">
                                        @{`${user?.username}`}
                                    </Link>
                                </div>

                                <div className="text-center">
                                    {user?.username === currentUser?.username ? (
                                        <span>You</span>
                                    ) : currentUser?.following.find(eachUser => eachUser?.username === user?.username) ? (
                                        <button
                                            onClick={() => dispatch(unFollowUser({ followUserId: user._id, token }))}
                                            title={`Follow ${user?.firstName} ${user?.lastName} `}
                                            className="border-2 border-secondary-color-50 px-2 py-1 xl:w-full rounded-[30rem] text-background-color hover:text-red-color hover:border-red-color"
                                        >
                                            Unfollow
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => dispatch(followUser({ followUserId: user._id, token }))}
                                            title={`Follow ${user?.firstName} ${currentUser?.lastName} `}
                                            className="bg-dark-color px-2 py-1 xl:w-full rounded-[30rem] text-background-color"
                                        >
                                            Follow
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : null}
            </div>

            {!searchTerm.length && (
                <div>
                    <h1 className="text-xl mt-6 text-center font-bold">Suggestions for you</h1>
                    <ul className="">
                        {suggestionList.map(user => (
                            <UserDetails key={user._id} currentUser={user} />
                        ))}
                    </ul>
                </div>
            )}
        </aside>
    )
};