import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsBookmark, BsShare } from "react-icons/bs";

export const Post = () => {
    return (
        <div className="border ml-3 flex px-5 py-3 hover:bg-slate-100">

            <div className="mt-3 w-12 h-12 text-lg flex-none">
                <img src="https://i.pravatar.cc/300?img=12" className="flex-none w-12 h-12 rounded-full" alt="avatar" />
            </div>

            <div className="w-full px-4 py-3">

                <div className="w-full flex justify-between">
                    <h2 className="font-semibold">
                        Chris Levin 
                        <span className="text-slate-600">
                            @chrislevin22
                        </span>
                    </h2>
                    <HiDotsHorizontal className="cursor-pointer" />
                </div>

                <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis laboriosam officia nemo praesentium natus ipsam! Nisi rerum, asperiores eius dignissimos nostrum, quos voluptatum voluptas impedit molestias suscipit omnis obcaecati!</p>

                <p className="text-sm text-gray-600">6 hours ago</p>

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