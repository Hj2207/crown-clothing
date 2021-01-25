import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';


import './shop.component.styles.scss';



class ShopPage extends React.Component {
   
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        return(
            <div className='shop-page'>
              {collections.map(({id, ...otherCollectionItems}) => (
                <CollectionPreview key={id} {...otherCollectionItems} />  
              ))}
            </div> 
        );
    }

    
}
export default ShopPage;