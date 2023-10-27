import React from 'react';
import { AppDispatch, useAppSelector } from '../app/store';
import { useDispatch } from 'react-redux';
import { setOpenPopap } from '../store/common/slice';
import "../styles/style.css"

interface User {
    name?: string;
    phone?: string;
    email?: string;
    address?: string;
    position_name?: string;
    department?: string;
    hire_date?: string;
}

const Popup = () => {
    const isOpenPopup = useAppSelector((state) => state.common.openPopap);
    const currentUser: User = useAppSelector((state) => state.common.data);
    const dispatch = useDispatch<AppDispatch>();
    const closePopapHandler = () => {
        dispatch(setOpenPopap(false))
    }

    return (
        <>
            {isOpenPopup && (
                <div className='overlay'>
                    <div className='customModal'>
                        <h3 className='popapText'>
                            {currentUser.name}
                        </h3>
                        <div style={{
                            fontWeight: '400',
                            marginLeft: "20px",
                            color: "black"
                        }}
                        >Телефон: <span className='customInlineTextTel'>{currentUser.phone}</span></div>
                        <div className='custom-text'>Почта: <span className='customInlineTextDate'>{currentUser.email}</span></div>
                        <div className='custom-text'>Дата приема: <span className='customInlineTextMail'>{currentUser.hire_date}</span></div>
                        <div className='custom-text'>Должность: <span className='customInlineTextPosition'>{currentUser.position_name}</span></div>
                        <div className='custom-text'>Подразделение: <span className='customInlineTextDep'>{currentUser.department}</span></div>

                        <div style={{
                            fontWeight: '400', marginLeft: "20px", marginTop: "50px", color: "black"
                        }}>
                            Дополнительная информация:
                        </div>
                        <span className='popapInfo'>
                            Разработчики используют текст в качестве заполнителя макета страницы.
                            Разработчики используют текст в качестве заполнителя макета страницы
                        </span>
                    </div>
                    <span className='popapBtn'
                        onClick={closePopapHandler} >
                        X
                    </span>
                </div>

            )}
        </>
    );
};

export default Popup;
