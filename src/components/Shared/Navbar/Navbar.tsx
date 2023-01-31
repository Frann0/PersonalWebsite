import React, { useEffect } from 'react'
import './Navbar.scss'
import logo from '../../../assets/shared/logo.svg'
import Icon from '../icon/Icon'
import { useStore } from '../../../stores/store'

const Navbar = () => {
    const [isMobile, setIsMobile] = React.useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = React.useState(false)
    const { mobileStore, loaderStore } = useStore();

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
            let currentPath = window.location.pathname;
            if (currentPath !== '/') {
                loaderStore.startLoading()

                setTimeout(() => {
                    window.location.href = `/#${link}`
                    loaderStore.stopLoading()
                }, 2000)
            }
            else {
                window.location.href = `/#${link}`
            }
        }
    }

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);


        return () => {
            setIsMobile(false)
        }
    }, [window.innerWidth])

    const toggleHamburger = () => {
        mobileStore.toggleHamburger();
        setIsHamburgerOpen(!isHamburgerOpen)
    }


    return (
        <div className='Navbar_Container'>
            <div className='Navbar_MainBar'>

                {!isMobile ?
                    <>
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
                    </>
                    :
                    <>
                        <div className='Navbar_MainBar_logo' onClick={goTo('hero')}>
                            <img className='Navbar_MLogo' src={logo} alt="" />
                        </div>
                        <div className='Navbar_hamburgerContainer' onClick={() => toggleHamburger()}>
                            <Icon name='hamburger' width={24} height={24} />
                        </div>
                    </>
                }

            </div>
            {!isMobile &&
                <div className='Navbar_rotatedCube'>
                    <div className='Navbar_MainBar_logo' onClick={goTo('hero')}>
                        <img src={logo} alt="" />
                    </div>
                </div>
            }
        </div >
    )
}

export default Navbar