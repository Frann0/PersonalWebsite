import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'
import logo from '../../../assets/shared/logo.svg'

const Navbar = () => {

    const navigate = useNavigate();

    const links = [
        {
            name: 'About',
            link: '#'
        },
        {
            name: 'Skills',
            link: '#'
        },
        {
            name: 'Work',
            link: '#'
        },
        {
            name: 'Contact',
            link: '#'
        }
    ]



    return (
        <div className='Navbar_Container'>
            <div className='Navbar_MainBar'>
                <div className='Navbar_LinkContainer'>
                    <ul className='Navbar_LinkWrapper'>
                        {links.slice(0, 2).map((link, index) => (
                            <li className='Navbar_Link' key={index}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='Spacer'> </div>
                <div className='Navbar_LinkContainer'>
                    <ul className='Navbar_LinkWrapper'>
                        {links.slice(2).map((link, index) => (
                            <li className='Navbar_Link' key={index}>
                                <Link to={link.link}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='Navbar_rotatedCube'>
                <div className='Navbar_MainBar_logo'>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar