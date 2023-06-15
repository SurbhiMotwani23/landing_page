import React, { useState } from 'react';
import Company_Logo from '../Assets/Company_Logo.png';
import { BsCart2 } from 'react-icons/bs';
import { HiMenuAlt3 } from 'react-icons/hi'; // Changed from HiOutlineBars3
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import './App.css';
import '/home/surbhimotwani/task_surbhi/src/App.css';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuToggle = () => {
        setOpenMenu((prevOpen) => !prevOpen);
    };

    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
        },
        {
            text: 'About',
            icon: <InfoIcon />,
        },
        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon />,
        },
        {
            text: 'Contact',
            icon: <PhoneRoundedIcon />,
        },
        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon />,
        },
    ];

    return (
        <nav>
            <HiMenuAlt3 />
            <BsCart2 />
            <div className="nav-logo-container">
                <img src={Company_Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <div className="navbar-dropdown">
                    <button className="navbar-dropdown-button" onClick={handleMenuOpen}>
                        Product <ArrowDropDownIcon />
                    </button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        MenuListProps={{
                            'aria-labelledby': 'product-dropdown',
                        }}
                    >
                        {menuOptions.map((item) => {
                            if (item.text === 'Product' || item.text === 'Solution') {
                                return (
                                    <MenuItem key={item.text} onClick={handleMenuClose}>
                                        <a href={item.href}>{item.text}</a>
                                    </MenuItem>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </Menu>
                </div>
                <a href="/enterprise">Enterprise</a>
                <a href="/pricing">Pricing</a>
                <button className="primary-button">Sign Up</button>
            </div>
            <div className="navbar-menu-container">
                <HiMenuAlt3 onClick={handleMenuToggle} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                    .

                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <button className="primary-button">Get Started</button>
        </nav>
    );
};

export default Navbar;
