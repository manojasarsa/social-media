import { GiSettingsKnobs } from "react-icons/gi";
import { AsideLeft, AsideRight, Post } from "../../component";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { signOutHandler } from "../../features/auth/authSlice";

export const Home = () => {

      const dispatch = useDispatch();

      return (
            <div>
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <AsideLeft />

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4 w-full justify-between">
                                          <h1 className="text-xl">Home</h1>
                                          <FiLogOut className="w-5 h-5 text-slate-600 cursor-pointer" onClick={() => dispatch(signOutHandler() )} />
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

                                    <Post />

                              </main>

                              <AsideRight />
                        </div>
                  </div>
            </div>
      )
}