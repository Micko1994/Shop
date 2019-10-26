import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];


class Review extends Component {

    changeNumberToPriceFormat(number){
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    }
    render(){
        const { userGoods, user } = this.props
        console.log('userGoods;', this.props)
        return (
            <React.Fragment>
              <Typography variant="h6" gutterBottom>
                Order summary
              </Typography>
              <List disablePadding>
                {userGoods.map(product => (
                  <ListItem 
                    key={product.name}>
                    <ListItemText primary={product.name} secondary={product.desc} />
                    <Typography variant="body2">{this.changeNumberToPriceFormat(product.current_price)}</Typography>
                  </ListItem>
                ))}
                <ListItem >
                  <ListItemText primary="Total" />
                  <Typography variant="subtitle1" >
                    {this.changeNumberToPriceFormat(userGoods.reduce((acc, cur) => acc += cur.current_price, 0))}
                  </Typography>
                </ListItem>
              </List>
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({ good, auth }) => ({ userGoods: good.userGoods, user: auth.user })

export default connect(
    mapStateToProps,
    null
)(Review);