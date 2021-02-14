import React from 'react'
import CollectionPreview from '../../Components/collection-preview/collection-preview.component';
import './collection-overview.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => (

    <div className='collection-overview'>
         {collections.map(({id, ...otherCollectionItems}) => (
                <CollectionPreview key={id} {...otherCollectionItems} />  
              ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);