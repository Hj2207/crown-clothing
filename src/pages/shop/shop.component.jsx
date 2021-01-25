import React from 'react';
import SHOP_DATA from './shop.data';

import './shop.component.styles.scss';


class ShopPage extends React.Component {
   
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        return(
            <div>SHOP page</div>
        );
    }

    
}
export default ShopPage;