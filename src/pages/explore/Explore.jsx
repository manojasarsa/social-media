import { AsideLeft, AsideRight, Post } from "../../component"

export const Explore = () => {
      return (
            <div className="">
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <AsideLeft />

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4">
                                          <h1 className="text-xl">Explore</h1>
                                    </header>

                                    <Post />
                                    <Post />
                                    <Post />
                                    <Post />
                                    
                              </main>

                              <AsideRight />
                        </div>
                  </div>
            </div>      
      )
}