import styled from "styled-components";
import Paper from '@mui/material/Paper';
import { green } from "@mui/material/colors";
import Box from '@mui/material/Box';

// export const GsCardComp = styled(div)({
//          color: green;
// })



export const GsCardComp = styled.div`
    .gs-paper {
        padding: 10px;
    }
`;





// This is also Valid 

// export const GsCardComp = styled((props) => (
//     <Box componentsProps={{ thumb: { className: 'gsbox' } }} {...props} />
// ))`
//     .gs-paper {
//         padding: 10px;
//     }

// `
