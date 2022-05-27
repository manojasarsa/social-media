import { AsideLeft, AsideRight, MobileNavBar } from "../../component";
import { Link } from "react-router-dom";

export const Notifications = () => {
    return (
        <div>
            <MobileNavBar />

            <div className="flex justify-center px-5 sm:px-32">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full sm:basis-2/3">

                        <header className="p-4 hidden sm:flex">
                            <h1 className="text-xl">Notifications</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home"> ALCON </Link>
                        </header>

                        <div className="flex flex-col my-8 w-full">
                            <div className="p-4 flex space-between border">

                                <img src="https://i.pravatar.cc/300?img=5" className="w-12 h-12 rounded-full" alt="avatar" />

                                <div className="w-full flex flex-col pl-4">
                                    <h2 className="font-semibold">@veron_d12</h2>
                                    <h2> liked your post. </h2>
                                </div>
                            </div>

                            <div className="p-4 flex space-between border">

                                <img src="https://i.pravatar.cc/300?img=4" className="w-12 h-12 rounded-full" alt="avatar" />

                                <div className="w-full flex flex-col pl-4">
                                    <h2 className="font-semibold">@rachel_dy3</h2>
                                    <h2> started following you. </h2>
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