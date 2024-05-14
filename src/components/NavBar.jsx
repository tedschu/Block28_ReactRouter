import { Route, Routes, Link } from "react-router-dom"


export default function NavBar() {


    return (
        <div id="navbar">
            <Link to="/blue">Blue</Link>
            <Link to="/red">Red</Link>
            <Link to="/dog">Dog!</Link>
            <Link to='/'>Home</Link>
        </div>
    )
}