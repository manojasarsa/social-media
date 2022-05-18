import { BsSearch } from "react-icons/bs";

export const AsideRight = () => {
      return (
            <aside className="w-full basis-2/6 flex flex-col ml-3">

                  <div className="relative m-3 text-center">
                        <input className="bg-slate-200 text-center p-2 rounded-3xl placeholder:text-black cursor-pointer" type="text" placeholder="Search"  />
                        <BsSearch className="absolute top-3.5 left-20" />
                  </div>

                  <h1 className="m-3 text-xl text-center font-bold">Suggestions for you</h1>

                  <div className="ml-5 mt-8 mb-4 flex ">

                        <img src="https://i.pravatar.cc/300?img=5" className="w-12 h-12 rounded-full" />

                        <div className="w-full flex flex-col pl-4 shrink">
                              <h2 className="font-semibold flex-nowrap">Veronica Dane</h2>
                              <h2> @veron_d12 </h2>
                        </div>

                        <button className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                  </div>

                  <div className="ml-5 my-4 flex space-between">

                        <img src="https://i.pravatar.cc/300?img=32" className="w-12 h-12 rounded-full" />

                        <div className="w-full flex flex-col pl-4">
                              <h2 className="font-semibold">Lucy Staniforth</h2>
                              <h2> @lucy_st4 </h2>
                        </div>

                        <button className="mr-8 px-3 w-18 h-8  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                  </div>

                  <div className="ml-5 my-4 flex space-between">

                        <img src="https://i.pravatar.cc/300?img=4" className="w-12 h-12 rounded-full" />

                        <div className="w-full flex flex-col pl-4">
                              <h2 className="font-semibold">Stuart Wood</h2>
                              <h2> @stuart_99 </h2>
                        </div>

                        <button className="mr-8 px-3 w-18 h-8  bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                  </div>

                  <div className="ml-5 my-4 flex space-between">

                        <img src="https://i.pravatar.cc/300?img=47" className="w-12 h-12 rounded-full" />

                        <div className="w-full flex flex-col pl-4">
                              <h2 className="font-semibold">Rachel Daly</h2>
                              <h2> @rachel_dy3 </h2>
                        </div>

                        <button className="mr-8 px-3 w-18 h-8 bg-blue-600 hover:bg-blue-800 text-white rounded-xl shadow-md hover:shadow-lg transition duration-150 ease-in-out">Follow</button>
                  </div>
            </aside>

      )
}