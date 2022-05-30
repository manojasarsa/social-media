import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { getAllPosts, addComment, editComment, deleteComment } from "../features/post/helpers";
import Loader from 'react-spinner-loader';

export const Comment = ({ postId, comment, postOwnerUsername }) => {

    const [openCommentModal, setCommentModal] = useState(false);

    const {
        user: { users },
        auth: { token, userData },
        bookmarks: { bookmarks },
        posts: { isLoading }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch, token]);

    const currentUser = users?.filter(user => user?.username === comment?.username)[0];

    console.log("postId", postId);
    console.log("currentUser:", currentUser);
    console.log("comment:", comment);
    console.log("authorUSer:", postOwnerUsername);

    const getCurrentCommentedUser = (comment) => {
        const currentCommentedUser = users?.filter(user => user?.username === comment?.username)[0];
        return currentCommentedUser;
    }

    const editCommentHandler = (e) => {
        e.stopPropagation();
        // dispatch(editComment({token, postId: currentPost._id, commentData: currentPost.content }));
    }

    const deleteCommentHandler = (e) => {
        dispatch(deleteComment({ postId, token, commentId: comment?._id }));
    }

    return (
        <div className="flex ml-0 sm:mr-0 sm:mx-1 pl-0 pr-1 sm:pr-0 sm:px-1 py-3 border-b">

            <div className="mt-3 w-12 h-12 text-lg flex-none">
                <img src={getCurrentCommentedUser(comment)?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
            </div>

            <div className="w-full px-4 py-3 relative">

                <div className="w-full flex gap-2 justify-between">
                    <h2 className="font-semibold">
                        {`${getCurrentCommentedUser(comment)?.firstName} ${getCurrentCommentedUser(comment)?.lastName}`}
                        <span className="text-slate-600 pl-2">
                            @{comment?.username}
                        </span>
                    </h2>

                    <HiDotsHorizontal className="cursor-pointer pr2" onClick={() => setCommentModal(prev => !prev)} />
                </div>

                <div className="flex gap-2">
                    <span className="text-slate-500">
                        replying to
                    </span>
                    <span className="text-blue-600 font-semibold">
                        @{postOwnerUsername}
                    </span>
                </div>

                <div className="mt-3">{comment?.content}</div>

                {/* Edit and Delete Comment Modal */}

                {comment?.username === userData?.username && openCommentModal && <div
                    className="w-30 h-22 px-1 shadow-xl bg-white border border-slate-300 text-slate-600 font-semibold 
                                                absolute right-10 top-2 rounded-xl">
                    <ul className="p-1 cursor-pointer text-center">
                        <li className="my-1 p-1 hover:bg-slate-200 rounded" onClick={editCommentHandler} >Edit</li>
                        <li className="my-1 p-1 hover:bg-slate-200 rounded" onClick={deleteCommentHandler} >Delete</li>
                    </ul>
                </div>
                }

            </div>
        </div>
    )
};