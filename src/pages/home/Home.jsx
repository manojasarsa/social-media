import { useEffect, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AsideLeft, AsideRight, Post, PostFilterModal } from "../../component";
import { getAllPosts } from "../../features/post/helpers";


export const Home = () => {

    const [showFilterPostModal, setShowFilterModal] = useState(false);

    const {
        post: { posts, isLoading },
        auth: { userData, token },
        user: { users }
    } = useSelector( state => state );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch, token]);

    const getUserName = (username) => users.filter(user => user.username === username)[0];

    const userFeedPosts = posts.filter(post => {
        return (
            post.username === userData.username || getUserName(post?.username)?.followers?.find(
                user => user.username === userData.username
            )
        )
    })


    return (
        <div>
            <div className="flex mx-12 my-4">
                <div className="mx-auto flex px-32 h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full basis-2/3">

                        <header className="flex p-4">
                            <h1 className="text-xl">Home</h1>
                        </header>

                        {/* create post */}

                        <div className="border ml-3 flex px-5 py-3">

                            <div className="mt-3 w-12 h-12 text-lg flex-none">
                                <img src="https://i.pravatar.cc/300?img=12" className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                            </div>

                            <div className="w-full px-4">
                                <textarea placeholder="What's happening?" className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2" >
                                </textarea>

                                <div className="flex justify-end">
                                    <button className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Post</button>
                                </div>
                            </div>
                        </div>

                        {/* filter posts by date and trending */}

                        <div className="ml-3 flex px-5 py-3 border justify-between relative">

                            <h1 className="text-xl">Latest Posts</h1>

                                <GiSettingsKnobs
                                    className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl cursor-pointer"
                                    onClick={() => setShowFilterModal(prev => !prev)}>
                                </GiSettingsKnobs>
                                
                                {/* filter modal */}

                                {showFilterPostModal && <div className="w-20 h-22 p-1 shadow-xl bg-slate-100 border border-slate-300 text-slate-600 font-semibold absolute right-11 top-6 z-20 rounded-xl">
                                    <ul className="p-1 cursor-pointer text-center">
                                        <li className="">Latest</li>
                                        <li className="">Oldest</li>
                                        <li className="">Trending</li>
                                    </ul>
                                </div> 
                                }
                        </div>

                        {/* Posts */}

                        {userFeedPosts.map(post => <Post key={post._id} post={post} />)}

                        {/* <Post /> */}

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
}