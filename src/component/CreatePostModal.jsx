import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { BsFillImageFill } from "react-icons/bs";
import { createPost, editPost } from "../features/post/helpers";
import { closePostModal, setEditPostObj } from "../features/post/postSlice";

export const CreatePostModal = () => {

    const [content, setContent] = useState("");

    const [postData, setPostData] = useState(null);

    const {
        auth: { userData, token },
        posts: { showPostModal, editPostObj },
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dytvl1fnk/image/upload";

    const postHandler = async (e) => {
        e.preventDefault();
        if (postData) {
            if (
                postData?.postImageUrl !== editPostObj?.postImageUrl ||
                postData?.content !== editPostObj?.content
            ) {
                if (typeof postData?.postImageUrl === "object") {
                    const file = postData?.postImageUrl;
                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", "alcon-social");
                    formData.append("folder", "alcon");

                    try {
                        const res = await fetch(cloudinaryUrl, {
                            method: "POST",
                            body: formData,
                        });

                        const { url } = await res.json();

                        editPostObj
                            ? dispatch(editPost({ postData: { content, postImageUrl: url }, token, post: editPostObj }))
                            : dispatch(createPost({ postData: { content, postImageUrl: url }, token }));

                    } catch (err) {
                        console.error("error occured", err);
                    }

                } else {
                    dispatch(createPost({ postData: { content }, token }));
                }
                setPostData({ content: "", postImageUrl: "" });
                dispatch(closePostModal());
                dispatch(setEditPostObj(null));
            }
        }
    }

    useEffect(() => {
        setPostData(editPostObj);
        return () => {
            setPostData(null);
        };
    }, [editPostObj]);

    return (
        <Modal
            styles={{
                modal: { width: "22rem", height: "fit-content", paddingTop: "0.2rem", borderRadius: "1rem", boxShadow: "none" },
                overlay: { backgroundColor: "rgba(0,0,0,0.3)" },
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
                        value={postData?.content}
                        placeholder="What's happening?"
                        className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2"
                        onChange={(e) => setPostData({ ...postData, content: e.target.value })} >
                    </textarea>
                    <div className="w-30 my-1">
                        <img
                            src={typeof postData?.postImageUrl === "object" ? URL.createObjectURL(postData?.postImageUrl) : postData?.postImageUrl}
                            className={postData?.postImageUrl ? "block rounded-xl" : "hidden"}
                            alt="postImage"
                        />
                    </div>

                    <div className="flex justify-between">
                        <label className="flex m-2">
                            <input
                                className="hidden"
                                type="file"
                                onChange={(e) => setPostData({ ...postData, postImageUrl: e.target.files[0] })}
                            />
                            <BsFillImageFill className="text-2xl mt-1 text-blue-700 cursor-pointer" />
                        </label>
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