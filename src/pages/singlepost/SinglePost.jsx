import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AsideLeft, AsideRight, MobileNavBar, CreatePostModal } from "../../component";
import { getAllPosts } from "../../features/post/helpers";
import Loader from 'react-spinner-loader';
import { Link, NavLink } from "react-router-dom";

import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsShare, BsSuitHeartFill } from "react-icons/bs";
import { MdOutlineBookmarkBorder, MdOutlineBookmark, MdArrowBack } from "react-icons/md";
import { getFormattedDate } from "../../utilities/getFormattedDate";
import { likePost, dislikePost } from "../../features/post/helpers";
import { addToBookmark, removeFromBookmark } from "../../features/bookmark/helpers";

export const SinglePost = () => {

    const {
        user: { users },
        auth: { token, userData },
        bookmarks: { bookmarks },
        posts: { posts, isLoading }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch, token]);

    const { postId } = useParams();

    const navigate = useNavigate();

    const currentPost = posts.filter(post => post.id === postId)[0];
    const currentUser = users?.filter(user => user?.username === currentPost?.username)[0];

    return (
        <div>

            <MobileNavBar />

            <div className="z-20">
                <Loader show={isLoading} type="body" />
            </div>

            <div className="flex justify-center px-5 sm:px-32">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full sm:basis-2/3">

                        <header className="pl-2 pt-5 pb-3 hidden sm:flex">
                            <MdArrowBack className="text-xl mt-1 ml-1 hover:bg-slate-100 rounded-full" 
                            onClick={() => navigate(-1)} />
                            <h1 className="text-xl pl-2">Post</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home"> ALCON </Link>
                        </header>

                        <div
                            className="flex border ml-0 sm:mr-0 sm:mx-3 pl-2 pr-1 sm:pr-0 sm:px-5 py-3 hover:bg-slate-100"
                        >

                            <CreatePostModal />

                            <div className="mt-3 w-12 h-12 text-lg flex-none">
                                <img src={currentUser?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                            </div>

                            <div className="w-full px-4 py-3">

                                <div className="w-full flex justify-between relative">
                                    <h2 className="font-semibold">
                                        {`${currentUser?.firstName} ${currentUser?.lastName}`}
                                        <span className="text-slate-600 pl-1.5">
                                            @{currentPost?.username}
                                        </span>
                                    </h2>
                                  
                                </div>

                                <p className="py-3">{currentPost?.content}</p>

                                <p className="text-sm text-gray-600">{getFormattedDate(currentPost?.createdAt)}</p>

                                <div className="flex justify-between pt-4">
                                    <div className="flex">
                                        {/* {isLiked ? (
                                            <BsSuitHeartFill className="text-xl cursor-pointer text-red-600" onClick={e => {
                                                e.stopPropagation();
                                                dispatch(dislikePost({ postId: currentPost?._id, token }));
                                            }} />
                                        ) : (
                                            <BsSuitHeart className="text-xl cursor-pointer" onClick={e => {
                                                e.stopPropagation();
                                                dispatch(likePost({ postId: currentPost?._id, token }));
                                            }} />
                                        )} */}
                                        <span className="text-sm pl-4 font-semibold">
                                            {/* {pathname.includes("post") ? "" : currentPost?.likes?.likeCount ? currentPost?.likes?.likeCount : null} */}
                                        </span>
                                    </div>

                                    <div className="flex">
                                        <GoComment className="text-xl cursor-pointer" />
                                        <span className="text-sm pl-4 font-semibold">
                                            {/* {pathname.includes("post") ? "" : currentPost?.comments?.length > 0 ? currentPost?.comments?.length : ""} */}
                                        </span>
                                    </div>


                                    {/* {isBookmarked ? (
                                        <MdOutlineBookmark className="text-xl cursor-pointer" onClick={e => {
                                            e.stopPropagation();
                                            dispatch(removeFromBookmark({ token, postId: currentPost?._id }));
                                        }} />
                                    ) : (

                                        <MdOutlineBookmarkBorder className="text-xl cursor-pointer" onClick={e => {
                                            e.stopPropagation();
                                            dispatch(addToBookmark({ token, postId: currentPost?._id }));
                                        }} />
                                    )} */}

                                    <BsShare className="text-xl cursor-pointer" />
                                </div>
                            </div>
                        </div>

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
};