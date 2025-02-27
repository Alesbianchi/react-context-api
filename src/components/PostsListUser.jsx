import { useContext } from "react";
import GlobalContext from "./../contexts/GlobalContext";

import PostsCard from "./PostsCard";

const PostsListUser = () => {

    const { post } = useContext(GlobalContext);

    return (

        <>


            {

                post.map((post) => (
                    <PostsCard key={post.id} post={post} />

                ))
            }


        </>

    )

}

export default PostsListUser