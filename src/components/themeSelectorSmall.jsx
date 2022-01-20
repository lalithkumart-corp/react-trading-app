import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {updateTheme} from '../reducers/theme';
import { Paper, Grid } from '@mui/material';

export default function GsThemeSelectorSmall() {
    let themeName = useSelector((state) => state.gsTheme.themeName);
    let dispatch = useDispatch();
    const onChangeTheme = (e) => {
        dispatch(updateTheme());
    }
    return (
        <Checkbox onChange={(e) => onChangeTheme(e)} />
    )
}
