import Header from "./../components/Header";
import PostsListUser from "./../components/PostsListUser";

export default function HomePage(props) {
    return (
        <>

            <h1>HOMEPAGE</h1>
            <PostsListUser postPropProps={props.postProp} />
        </>

    );

}