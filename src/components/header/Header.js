import React from 'react';
import "./Header.scss"
import { BiLogIn } from "react-icons/bi"
import { FaUserCircle } from "react-icons/fa"
import { Link, NavLink, useNavigate } from 'react-router-dom';

const activeLink = ({ isActive }) => (isActive ? "active" : "")
let navigate = useNavigate
const goHome = () => {
    navigate('/')
}
const Header = () => {
    return (
        <header className='header'>
            <nav>
                <div className='logo' onClick={goHome}>
                    <BiLogIn size={35} />
                    <span>LOGIN</span>
                </div>
                <ul className='home-link'>
                    <li className='--flex-center'>
                        <FaUserCircle size={20} />
                        <p className='--color-white'>
                            Hi User
                        </p>
                        <li>
                            <button className='--btn --btn-primary'>
                                <Link to="/login">LOGIN</Link>
                            </button>
                        </li>

                        <li>
                            <NavLink to="/profile" className={activeLink}>Profile</NavLink>

                        </li>
                        <li>
                            <button className='--btn --btn-secondary'>
                                Logout
                            </button>
                        </li>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header