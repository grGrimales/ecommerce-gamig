"use client";
import { useEffect, useState } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./Addresses.module.scss";
import classNames from "classnames";

const addressCtrl = new Address();

export function Addresses({ addressesSelected, setAddressesSelected}) {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState([]);
console.log(addressesSelected)
  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);

        console.log(response);
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.addresses}>
    <h2>Addresses </h2>  
      {addresses.map((address) => {
        return (
          <div 
          key={address.id}
           className={classNames(styles.address, {
            [styles.active]: addressesSelected.id === address.id,
           })}
            onClick={() => setAddressesSelected(address)}>
            <p>
              {address.attributes.name} {address.attributes.title}
            </p>
            <p>
              {address.attributes.address}, {address.attributes.postalCode},{" "}
                {address.attributes.state}, {address.attributes.city}
            </p>
          </div>
        );
      })}
    </div>
  );
}
