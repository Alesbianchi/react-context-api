import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListaPosts() {

    const [listaPosts, setListaPosts] = useState([]);


    function fetchTodos() {
        axios.get("http://localhost:3000/posts/")
            .then((res) => setListaPosts(res.data))
    }


    useEffect(fetchTodos, []);

    // funzione rimozione post
    const removePost = (id) => {
        const updatedList = listaPosts.filter((post) => {
            return post.id !== id

        });
        setListaPosts(updatedList);

        if (updatedList.length === 0) {
            return <h1>Non ci sono posts</h1>
        }

    }

    return (

        <>

            {listaPosts.length === 0 ? (

                <h1>Non ci sono posts</h1>
            ) : (

                listaPosts.map((post) => (
                    <div className='postItem' key={post.id}>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content} </p>
                        <p>Tags: {Array.isArray(post.tags) ? post.tags.join(", ") : post.tags || "Nessun tag"}</p>
                        <Link to={`/posts/${post.id}`}>Vai al dettaglio</Link>
                        <button onClick={() => removePost(post.id)}>Cancella Post</button>
                    </div >

                ))
            )}


        </>

    )

}