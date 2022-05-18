import { AsideLeft, AsideRight, Post } from "../../component";

export const Profile = () => {
      return (
            <div>
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <AsideLeft />

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4">
                                          <h1 className="text-xl">Profile</h1>
                                    </header>

                                    <div className="ml-5 my-6 flex flex-col space-between">

                                          <div className="flex mx-auto gap-8 ">

                                                <img src="https://i.pravatar.cc/300?img=5" className="w-32 h-32 rounded-full " />

                                                <div className="flex flex-col mt-2">
                                                      <h2 className="font-semibold">Veronica Dane</h2>
                                                      <h2> @veron_d12 </h2>
                                                      <button className="border my-3 p-1 rounded-lg text-x cursor-pointer text-center font-semibold text-slate-600 hover:bg-slate-200">Edit Profile</button>
                                                </div>

                                          </div>

                                          <div className="flex gap-6 pl-4 mt-4 mb-16 justify-items-center mx-auto">

                                                <h3 className="text-xl">0<span className="text-slate-600"> posts</span></h3>

                                                <h3 className="text-xl">3<span className="text-slate-600"> followers</span></h3>

                                                <h3 className="text-xl">2<span className="text-slate-600"> following</span></h3>

                                          </div>

                                          <h1 className="text-2xl text-center mb-6">Your Posts</h1>

                                          <Post />

                                    </div>
                                    
                              </main>

                              <AsideRight />
                        </div>
                  </div>
            </div>      
      )
}