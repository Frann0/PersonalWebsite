import React, { useEffect } from 'react'
import { LoadingState } from '../../../stores/loaderStore';
import { useStore } from '../../../stores/store';
import './Loader.scss'
import logo from '../../../assets/shared/logo_green.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reduxStores/store';

const Loader = () => {
    const dispatch = useDispatch();
    const loadingState = useSelector((state: RootState) => state.loader.loadingState)

    const [animation, setAnimation] = React.useState<{ topBar: string, bottomBar: string, loaderBar: string, logo: string }>(
        {
            topBar: '',
            bottomBar: '',
            loaderBar: '',
            logo: ''
        }
    );




    useEffect(() => {
        setAnimation(getAnimation()!)
    }, [loadingState])


    const getAnimation = () => {
        switch (loadingState) {
            case LoadingState.starting:
                return { topBar: 'Loader_top_Animation_Starting', bottomBar: 'Loader_bottom_Animation_Starting', loaderBar: 'Loader_bar_Animation_Starting', logo: 'Loader_Logo_Animation_Starting' }
            case LoadingState.started:
                return { topBar: 'Loader_top_Animation_Started', bottomBar: 'Loader_bottom_Animation_Started', loaderBar: 'Loader_bar_Animation_Started', logo: 'Loader_Logo_Animation_Started' }
            case LoadingState.stopping:
                return { topBar: 'Loader_top_Animation_Stopping', bottomBar: 'Loader_bottom_Animation_Stopping', loaderBar: 'Loader_bar_Animation_Stopping', logo: 'Loader_Logo_Animation_Stopping' }
            case LoadingState.stopped:
                return { topBar: 'Loader_top_Animation_Stopped', bottomBar: 'Loader_bottom_Animation_Stopped', loaderBar: 'Loader_bar_Animation_Stopped', logo: 'Loader_Logo_Animation_Stopped' }
        }
    }






    return (
        <div className='Loader_Container'>
            {loadingState !== LoadingState.stopped && loadingState !== LoadingState.stopping ?
                <div className='Loader_Logo'>
                    <img src={logo} alt=" logo" className={`Loader_LogoImage ${animation.logo}`} />
                    <div className={`Loader_bar ${animation.loaderBar}`}>
                    </div>
                </div>
                : null
            }
            <div className={`Loader_TopBar ${animation.topBar}`}></div>
            <div className={`Loader_BottomBar ${animation.bottomBar}`}></div>
        </div>
    )
}

export default Loader