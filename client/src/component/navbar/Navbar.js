// rafce
import React, { useContext, useEffect } from 'react';
import './navbar.css';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import logoimage from './logo.jpeg';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { NavLink } from 'react-router-dom';//Page linked but without reloading the page
//import { collapseClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider'
//End



const Navbar = () => {


    const history = useNavigate();

    const { account, setAccount } = useContext(LoginContext);
    console.log(account);


    const getdeatilvaliduser = async () => {
        const res = await fetch("/validuser", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include"
        });

        const data = await res.json();
        //  console.log(data);

        if (res.status !== 201) {
            console.log("first login karo");
        } else {
            //console.log("data valid");
            setAccount(data);
        }
    };



    const logoutuser = async () => {
        const res2 = await fetch("/logout", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data2 = await res2.json();
        console.log(data2); 

        if (res2.status !== 201) {
            console.log("erro");
        } else {
//            console.log("data valid");
            alert("logout")
            history("/");
            setAccount(false);
        }
    };


    useEffect(() => {
        getdeatilvaliduser();
    }, []);


    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    // const navigate = useNavigate();
    // const Logout = () => {
    //     window.localStorage.removeItem("isLogedIn");
    //     navigate('/');
    // }
    // //test

    const carts = account && account.carts ? account.carts.length : 0;


    return (
        <header>
            <nav>
                <div className="left">
                    {/* <IconButton className='hamburgur'>
                        <MenuIcon style={{color:"#fff"}}/>
                    </IconButton> */}

                    <div className="navlogo">
                        <NavLink to="/">Grocery Ecom</NavLink>
                    </div>
                    // <h1 className='storename'>Bajrang Makhana Foodstuff</h1>
                    {/* <div className="nav_searchbar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon id="search" />
            </div>
          </div> */}
                </div>
                {/* <div className="hamburger-menu">
                    <Button
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        Menu
                    </Button>
                </div> */}


                <div className="right">
                    {/* <div className="nav_btn">
                        <NavLink to="/login ">signin</NavLink>
                    </div> */}

                    <div className="cart_btn">

                        {
                            account ?
                                <NavLink to="/buynow" >
                                    <Badge badgeContent={account.carts.length} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                        {/* <button onClick={redirectToHome}>Buy Now</button> */}
                                    </Badge>
                                </NavLink> : <NavLink to="/login">
                                    <Badge badgeContent={0} color="primary">
                                        <ShoppingCartIcon id="icon" />
                                        {/* <button onClick={redirectToHome}>Buy Now</button> */}
                                    </Badge>
                                </NavLink>
                        }

                    </div>

                    <div className="mainavtar">
                        <div className="subavatar1">
                            <Button
                                id="fade-button"
                                aria-controls={open ? 'fade-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {
                                    account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
                                        <Avatar className='avtar'></Avatar>
                                }

                            </Button>
                        </div>

                        <div className="subavatar2">
                            <Menu
                                id="fade-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'fade-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                TransitionComponent={Fade}
                            >

                                <div className="linskdata">
                                    <MenuItem onClick={handleClose}>My Account</MenuItem>

                                    {
                                        account ? <MenuItem onClick={handleClose} onClick={logoutuser}>Logout</MenuItem>:""
                                    }                                    
                                    <MenuItem onClick={handleClose}><NavLink to="/login" style={{ textDecoration: 'none', color: 'black'}}> Login </NavLink></MenuItem>
                                </div>
                            </Menu>
                        </div>
                    </div>

                    {/* &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => Logout()} className='logout_button'  >
                        Logout
                    </button> */}
                </div>


                {/* <div className="menuofnav">
                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >

                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}><NavLink to="/login">signin</NavLink></MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        <MenuItem onClick={handleClose}><NavLink to="/login">Cart</NavLink></MenuItem>
                    </Menu>
                </div> */}
            </nav>
        </header >
    );
};

export default Navbar;
