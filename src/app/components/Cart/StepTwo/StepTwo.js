
'use client';
import { useState } from "react";
import { Separator } from "../../Shared/Separator/Separator";
import { Addresses } from "./Addresses";
import styles from "./StepTwo.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import { ENV } from "@/utils";
import { Elements } from "@stripe/react-stripe-js";
import { Payment } from "./Payment";


const stripeInit = loadStripe(ENV.STRIPE_KEY)
export const StepTwo = ({ games }) => {

    const [addressesSelected, setAddressesSelected] = useState([]);
  return (

    <Elements stripe={stripeInit}>
    <div className={styles.stepTwo}>
      <div className={styles.center}>
        <Addresses addressesSelected={addressesSelected} setAddressesSelected={setAddressesSelected} />
        <Separator height={50} />

        { addressesSelected && <Payment /> }
      </div>

      <div className={styles.right}>
        <p>Resumen</p>
      </div>
    </div>
    </Elements>
  );
};
