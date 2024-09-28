import { useState } from 'react';
import { Button, CircularProgress, Container, Grid2, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form";
import * as TEXT from '../../constants/text';
import './Home.css';
import { User } from '../../components/user/User';
import { toast } from 'react-toastify';

const Home = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = async (e) => {
        const query = e.search;
        setLoading(true);
        setHasSearched(true)
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${query}`);
            if (!response.ok) {
                toast.error(TEXT.ERROR_SEARCH);
            }
            const data = await response.json();
            setUsers(data.items || []);
        } catch (error) {
            console.log(error);
            toast.error(TEXT.ERROR_SEARCH);
        }
        setLoading(false);
    }

    return (
        <Container className='home'>
            <Typography variant="h1" align='center'>{TEXT.APP_TITLE}</Typography>
            <Typography variant="h6" align='center'>{TEXT.APP_TEXTO}</Typography>
            <form onSubmit={handleSubmit(handleSearch)} className='form-search'>
                <TextField
                    variant="outlined"
                    label={TEXT.FORM_SEARCH}
                    {...register('search',
                        { required: true })
                    }
                    error={errors?.search != null}
                    helperText={errors?.search != null ? TEXT.ERROR_REQUIRED : ''}

                />

                <Button type='submit' disabled={loading} variant='contained' className='button-search'>{loading ? <CircularProgress /> : null} {TEXT.BTN_SEARCH}</Button>
            </form>

            {loading ? (

                <Grid2 container justifyContent="center">
                    <Typography variant="h6" align="center">{TEXT.LOADING}</Typography>
                </Grid2>
            ) : (
                <>
                    {hasSearched && users.length === 0 ? (
                        <Typography variant="h6" align="center" color="error">
                            {TEXT.NO_USERS_FOUND}
                        </Typography>
                    ) : (
                        <Grid2 container spacing={{ xs: 3, md: 3 }} columns={{ xs: 2, sm: 6, md: 12 }}>
                            {users.map(user => (
                                <User key={user.id} user={user} />
                            ))}
                        </Grid2>
                    )}
                </>

            )}
        </Container>
    )
}

export default Home