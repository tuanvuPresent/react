// in src/App.js
import React from 'react';

import {Admin, Resource} from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/AddShoppingCartSharp';
import Home from "../pages/home/Home";
import ListProduct from "../pages/shop/ListProduct";

const AdminResource = () => (
    <Admin dataProvider={simpleRestProvider('http://path.to.my.api')}>
        <Resource name="Home" list={Home} icon={HomeIcon}/>
        <Resource name="Shop" list={ListProduct} icon={ShopIcon}/>
    </Admin>
);

export default AdminResource;
