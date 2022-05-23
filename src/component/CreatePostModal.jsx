import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { createPost } from "../features/post/helpers";

export const CreatePostModal = ({ showCreatePostModal, setShowCreatePostModal  }) => {

    const [content, setContent] = useState("");

    const {
        auth: { userData, token },
    } = useSelector( state => state );

    const dispatch = useDispatch();

    const postHandler = (e) => {
        e.preventDefault();
        if (content) {
            dispatch(createPost({ postData: { content }, token }));
            setContent("");
            setShowCreatePostModal(false);
        }
    }

    return (
        <Modal
            styles={{
                modal: { width: "30rem", height: "fit-content", paddingTop: "0.2rem", borderRadius: "1rem" },
            }}
            open={showCreatePostModal}
            onClose={showCreatePostModal}
            showCloseIcon={false}
            center={true}
        >
            <div className="flex justify-end">
                <button
                    className="text-lg font-semibold"
                    onClick={() => setShowCreatePostModal(false)}>
                    x
                </button>
            </div>

            <div className="ml-3 flex px-5 py-3">

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
                            className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md 
                            hover:shadow-lg transition duration-150 ease-in-out"
                            onClick={postHandler}>
                            Post
                        </button>
                    </div>
                </div>
            </div>        

        </Modal>
    )
};