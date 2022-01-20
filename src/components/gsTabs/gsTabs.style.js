// import styled from 'styled-components';
import { styled } from "@mui/material/styles";

// export const GsTabsWrapper = styled.div`
//        .MuiTab-root.Mui-selected {
//                 background-color: ${props => props.theme.palette.primary.selected}
//                 color: #2e365d !important;
//        }
// `;

// const div = styled.div``;

export const GsTabsWrapper = styled('div')(({theme}) => `
        .MuiTab-root{
            color: ${theme.palette.primary.tabColor};
            border: 1px solid lightgrey;
            min-width: 140px;
            min-height: 10px;
            padding: 7px;
            &.Mui-selected {
                background-color: ${theme.palette.primary.selectedTabBg};
                color: ${theme.palette.primary.selectedTabColor};
            }
        }
`);
