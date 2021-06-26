import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

import useStyles from './css/productstyles'

const OwnProduct = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className = {classes.root}>
            <CardMedia className = {classes.media} image = {product.photos} title={product.title} />
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
                <IconButton className = {classes.icon} aria-label = 'Delete'>
                    <DeleteForeverRoundedIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default OwnProduct
