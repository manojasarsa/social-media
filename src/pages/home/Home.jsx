import { GiSettingsKnobs } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsBookmark, BsShare } from "react-icons/bs";
import { AsideLeft, AsideRight } from "../../component";

export const Home = () => {
      return (
            <div className="">
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <AsideLeft />

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4">
                                          {/* TODO */}
                                          <h1 className="text-xl">Home</h1>
            
                                    </header>

                                    <div className="border ml-3 flex px-5 py-3">

                                          <div className="mt-3 w-12 h-12 text-lg flex-none">
                                                <img src="https://i.pravatar.cc/300?img=12" className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                                          </div>

                                          <div className="w-full px-4">
                                                <textarea placeholder="What's happening?" className="resize-none mt-3 pb-3 w-full h-28 bg-slate-100 focus:outline-none rounded-xl p-2" >
                                                </textarea>

                                                <div className="flex justify-end">
                                                      <button className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Post</button>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="ml-3 flex px-5 py-3 border justify-between">
                                          <h1 className="text-xl">Latest Posts</h1>
                                          <GiSettingsKnobs className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl" />
                                    </div>

                                    {/* -- POSTS -- */}

                                    <div className="border ml-3 flex px-5 py-3 hover:bg-slate-100">

                                          <div className="mt-3 w-12 h-12 text-lg flex-none">
                                                <img src="https://i.pravatar.cc/300?img=12" className="flex-none w-12 h-12 rounded-full" alt="avatar" />
                                          </div>

                                          <div className="w-full px-4 py-3">

                                                <div className="w-full flex justify-between">
                                                      <h2 className="">Chris Levin @chrislevin22</h2>
                                                      <HiDotsHorizontal className="cursor-pointer"/>     
                                                </div>

                                                <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis omnis laboriosam officia nemo praesentium natus ipsam! Nisi rerum, asperiores eius dignissimos nostrum, quos voluptatum voluptas impedit molestias suscipit omnis obcaecati!</p>

                                                <p className="text-sm text-gray-600">6 hours ago</p>

                                                <div className="flex justify-between pt-4">
                                                      <BsSuitHeart className="text-xl cursor-pointer"/>
                                                      <GoComment className="text-xl cursor-pointer"/>
                                                      <BsBookmark className="text-xl cursor-pointer"/>
                                                      <BsShare className="text-xl cursor-pointer"/>
                                                </div>
                                          </div>
                                    </div>
                                    
                              </main>

                              <AsideRight />
                        </div>
                  </div>
            </div>
      )
}