import Grid from '@mui/material/Grid';
import { TreeViewComp } from './TreeView';

export const Help = () => {
    return (
        <Grid container style={{marginTop: '30px'}}>
            <Grid item xs={12}>
                <TreeViewComp />
            </Grid>
        </Grid>
    )
}
