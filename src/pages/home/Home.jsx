// import { Signin } from "../authentication/Signin";

import { GiSettingsKnobs } from "react-icons/gi";

export const Home = () => {
      return (
            <div className="bg-yellow-500 border-2 ">
                  <div className="flex bg-green-500 mx-12 my-4 border-2">
                        <div className="mx-auto bg-gray-600 flex px-32 border-2 h-screen w-screen">

                              <aside className="bg-red-400 w-full basis-1/6">
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
                                                      <button className="my-4 p-1 rounded-lg w-full text-x cursor-pointer text-center font-semibold text-white bg-blue-600 hover:bg-blue-800">Post</button>
                                                </li>
                                          </ul>
                                    </nav>
                              </aside>

                              <main className="w-full bg-sky-300 basis-2/3">

                                    <header className="flex p-4">
                                          {/* TODO */}
                                          <h1 className="">Home</h1>
                                          {/* theme icon */}
                                    </header>

                                    <div className="border-2 flex px-5 py-3">

                                          <div className="mt-3 w-12 h-12 text-lg flex-none">
                                                <img src="assets/stud.jpg" className="flex-none w-12 h-12 rounded-full" alt="avatar"></img>
                                          </div>

                                          <div className="w-full px-4">
                                                <textarea placeholder="What's happening?" className="resize-none mt-3 pb-3 w-full h-28 bg-slate-200 focus:outline-none rounded-xl p-2" >
                                                </textarea>

                                                <div className="flex justify-end">
                                                      <button className="p-2.5 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Post</button>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="w-full px-2 border flex ">
                                          <h1 className="">Latest Posts</h1>
                                          <GiSettingsKnobs className="stroke-blue-500 stroke-2 justify-self-end" />
                                    </div>

                                    
                              </main>

                              <aside className="w-full bg-red-400 basis-1/5">
                                    Aside 2
                              </aside>

                        </div>
                  </div>
            </div>
      )
}