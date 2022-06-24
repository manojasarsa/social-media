import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiSettingsKnobs } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { AsideLeft, AsideRight, MobileNavBar, Post } from "../../component";
import { createPost, getAllPosts } from "../../features/post/helpers";
import Loader from 'react-spinner-loader';

export const Home = () => {

    const [showFilterPostModal, setShowFilterModal] = useState(false);

    const [sortPostBy, setSortPostBy] = useState("Latest");

    const [content, setContent] = useState("");

    const {
        posts: { posts, isLoading },
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

    const getSortedPosts = () => {
        
        const temp = userFeedPosts.slice();     // for creating new pure array

        if(sortPostBy === "Latest") {
            temp.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
        }

        if(sortPostBy === "Oldest") {
            temp.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt));
        }

        if(sortPostBy === "Trending") {
            temp.sort((a, b) => b?.likes?.likeCount - a?.likes?.likeCount);
        }
        return temp;
    }

    const sortedPosts = getSortedPosts();

    const postHandler = (e) => {
        e.preventDefault();
        if (content) {
            dispatch(createPost({ postData: { content }, token }));
            setContent("");
        }
    }

    return (
        <div>
            <MobileNavBar />

            <div className="flex justify-center px-5 sm:px-32 md:mt-4">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="md:mx-4 w-full sm:basis-2/3">

                        <header className="m-4 hidden sm:flex">
                            <h1 className="text-xl font-semi-bold">Home</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home"> ALCON </Link>
                        </header>

                        {/* create post */}
                        
                        <>
                            <div className="border sm:ml-3 sm:mr-0 flex px-2 py-3">

                                <div className="mt-3 w-12 h-12 text-lg flex-none">
                                    <img src={userData?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                                </div>

                                <div className="w-full px-4">
                                    <textarea 
                                        value={content}
                                        placeholder="What's happening?" 
                                        className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2" 
                                        onChange={(e) => setContent(e.target.value)} >
                                    </textarea>

                                    <div className="flex justify-end">
                                        <button 
                                            disabled={!content.trim().length}
                                            className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out disabled:cursor-not-allowed"
                                            onClick={postHandler}>
                                            Post
                                        </button>
                                    </div>
                                </div>
                            </div>
                        

                        {/* filter posts by date and trending */}

                        <div className="flex pl-0.5 pr-0.5 sm:pr-6 sm:px-5 py-3 justify-between relative">

                            <h1 className="text-xl">{sortPostBy} Posts</h1>

                                <GiSettingsKnobs
                                    className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl cursor-pointer"
                                    onClick={() => setShowFilterModal(prev => !prev)}>
                                </GiSettingsKnobs>
                                
                                {/* filter modal */}

                                {showFilterPostModal && <div className="w-30 h-22 px-1 shadow-xl bg-slate-100 border border-slate-300 text-slate-600 font-semibold absolute right-11 top-4 z-20 rounded-xl">
                                    <ul className="p-2 cursor-pointer text-start">
                                        <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Latest"); setShowFilterModal(false); }}>Latest</li>
                                        <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Oldest"); setShowFilterModal(false); }}>Oldest</li>
                                        <li className="p-1 hover:bg-slate-200 rounded" onClick={() => { setSortPostBy("Trending"); setShowFilterModal(false); }}>Trending</li>
                                    </ul>
                                </div> 
                                }
                        </div>

                        {/* Show Posts */}

                        {isLoading ? (
                            <div className="z-20">
                                <Loader show={isLoading} />
                            </div>
                        ) : (
                            !sortedPosts.length ? 
                                <h1 className="text-2xl font-bold text-center mt-8">No Posts, Add one!</h1> :
                                sortedPosts?.map(post => <Post key={post._id} post={post} />
                            )
                        )}

                        </>

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
}