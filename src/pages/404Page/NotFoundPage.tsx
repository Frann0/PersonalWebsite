import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.scss'
import logo from '../../assets/shared/logo.svg'
import Footer from '../../components/Shared/Footer/Footer';

const NotFoundPage = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <>
            <div className='NotFound_Container'>
                <div className='NotFound_Wrapper'>
                    {/**
                 * LEFT SIDE
                 */}
                    <div className='NotFound_LeftSide'>
                        <div className='NotFound_ContentContainer'>
                            <h1 className='NotFound_Title'>OOPS!</h1>
                            <h2 className='NotFound_Subtitle'>Looks like you've gotten lost!</h2>
                            <p className='NotFound_Description'>
                                Don't worry, it happens from time to time.<br></br>
                                Here's a handy button to get back to reality!
                            </p>
                            <div className='NotFound_HomeContainer'>
                                <button className='NotFound_HomeButton' onClick={goToHome}>
                                    Home
                                </button>
                            </div>
                        </div>
                    </div>
                    {/**
                 * RIGHT SIDE
                 * */}
                    <div className='NotFound_RightSide'>
                        <div className='NotFound_ImageContainer'>
                            <img className='NotFound_Image' src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default NotFoundPage