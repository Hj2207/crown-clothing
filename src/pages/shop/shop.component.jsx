import React from 'react';
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';
import './shop.component.styles.scss';
import { connect, createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';



const ShopPage = ({ collections }) => (
            <div className='shop-page'>
              {collections.map(({id, ...otherCollectionItems}) => (
                <CollectionPreview key={id} {...otherCollectionItems} />  
              ))}
            </div> 
        );

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);