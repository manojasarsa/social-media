import { AsideLeft, AsideRight, MobileNavBar, Post } from "../../component";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { getAllBookmarks } from "../../features/bookmark/helpers";
import Loader from 'react-spinner-loader';

export const Bookmarks = () => {

    const { 
        auth: { token },
        posts: { posts },
        bookmarks: { bookmarks, isLoading}
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBookmarks({ token }));
    }, [token, dispatch]);

    const bookmarkList = posts?.filter(post => bookmarks.includes(post._id));

    return (
        <div>
            <MobileNavBar />
            
            <div className="flex justify-center px-5 sm:px-32 md:mt-4">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="md:mx-4 w-full sm:basis-2/3">

                        <header className="m-4 hidden sm:flex">
                            <h1 className="text-xl">Bookmarks</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home" id="hero-logo"> ALCON </Link>
                        </header>
                        
                        {isLoading ? (
                            <div className="z-20">
                                <Loader show={isLoading} />
                            </div>
                        ) : (
                            bookmarkList?.length === 0 ? <h1 className="text-2xl text-center mt-4 font-semi-bold">No Bookmark Added!</h1> :
                            bookmarkList?.map(post => (
                            <Post key={post?._id} post={post} />))
                        )}

                    </main>

                    <AsideRight />
                    <a href="#">
                        <AiOutlineArrowUp className="hidden sm:block fixed bottom-0 right-20 bg-blue-300 text-slate-50 text-5xl p-3 rounded-full mb-2 mr-20 hover:bg-blue-500" />
                    </a>
                </div>
            </div>
        </div>
    )
};