import React from 'react';
import './shop.component.styles.scss';
import CollectionOverview from '../../Components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection-page.component'


const ShopPage = ({ match }) => (
            <div className='shop-page'>
             <Route exact path = {`${match.path}`} component={ CollectionOverview } />
             <Route path ={ `${match.path}/:collectionId`} component= { CollectionPage } />
            </div> 
        );


export default ShopPage;