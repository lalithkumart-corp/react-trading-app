import { useDispatch } from 'react-redux';
import { login } from '../reducers/auth';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function Login() {
    const dispatch = useDispatch();
    const onClickLogin = () => {
        dispatch(login({authToken: '1122', userId: 1, roleId: 3}));
    };
    return (
        <Grid Container>
            <Grid item>
                <p>Login screen</p>
                <Button onClick={onClickLogin}> Login </Button>
            </Grid>
        </Grid>
    );
}