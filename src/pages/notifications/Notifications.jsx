import { AsideLeft, AsideRight } from "../../component";

export const Notifications = () => {
      return (
            <div className="">
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <AsideLeft />

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4">
                                          <h1 className="text-xl">Notifications</h1>
                                    </header>

                                    <div className="mx-6 my-8 flex space-between">

                                          <img src="https://i.pravatar.cc/300?img=5" className="w-12 h-12 rounded-full" />

                                          <div className="w-full flex flex-col pl-4">
                                                <h2 className="font-semibold">@veron_d12</h2>
                                                <h2 className=""> liked your post. </h2>
                                          </div>
                                    </div>

                                    <div className="m-6 flex space-between">

                                          <img src="https://i.pravatar.cc/300?img=4" className="w-12 h-12 rounded-full" />

                                          <div className="w-full flex flex-col pl-4">
                                                <h2 className="font-semibold">@rachel_dy3</h2>
                                                <h2 className=""> started following you. </h2>
                                          </div>
                                    </div>
                                    
                              </main>

                              <AsideRight />
                        </div>
                  </div>
            </div>      
      )
}