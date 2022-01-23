import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import Link from '@mui/material/Link';
import Menu from '@mui/material/Menu';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import MenuItem from '@mui/material/MenuItem';
import { useState, useContext } from 'react';

import { Link, NavLink } from 'react-router-dom';
import {GsContext} from '../../gsContext.js';

// import GsThemeSelectorSmall from '../themeSelectorSmall';
export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const tt = useContext(GsContext);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="home"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box component="div" sx={{ flexGrow: 1 }} color="inherit">
                        <Button component={Link} exact="true" to={"/myhome"} style={{color: "#fff"}}>Home</Button>
                        <Button component={Link} exact="true" to={"/currency-grid"} >
                            <ListItemText color="inherit">Currency Grid</ListItemText>
                            {/* <Typography variant='span' color="inherit">Currency Grid</Typography> */}
                        </Button>
                        <Button component={Link} exact="true" to={"/theme-setting"}>Themes</Button>
                        
                        {/* <Typography variant="button">
                            <Button>
                                <Link to="/currency-grid">Currency Grid</Link>
                            </Button>
                        </Typography>
                        
                        <Typography variant="button">
                            <Link to="/theme-setting" style={{"color": "#ffffff"}}>Themes</Link>
                        </Typography>

                        <NavLink to="/theme-setting2">Themes2</NavLink> */}


                        {/* <List>
                            <ListItem button component={Link} to="/currency-grid" activeClassName="Mui-selected" exact>
                                <ListItemText primary="Currency Grid" />
                            </ListItem>
                            <ListItem button component={Link} to="/theme-setting" activeClassName="Mui-selected" exact>
                                <ListItemText primary="Themes" />
                            </ListItem>
                        </List> */}

                        <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Other
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem 
                                onClick={handleClose}
                                component={Link} to="/carrier-analysis"
                                >
                                    <ListItemText primary="Carrier Analytics" color="gsPrimary"/>
                                </MenuItem>
                            <MenuItem onClick={handleClose} component={Link} to="/account">
                                <ListItemText primary="My Account" />
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Button color="inherit">Welcom {tt.userNameFromCtx}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}