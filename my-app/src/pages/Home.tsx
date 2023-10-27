import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Container from './Container';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { getUser } from '../store/getData/action';
import "../styles/style.css"


const Home = () => {

    const [user, setUser] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getUser(user))
    }, [dispatch, user])

    return (
        <div style={{
            marginTop: "50px"
        }}
        >
            <div>
                <Paper
                    component="form"
                    sx={{
                        boxShadow: "none",
                        display: 'flex',
                        alignItems: 'center',
                        width: "100%",
                        borderRadius: "30px",
                        border: '1px solid #aaaadd',
                        outline: "none",
                    }}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        onChange={(e) => { setUser(e.target.value) }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon sx={{
                            color: "#7373d7",
                            fontWeight: "300",
                            fontSize: "1.3em"
                        }} />
                    </IconButton>
                </Paper>
            </div>
            <Container />
        </div>
    )
}

export default Home