
'use client';
import { useEffect, useState } from 'react';
import { Address } from '@/api';
import { useAuth } from '@/hooks';
import styles from './Addresses.module.scss';



const addressCtrl =  new Address();


export function Addresses (){


    const {user} = useAuth();
    const [addresses, setAddresses] = useState([]);

useEffect(() => {
    (async () => {
        try {
            const response = await addressCtrl.getAll(user.id);

            console.log(response)
            setAddresses(response.data);
        } catch (error) {
            console.error(error);
        }
    })();
}
, []);


  return (
    <div>Addresses</div>
  )
}
