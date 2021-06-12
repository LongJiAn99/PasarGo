import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'

import useStyles from './css/productstyles'

const Product = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = '' title={product.title} />
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = 'h5' gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant = 'h5'>
                        ${product.price}
                    </Typography>
                </div>
                <Typography variant = 'body2' color = 'textSecondary'>
                    {product.desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className = {classes.cardActions}>
                <IconButton aria-label = 'Add to Cart'>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
