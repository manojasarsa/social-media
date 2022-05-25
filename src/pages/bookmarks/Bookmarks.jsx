import { AsideLeft, AsideRight, Post } from "../../component";
import { Link } from "react-router-dom";

export const Bookmarks = () => {
    return (
        <div>
            <div className="flex justify-center px-5 sm:px-32">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full sm:basis-2/3">

                        <header className="p-4 hidden sm:flex">
                            <h1 className="text-xl">Bookmarks</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home"> ALCON </Link>
                        </header>

                        <Post />

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
}