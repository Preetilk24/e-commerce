import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    IconButton,
    Paper,
    Typography
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <Container sx={{ py: 8 }}>
                <Typography variant="h5" gutterBottom textAlign="center">
                    Your cart is empty
                </Typography>
                <Box display="flex" justifyContent="center" mt={2}>
                    <Button
                        component={Link}
                        to="/"
                        variant="contained"
                        color="primary"
                    >
                        Continue Shopping
                    </Button>
                </Box>
            </Container>
        );
    }

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    {cart.map((item) => (
                        <Card key={item._id} sx={{ mb: 2 }}>
                            <Grid container spacing={2} sx={{ p: 2 }}>
                                <Grid item xs={12} sm={4}>
                                    <Box sx={{ 
                                        width: '100%', 
                                        height: '200px', 
                                        position: 'relative' 
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain',
                                                borderRadius: 1
                                            }}
                                            image={item.images[0]}
                                            alt={item.name}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <CardContent sx={{ p: 1 }}>
                                        <Typography variant="h6" gutterBottom>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Price: ${item.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.primary">
                                            Quantity: {item.quantity}
                                        </Typography>
                                        <IconButton onClick={() => updateQuantity(item._id, item.quantity + 1)}>
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton onClick={() => updateQuantity(item._id, item.quantity - 1)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <IconButton onClick={() => removeFromCart(item._id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    ))}
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={3}>
                        <Typography variant="h6" gutterBottom>
                            Cart Summary
                        </Typography>
                        <Divider />
                        <Typography variant="body1" gutterBottom>
                            Total: ${cartTotal}
                        </Typography>
                        <Button
                            component={Link}
                            to="/checkout"
                            variant="contained"
                            color="primary"
                        >
                            Proceed to Checkout
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CartPage; 