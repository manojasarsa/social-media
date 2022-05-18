export const AsideLeft = () => {
      return (
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
      )
}