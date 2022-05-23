import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsBookmark, BsShare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getFormattedDate } from "../utilities/getFormattedDate";
import { useState } from "react";

export const Post = ({ post }) => {

    const {
        user: { users },
        auth: { token, userData }
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const currentUser = users.find(user => user.username === post?.username);
    
    return (
        <div className="border ml-3 flex px-5 py-3 hover:bg-slate-100">

            <div className="mt-3 w-12 h-12 text-lg flex-none">
                <img src={currentUser?.profilePicture} className="flex-none w-12 h-12 rounded-full" alt="avatar" />
            </div>

            <div className="w-full px-4 py-3">

                <div className="w-full flex justify-between">
                    <h2 className="font-semibold">
                        {`${currentUser?.firstName} ${currentUser?.lastName}`} 
                        <span className="text-slate-600 pl-1.5">
                            @{post?.username}
                        </span>
                    </h2>
                    <HiDotsHorizontal className="cursor-pointer" />
                </div>

                <p className="py-3">{post?.content}</p>

                <p className="text-sm text-gray-600">{getFormattedDate(post?.createdAt)}</p>

                <div className="flex justify-between pt-4">
                    <BsSuitHeart className="text-xl cursor-pointer" />
                    <GoComment className="text-xl cursor-pointer" />
                    <BsBookmark className="text-xl cursor-pointer" />
                    <BsShare className="text-xl cursor-pointer" />
                </div>
            </div>
        </div>
    )
};