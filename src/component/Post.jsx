import { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsBookmark, BsShare, BsSuitHeartFill, BsBookmarksFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedDate } from "../utilities/getFormattedDate";
import { openPostModal, setEditPostObj } from "../features/post/postSlice";
import { CreatePostModal } from "./CreatePostModal";
import { unFollowUser } from "../features/user/helpers";
import { likePost, dislikePost, deletePost } from "../features/post/helpers";
import { useLocation } from "react-router-dom";
import { addToBookmark, removeFromBookmark } from "../features/bookmark/helpers";

export const Post = ({ post }) => {

    const [postOptions, setPostOptions] = useState(false);

    const { pathname } = useLocation();

    const {
        user: { users },
        auth: { token, userData },
        bookmarks: { bookmarks }
    } = useSelector(state => state);

    const isBookmarked = bookmarks?.find(id => id === post?._id);

    const isLiked = post?.likes?.likedBy?.find(user => user.username === userData.username);

    const dispatch = useDispatch();

    const currentUser = users.find(user => user.username === post?.username);

    const editHandler = (e) => {
        e.stopPropagation();            // prevent the post content from re-occurring in new post
        dispatch(openPostModal());
        dispatch(setEditPostObj(post));
        setPostOptions(false);
    }

    const deletePostHandler = (e) => {
        e.stopPropagation();
        dispatch(deletePost({ postId: post?._id, token }));
        setPostOptions(false);
    }

    const unFollowHandler = (e) => {
        e.stopPropagation();
        dispatch(unFollowUser({ followUserId: currentUser?._id, token }));
        setPostOptions(false);
    }

    return (
        <div className="border ml-3 flex px-5 py-3 hover:bg-slate-100">

            <CreatePostModal />

            <div className="mt-3 w-12 h-12 text-lg flex-none">
                <img src={currentUser?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
            </div>

            <div className="w-full px-4 py-3">

                <div className="w-full flex justify-between relative">
                    <h2 className="font-semibold">
                        {`${currentUser?.firstName} ${currentUser?.lastName}`}
                        <span className="text-slate-600 pl-1.5">
                            @{post?.username}
                        </span>
                    </h2>

                    <HiDotsHorizontal className="cursor-pointer" onClick={() => setPostOptions(prev => !prev)} />

                    {/* Post Options Modal */}

                    {post?.username === userData?.username ? (
                        postOptions &&
                        <div
                            className="w-30 h-22 px-1 shadow-xl bg-white border border-slate-300 text-slate-600 font-semibold 
                                absolute right-4 top-2 z-20 rounded-xl">
                            <ul className="p-1 cursor-pointer text-center">
                                <li className="my-1 p-1 hover:bg-slate-200 rounded" onClick={editHandler}>Edit Post</li>
                                <li className="my-1 p-1 hover:bg-slate-200 rounded" onClick={deletePostHandler}>Delete Post</li>
                            </ul>
                        </div>

                    ) : (
                        postOptions &&
                        <div className="w-30 h-22 px-1 shadow-xl hover:bg-slate-200 bg-white border border-slate-300 text-slate-600 font-semibold 
                            absolute right-3 top-2 z-20 rounded-xl">
                            <ul className="p-1.5 cursor-pointer text-center">
                                <li className="rounded" onClick={unFollowHandler}>Unfollow</li>
                            </ul>
                        </div>
                    )}

                </div>

                <p className="py-3">{post?.content}</p>

                <p className="text-sm text-gray-600">{getFormattedDate(post?.createdAt)}</p>

                <div className="flex justify-between pt-4">
                    <div className="flex">
                        {isLiked ? (
                            <BsSuitHeartFill className="text-xl cursor-pointer text-red-600" onClick={e => {
                                e.stopPropagation();
                                dispatch(dislikePost({ postId: post?._id, token }));
                            }} />
                        ) : (
                            <BsSuitHeart className="text-xl cursor-pointer" onClick={e => {
                                e.stopPropagation();
                                dispatch(likePost({ postId: post?._id, token }));
                            }} />
                        )}
                        <span className="text-sm pl-4 font-semibold">
                            {pathname.includes("post") ? "" : post?.likes?.likeCount ? post?.likes?.likeCount : null}
                        </span>
                    </div>

                    <GoComment className="text-xl cursor-pointer" />

                    {isBookmarked ? (
                        <BsBookmarksFill className="text-xl cursor-pointer" onClick={e => {
                            e.stopPropagation();
                            dispatch(addToBookmark({ token, postId: post?._id }));
                        }} />
                    ) : (
                        <BsBookmark className="text-xl cursor-pointer" onClick={e => {
                            e.stopPropagation();
                            dispatch(removeFromBookmark({ token, postId: post?._id }));
                        }} />
                    )}

                    <BsShare className="text-xl cursor-pointer" />
                </div>
            </div>
        </div>
    )
};