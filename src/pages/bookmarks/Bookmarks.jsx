import { AsideLeft, AsideRight, Post } from "../../component";

export const Bookmarks = () => {
      return (
            <div>
                  <div className="flex mx-12 my-4">
                        <div className="mx-auto flex px-32 h-screen w-screen">

                              <AsideLeft />

                              <main className="w-full basis-2/3">

                                    <header className="flex p-4">
                                          <h1 className="text-xl">Bookmarks</h1>
                                    </header>

                                    <Post />
                                    
                              </main>

                              <AsideRight />
                        </div>
                  </div>
            </div>      
      )
}