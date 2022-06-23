import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { createPost, editPost } from "../features/post/helpers";
import { closePostModal, setEditPostObj } from "../features/post/postSlice";

export const CreatePostModal = () => {

    const [content, setContent] = useState("");

    const {
        auth: { userData, token },
        posts: { showPostModal, editPostObj },
    } = useSelector( state => state );

    const dispatch = useDispatch();

    const postHandler = (e) => {
        e.preventDefault();
        if (content) {
            editPostObj
            ? dispatch(editPost({ postData: { content }, token, post: editPostObj }))
            : dispatch(createPost({ postData: { content }, token }));
            setContent("");
            dispatch(setEditPostObj(null));
            dispatch(closePostModal());
        }
    }

    useEffect(() => {
        setContent(editPostObj?.content);
    }, [editPostObj]);

    return (
        <Modal
            styles={{
                modal: { width: "22rem", height: "fit-content", paddingTop: "0.2rem", borderRadius: "1rem" },
            }}
            open={showPostModal}
            onClose={showPostModal}
            showCloseIcon={false}
            center={true}
        >
            <div className="flex justify-end">
                <button
                    className="text-lg font-semibold"
                    onClick={() => dispatch(closePostModal())}>
                    x
                </button>
            </div>

            <div className="flex py-3">

                <div className="mt-3 w-12 h-12 text-lg flex-none">
                    <img src={userData?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                </div>

                <div className="w-full px-2">
                    <textarea
                        value={content}
                        placeholder="What's happening?"
                        className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2"
                        onChange={(e) => setContent(e.target.value)} >
                    </textarea>

                    <div className="flex justify-end">
                        <button
                            className="p-2.5 pt-3 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md 
                            hover:shadow-lg transition duration-150 ease-in-out"
                            onClick={postHandler}>
                            {editPostObj ? "Update" : "Post"}
                        </button>
                    </div>
                </div>
            </div>        
        </Modal>
    )
};