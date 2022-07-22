import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import { BsFillImageFill } from "react-icons/bs";
import { createPost, editPost } from "../features/post/helpers";
import { closePostModal, setEditPostObj } from "../features/post/postSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

export const CreatePostModal = () => {

    const [postData, setPostData] = useState(null);

    const [isFetching, setIsFetching] = useState(false);

    const {
        auth: { userData, token },
        posts: { showPostModal, editPostObj },
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        setPostData(editPostObj);
        return () => {
            setPostData(null);
        };
    }, [editPostObj]);

    useEffect(() => {
        if(postData?.postImageUrl) {
            if (isFetching) {
                if (editPostObj) {
                    toast("Editing Post", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                } else {
                    toast("Adding Post", { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
                }
            }
        } else {
            if (isFetching) {
                if (editPostObj) {
                    toast("Editing Post", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
                } else {
                    toast("Adding Post", { position: toast.POSITION.TOP_CENTER, autoClose: 1000 });
                }
            }
        }
    }, [isFetching]);

    const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dytvl1fnk/image/upload";

    const postHandler = async (e) => {
        e.preventDefault();
        setIsFetching(true);
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

                        if (editPostObj) {
                            dispatch(editPost({ postData: { ...postData, postImageUrl: url }, token, post: editPostObj }));
                            setIsFetching(false);
                        } else {
                            dispatch(createPost({ postData: { ...postData, postImageUrl: url }, token }));
                            setIsFetching(false);
                        }

                    } catch (err) {
                        console.error("error occured", err);
                    }

                } else {
                    if (editPostObj) {
                        dispatch(editPost({ postData: postData, token, post: editPostObj }));
                        setIsFetching(false);
                    } else {
                        dispatch(createPost({ postData: postData, token }));
                        setIsFetching(false);
                    }
                }
            }
        }
        setPostData({ content: "", postImageUrl: "" });
        dispatch(closePostModal());
        dispatch(setEditPostObj(null));
    }

    return (
        <Modal
            styles={{
                modal: { width: "20rem", height: "fit-content", paddingTop: "0.2rem", borderRadius: "1rem", margin: "0 auto" },
                overlay: { backgroundColor: "rgba(0,0,0,0.1)" },
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
                    <div className="max-w-xl max-h-80 mx-auto rounded-md">
                        <img
                            src={typeof postData?.postImageUrl === "object" ? URL.createObjectURL(postData?.postImageUrl) : postData?.postImageUrl}
                            className={postData?.postImageUrl ? "block max-w-full max-h-20 rounded-md my-2 cursor-pointer" : "hidden"}
                            alt="postImage"
                        />
                    </div>

                    <div className="flex justify-between">
                        <label className="flex m-2">
                            <input
                                className="hidden"
                                type="file"
                                onChange={(e) => setPostData({ ...postData, postImageUrl: e.target.files[0] })}
                                accept="image/*"
                            />
                            <BsFillImageFill className="text-2xl mt-1 text-blue-700 cursor-pointer" />
                        </label>
                        <button
                            disabled={!postData?.content.trim().length && !postData?.postImageUrl}
                            className="disabled:cursor-not-allowed p-2.5 pt-3 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md 
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