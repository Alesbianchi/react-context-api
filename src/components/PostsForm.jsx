import { useState, } from 'react';
import axios from "axios";

const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: [],
};

const PostsForm = () => {

    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    function handleFormData(e) {
        const value = e.target.name === "tags" ? e.target.value.split(",") : e.target.value;

        setFormData((currentFormData) => ({
            ...currentFormData, [e.target.name]: value,

        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        // setPostsState((currentPosts) => [...currentPosts, { id: currentPosts[currentPosts.length - 1].id + 1, ...formData }])
        axios.post("http://localhost:3000/posts", formData)
            .then(res => {
                // console.log(res.data);
                // uso la risposta dell'API per creare il nuovo array menu
                setPosts((currentPosts) => [...currentPosts, res.data])
                // navigate("/post");
            }
            )
            .catch(err => console.log(err))
        //resetto il form dopo l'invio
        setFormData(initialFormData);
    }


    return (
        <>
            <h1>form dei posts</h1>

            <form id='formpost' action="#" onSubmit={handleSubmit} >
                <input
                    type="text"
                    name="title"
                    onChange={handleFormData}
                    value={formData.titolo}
                    placeholder='Nome post'
                />

                <input
                    type="text"
                    name="tags"
                    onChange={handleFormData}
                    value={formData.tags}
                    placeholder='tag post'
                />
                <input
                    type="text"
                    name="image"
                    onChange={handleFormData}
                    value={formData.image}
                    placeholder="image post"
                />

                <textarea
                    type="text"
                    name="content"
                    onChange={handleFormData}
                    value={formData.contenuto}
                    placeholder='contenuto post'
                ></textarea>

                <button id='bottone'>Aggiungi post</button>
            </form>
            {/* {
                postsState.map((post) => (
                    <div key={post.id}>
                        <h2>{post.titolo}</h2>
                        <h3>{post.autore}</h3>
                        <p>{post.contenuto}</p>
                        <div>{post.categoria}</div>

                    </div>
                ))

            } */}
        </>

    )
}

export default PostsForm