import Checkbox from '@mui/material/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import {updateTheme} from '../reducers/theme';
export default function GsThemeSelector() {
    let themeName = useSelector((state) => state.theme.themeName);
    let dispatch = useDispatch();
    const onChangeTheme = (e) => {
        dispatch(updateTheme());
    }
    return (
        <div>
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
        </div>
    )
}
