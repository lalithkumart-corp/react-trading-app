import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {updateTheme} from '../reducers/theme';
import { Paper, Grid } from '@mui/material';

export default function GsThemeSelector() {
    let themeName = useSelector((state) => state.gsTheme.themeName);
    let dispatch = useDispatch();
    const onChangeTheme = (e) => {
        dispatch(updateTheme());
    }
    return (
        <Grid container>
            <Grid item>
                <Paper>
                    <span> THEME NAME: {themeName} </span>
                    <Checkbox 
                        // sx={{
                        //     color: pink[800],
                        //     '&.Mui-checked': {
                        //         color: pink[600],
                        //     },
                        // }} 
                        onChange={(e) => onChangeTheme(e)}
                        />
                    <p>Hello World</p>
                    <Button>font-size: 1rem</Button>
                    <Button color="gsPrimary">btn 2 - with color green</Button>
                </Paper>
            </Grid>
        </Grid>
    )
}
