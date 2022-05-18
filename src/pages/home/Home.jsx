// import { Signin } from "../authentication/Signin";

import { GiSettingsKnobs } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { GoComment } from "react-icons/go";
import { BsSuitHeart, BsBookmark, BsShare, BsSearch } from "react-icons/bs";

export const Home = () => {
      return (
            <div className="">
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <aside className="w-full basis-1/6">
                                    <header className="font-sans m-4 text-2xl">ALCON</header>
                                    <nav className="">
                                          <ul className="pl-2">
                                                <li className="flex py-4 gap-3 px-3 cursor-pointer">
                                                      <i className="text-xl fa-solid fa-house"></i>
                                                      <h2 className="text-xl px-1"> Home </h2> 
                                                </li>
                                                <li className="flex py-4 gap-3 px-3 cursor-pointer">
                                                      <i className="text-xl fa-solid fa-hashtag"></i>
                                                      <h2 className="text-xl px-1"> Explore </h2>
                                                </li>
                                                <li className="flex py-4 gap-3 px-3 cursor-pointer">
                                                      <i className="text-xl fa-solid fa-bell"></i>
                                                      <h2 className="text-xl px-1"> Notifications </h2>
                                                </li>
                                                <li className="flex py-4 gap-3 px-3 cursor-pointer">
                                                      <i className="text-xl fa-solid fa-bookmark"></i>
                                                      <h2 className="text-xl px-1"> Bookmarks </h2>
                                                </li>
                                                <li className="flex py-4 gap-3 px-3 cursor-pointer">
                                                      <i className="text-xl fa-solid fa-user"></i>
                                                      <h2 className="text-xl px-1"> Profile </h2>
                                                </li>
                                                <li className="my-2 mx-4"> 
                                                      <button className="my-8 mx-0 p-2 rounded-lg w-full text-x cursor-pointer text-center font-semibold text-white bg-blue-600 hover:bg-blue-800">Post</button>
                                                </li>
                                          </ul>
                                    </nav>
                              </aside>

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4">
                                          {/* TODO */}
                                          <h1 className="">Home</h1>
                                          {/* theme icon */}
                                    </header>

                                    <div className="border flex px-5 py-3">

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

                                    <div className="w-full px-8 py-2 my-2 border flex justify-between">
                                          <h1 className="text-xl">Latest Posts</h1>
                                          <GiSettingsKnobs className="fill-blue-600 stroke-0 hover:stroke-2 text-2xl" />
                                    </div>

                                    {/* -- POSTS -- */}

                                    <div className="border flex px-5 py-3 hover:bg-slate-100">

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

                              <aside className="w-full basis-2/6 flex flex-col">

                                    <div className="relative m-3 text-center">
                                          <input className="bg-slate-200 text-center p-2 rounded-3xl placeholder:text-black cursor-pointer" type="text" placeholder="Search"  />
                                          <BsSearch className="absolute top-3.5 left-20" />
                                    </div>

                                    <h1 className="m-3 text-xl text-center">Suggestions for you</h1>

                                    <div className="m-3 flex space-between">

                                          <img src="https://i.pravatar.cc/300?img=5" className="w-12 h-12 rounded-full" />

                                          <div className="w-full flex flex-col pl-4">
                                                <h2 className="">Veronica Dane</h2>
                                                <h2 className=""> @veron_d12 </h2>
                                          </div>

                                          <button className="mr-8 px-4  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                                    </div>

                                    <div className="m-3 flex space-between">

                                          <img src="https://i.pravatar.cc/300?img=32" className="w-12 h-12 rounded-full" />

                                          <div className="w-full flex flex-col pl-4">
                                                <h2 className="">Lucy Staniforth</h2>
                                                <h2 className=""> @lucy_st4 </h2>
                                          </div>

                                          <button className="mr-8 px-4  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                                    </div>

                                    <div className="m-3 flex space-between">

                                          <img src="https://i.pravatar.cc/300?img=4" className="w-12 h-12 rounded-full" />

                                          <div className="w-full flex flex-col pl-4">
                                                <h2 className="">Stuart Wood</h2>
                                                <h2 className=""> @stuart_99 </h2>
                                          </div>

                                          <button className="mr-8 px-4  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                                    </div>

                                    <div className="m-3 flex space-between">

                                          <img src="https://i.pravatar.cc/300?img=47" className="w-12 h-12 rounded-full" />

                                          <div className="w-full flex flex-col pl-4">
                                                <h2 className="">Rachel Daly</h2>
                                                <h2 className=""> @rachel_dy3 </h2>
                                          </div>

                                          <button className="mr-8 px-4 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                                    </div>
                              </aside>

                        </div>
                  </div>
            </div>
      )
}