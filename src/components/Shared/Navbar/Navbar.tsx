import React from 'react'
import './Navbar.scss'
import logo from '../../../assets/shared/logo.svg'

const Navbar = () => {

    const links = [
        {
            name: 'About',
            link: 'about'
        },
        {
            name: 'Skills',
            link: 'skills'
        },
        {
            name: 'Work',
            link: 'work'
        },
        {
            name: 'Contact',
            link: 'contact'
        }
    ]

    const goTo = (link: string) => {
        return (e: any) => {
            e.preventDefault()
            window.location.href = `/#${link}`
        }
    }


    return (
        <div className='Navbar_Container'>
            <div className='Navbar_MainBar'>
                <div className='Navbar_LinkContainer'>
                    <ul className='Navbar_LinkWrapper'>
                        {links.slice(0, 2).map((link, index) => (
                            <li className='Navbar_Link' key={index}>
                                <a href='/' onClick={goTo(link.link)} >{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='Spacer'> </div>
                <div className='Navbar_LinkContainer'>
                    <ul className='Navbar_LinkWrapper'>
                        {links.slice(2).map((link, index) => (
                            <li className='Navbar_Link' key={index}>
                                <a href='/' onClick={goTo(link.link)} >{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='Navbar_rotatedCube'>
                <div className='Navbar_MainBar_logo' onClick={goTo('hero')}>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar