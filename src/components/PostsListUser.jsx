

import PostsCard from "./PostsCard";

const PostsListUser = (props) => {



    return (

        <>


            {

                props.postPropProps.map((post) => (
                    <PostsCard key={post.id} post={post} />

                ))
            }


        </>

    )

}

export default PostsListUser