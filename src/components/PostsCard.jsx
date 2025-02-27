import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostsCard = (props) => {


    const { post } = props;

    return (

        <>


            {


                <div className='postItem' key={post.id}>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.content} </p>
                    <p>Tags: {Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || "Nessun tag"}</p>
                    <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                </div >


            }


        </>

    )

}

export default PostsCard