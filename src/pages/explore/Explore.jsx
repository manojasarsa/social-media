import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AsideLeft, AsideRight, Post } from "../../component";
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
            <div className="flex mx-12 my-4">
                <div className="mx-auto flex px-32 h-screen w-screen">

                    <div className="z-20">
                        <Loader show={isLoading} type="body" />
                    </div>

                    <AsideLeft />

                    <main className="w-full basis-2/3">

                        <header className="flex p-4">
                            <h1 className="text-xl">Explore</h1>
                        </header>

                        {posts.map(post => <Post key={post._id} post={post} />)}

                    </main>

                    <AsideRight />
                </div>
            </div>
        </div>
    )
}