import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss'

const CollectionPreview =({title,items})=>(
 <div className="collection-preview">
  <h1 className="title">{title.toUpperCase()}</h1>
  <div className="preview">
   {items
   .filter((item,idx)=>idx<4)//to show only 4 items in row
   .map(({id,...otherItemsProps})=>(
    <CollectionItem key={id} {...otherItemsProps}/>
   ))}
  </div>
 </div>
)

export default CollectionPreview;