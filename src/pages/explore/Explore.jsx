import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AsideLeft, AsideRight, MobileNavBar, Post } from "../../component";
import { getAllPosts } from "../../features/post/helpers";
import Loader from 'react-spinner-loader';

export const Explore = () => {

    const {
        auth: { token },
        posts: { posts, isLoading },
    } = useSelector( state => state );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch, token]);

    return (
        <div>

            <MobileNavBar />

            <div className="z-20">
                <Loader show={isLoading} type="body" />
            </div>

            <div className="flex justify-center px-5 sm:px-32">
                <div className="flex h-screen w-screen">

                    <AsideLeft />

                    <main className="w-full sm:basis-2/3">

                        <header className="p-4 hidden sm:flex">
                            <h1 className="text-xl">Explore</h1>
                        </header>

                        <header className="text-xl font-bold flex py-4 text-blue-600 sm:hidden">
                            <Link to="/home"> ALCON </Link>
                        </header>

                        {posts.map(post => <Post key={post._id} post={post} />)}

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
}