

'use client';
import { Icon } from 'semantic-ui-react';
import styles from './WishlistIcon.module.scss';

export function WishlistIcon ({gameId, className}){
    return (
       <Icon name="heart" className={`${styles.wishlistIcon} ${className ?  className : ''}`} />
    )
}