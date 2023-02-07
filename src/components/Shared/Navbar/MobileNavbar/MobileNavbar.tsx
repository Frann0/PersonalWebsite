import React, { useEffect, useState } from 'react'
import { useStore } from '../../../../stores/store';
import Footer from '../../Footer/Footer';
import Icon from '../../icon/Icon';
import logo from '../../../../assets/shared/logo_green.svg'
import { useNavigate } from 'react-router-dom';

const MobileNavbar = () => {

    const { mobileStore, loaderStore } = useStore();
    const [hamburgerAnimation, setHamburgerAnimation] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        setHamburgerAnimation(mobileStore.hamburgerAnimationState)
        console.log(mobileStore.hamburgerAnimationState);

    }, [mobileStore.hamburgerAnimationState])


    const goTo = (link: string) => {


        return (e: any) => {
            e.preventDefault()
            let currentPath = window.location.pathname;
            if (currentPath !== '/') {
                loaderStore.startLoading()

                setTimeout(() => {
                    navigate(`/#${link}`)
                    loaderStore.stopLoading()
                }, 2000)
            }
            else {
                window.location.href = `/#${link}`
            }
            mobileStore.closeHamburger()
        }
    }
    return (
        <div className={`Hamburger_Container ${hamburgerAnimation}`}>
            <div className='Hamburger_Logo' >
                <a href='#hero' onClick={() => { mobileStore.closeHamburger() }} >
                    <img src={logo} alt='logo' />
                </a>
            </div>
            <div className='Hamburger_Close' onClick={() => mobileStore.closeHamburger()}>
                <Icon name='cross' />
            </div>
            <ul className='Hamburger_LinksWrapper'>
                <li className='Hamburger_Link' >
                    <a className='Hamburger_LinkItem' onClick={goTo('about')} >About</a>
                </li>
                <li className='Hamburger_Link'>
                    <a className='Hamburger_LinkItem' onClick={goTo('skills')}>Skills</a>
                </li>
                <li className='Hamburger_Link'>
                    <a className='Hamburger_LinkItem' onClick={goTo('work')}>Work</a>
                </li>
                <li className='Hamburger_Link'>
                    <a className='Hamburger_LinkItem' onClick={goTo('contact')}>Contact</a>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default MobileNavbar