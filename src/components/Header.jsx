import Navbar from "./Navbar.jsx";

// Header.jsx
export default function Header(props) {
    const links = [
        { id: 1, text: 'Home', url: '/', current: true },
        { id: 2, text: 'About', url: '/about', current: false },
        { id: 3, text: 'Contacts', url: '/contacts', current: false },
        { id: 4, text: 'posts', url: '/posts', current: false },
        { id: 5, text: 'Crea form', url: '/posts/crea', current: false },
    ];
    return (
        <header className="container">

            < Navbar linksProp={links} />

        </header>

    );
}
