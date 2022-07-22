import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { MdOutlineBookmarkBorder, MdOutlineBookmark, MdArrowBack } from "react-icons/md";
import { getAllPosts, likePost, dislikePost, addComment } from "../../features/post/helpers";
import { addToBookmark, removeFromBookmark } from "../../features/bookmark/helpers";
import { AsideLeft, AsideRight, MobileNavBar, Comment } from "../../component";
import { getFormattedDate } from "../../utilities/getFormattedDate";
import Loader from 'react-spinner-loader';

export const SinglePost = () => {

    const [commentData, setCommentData] = useState({ content: "" });

    const { postId } = useParams();

    const commentRef = useRef(null);

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

    const currentPost = posts.filter(post => post.id === postId)[0];  // filter returns a new array of one single element (user). Therefore, index 0.

    const currentUser = users?.filter(user => user?.username === currentPost?.username)[0];

    const navigate = useNavigate();

    const isBookmarked = bookmarks?.find(id => id === currentPost?._id);

    const isLiked = currentPost?.likes?.likedBy?.find(user => user.username === userData.username);

    const { pathname } = useLocation();

    return (
        <div>
            <MobileNavBar />

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

                        <div className="flex flex-col border ml-0 sm:mr-0 sm:mx-3 pl-2 pr-1 sm:pr-0 sm:px-5 py-3">

                            <div className="flex ml-0 sm:mr-0 sm:mx-1 pl-0 pr-1 sm:pr-0 sm:px-1 py-3">

                                <div className="mt-3 w-12 h-12 text-lg flex-none">
                                    <img src={currentUser?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                                </div>

                                <div className="w-full px-4 py-3">

                                    <div className="w-full flex flex-col justify-between relative">
                                        <h2 className="font-semibold">
                                            {`${currentUser?.firstName} ${currentUser?.lastName}`}

                                        </h2>
                                        <span className="text-slate-600">
                                            @{currentPost?.username}
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className="px-3">

                                {isLoading ? (
                                    <div className="z-20">
                                        <Loader show={isLoading} />
                                    </div>
                                ) : <p className="py-3 max-w-xl break-words">{currentPost?.content}</p>}

                                {currentPost?.postImageUrl ? (<div className="max-w-3xl max-h-80 mx-auto bg-blue-100 rounded-md">
                                    <img
                                        src={currentPost?.postImageUrl}
                                        className="max-w-full max-h-80 rounded-md my-2 mx-auto"
                                        alt="avatar"
                                    />
                                </div>) : null}

                                <p className="text-sm text-gray-600 border-y-3">{getFormattedDate(currentPost?.createdAt)}</p>

                                <div className="border-y mt-4 py-2 px-3">

                                    <span className="text-sm font-semibold">
                                        {pathname.includes("post/postId") ? "" : currentPost?.likes?.likeCount ? currentPost?.likes?.likeCount : null}
                                    </span>

                                    <span className="pl-1 text-slate-500">
                                        {currentPost?.likes?.likeCount === 0 ? "" : (currentPost?.likes?.likeCount === 1 ? "Like" : "Likes")}
                                    </span>

                                    <span className="text-sm pl-12 font-semibold">
                                        {pathname.includes("post/postId") ? "" : currentPost?.comments?.length > 0 ? currentPost?.comments?.length : ""}
                                    </span>

                                    <span className="pl-1 text-slate-500">
                                        {currentPost?.comments?.length === 0 ? "" : (currentPost?.comments?.length === 1 ? "Comment" : "Comments")}
                                    </span>

                                </div>

                                <div className="flex justify-between py-4 px-2 border-t">
                                    <div className="flex">
                                        {isLiked ? (
                                            <BsSuitHeartFill className="text-xl cursor-pointer text-red-600" onClick={e => {
                                                e.stopPropagation();
                                                dispatch(dislikePost({ postId: currentPost?._id, token }));
                                            }} />
                                        ) : (
                                            <BsSuitHeart className="text-xl cursor-pointer" onClick={e => {
                                                e.stopPropagation();
                                                dispatch(likePost({ postId: currentPost?._id, token }));
                                            }} />
                                        )}
                                    </div>

                                    <div className="flex">
                                        <GoComment className="text-xl cursor-pointer" />
                                    </div>

                                    {isBookmarked ? (
                                        <MdOutlineBookmark className="text-xl cursor-pointer text-blue-700" onClick={e => {
                                            e.stopPropagation();
                                            dispatch(removeFromBookmark({ token, postId: currentPost?._id }));
                                        }} />
                                    ) : (

                                        <MdOutlineBookmarkBorder className="text-xl cursor-pointer" onClick={e => {
                                            e.stopPropagation();
                                            dispatch(addToBookmark({ token, postId: currentPost?._id }));
                                        }} />
                                    )}

                                </div>

                                <div className="flex justify-between items-center p-3 px-2 border-y-2 w-full focus:outline-none gap-4">

                                    <span className="w-12 h-12 text-lg flex-none basis-12">
                                        <img src={userData?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                                    </span>

                                    <span className="flex-1">
                                        <input
                                            ref={commentRef}
                                            value={commentData.content}
                                            onChange={e =>
                                                setCommentData(prev => ({ ...prev, content: e.target.value }))
                                            }
                                            className="w-full p-2 rounded-[30rem] focus:outline-none bg-slate-100"
                                            type="text"
                                            placeholder="Add a comment..."
                                        />
                                    </span>

                                    <button
                                        disabled={!commentData.content.trim().length}
                                        className="disabled:cursor-not-allowed p-2 rounded-[20rem] bg-blue-600 hover:bg-blue-800 text-white shadow-md 
                                        hover:shadow-lg w-20"
                                        onClick={() => {
                                            dispatch(addComment({ postId: currentPost._id, token, commentData }));
                                            setCommentData({ content: "" });
                                        }}> Reply
                                    </button>
                                </div>

                                {/* Comment Section */}

                                {currentPost?.comments?.map(comment => (

                                    <Comment
                                        key={comment._id}
                                        postId={currentPost._id}
                                        comment={comment}
                                        postOwnerUsername={currentUser?.username}
                                    />
                                ))}

                            </div>
                        </div>
                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
};