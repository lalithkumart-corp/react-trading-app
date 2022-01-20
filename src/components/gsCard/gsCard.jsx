import { GsCardComp  } from "./gsCard.style";
import Paper from '@mui/material/Paper';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Typography } from "@mui/material";

export default function GsCard(props) {
    return (
        <GsCardComp className="gs-card">
            <Paper className="gs-paper">
                <Typography style={{textAlign: 'left', marginBottom: '15px'}}>
                    <KeyboardDoubleArrowRightIcon style={{verticalAlign: "bottom"}}/> 
                    <span>{props.cardHeader}</span>
                </Typography>
                {props.children}
            </Paper>
        </GsCardComp>
    )
}