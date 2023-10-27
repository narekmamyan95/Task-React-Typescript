import React from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store';
import { useAppSelector } from '../app/store';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { setOpenPopap } from '../store/common/slice';
import Popap from './Popap';
import { Data } from '../store/getData/slice';
import { setCurrentUser } from '../store/common/slice';
import "../styles/style.css"




const Container = () => {
    const dispatch = useDispatch<AppDispatch>();
    const data = useAppSelector((state) => state.data.data);
    
//functions
    const openPopapHandler = () => {
        dispatch(setOpenPopap(true))
    }
    const setCurrentUserHandler = (item: Data) => {
        dispatch(setCurrentUser(item))
    }

    return (
        <div className='container'>
            <>
                {data?.map((item) => {
                    return (
                        <div className='card'
                            key={item.phone}

                            onClick={() => {
                                openPopapHandler();
                                setCurrentUserHandler(item)
                            }}
                        >
                            <h3 className='customText'>
                                {item.name}
                            </h3>
                            <div style={{ marginLeft: '20px' }}>
                                <PhoneIphoneIcon style={{ color: "#7373d7" }} />
                                <span className='customPositionedText'>{item.phone}</span>
                            </div>
                            <div style={{
                                marginLeft: '20px',
                                marginTop: "10px"
                            }}>
                                <MailOutlineRoundedIcon fontSize='medium' style={{ color: "#7373d7" }} />
                                <span className='customPositionedText' >{item.email}</span>
                            </div>
                        </div>
                    )
                })}
            </>
            <Popap />
        </div>
    )
}

export default Container