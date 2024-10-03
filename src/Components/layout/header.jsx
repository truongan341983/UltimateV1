import { Link, NavLink } from 'react-router-dom';
import './header.css';
const Header = () => {
    return (
        <ul>
            {/* sử dụng Navlink sẽ ko load lại và có class active khi khi click vào links đó */}
            <li><NavLink className="active" to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    )
}
export default Header;