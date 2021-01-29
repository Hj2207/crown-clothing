import React from 'react';
import CollectionItem from '../collection-item/collection-item.component'
import './collection-preview.styles.scss';

const CollectionPreview = ({title, id, items}) => (

    <div className='collection-preview'>
        <div className= 'title'>{title.toUpperCase()}</div>
        <div className='preview'>
        {
           items.filter((id,idx)=> idx< 4).map(({id, ...otherCollectionData}) => (
               <CollectionItem key={id} {...otherCollectionData}/>
           )) 
        }
        </div>
      
    </div>
);

export default CollectionPreview;