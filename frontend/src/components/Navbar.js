import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {
  AppBar,
  Badge,
  Button,
  Container,
  Toolbar,
  Typography
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{
                            flexGrow: 1,
                            textDecoration: 'none',
                            color: 'white'
                        }}
                    >
                        E-Commerce
                    </Typography>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/"
                    >
                        Products
                    </Button>
                    <Button
                        color="inherit"
                        component={Link}
                        to="/cart"
                        startIcon={
                            <Badge badgeContent={cartItemsCount} color="error">
                                <ShoppingCartIcon />
                            </Badge>
                        }
                    >
                        Cart
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar; 