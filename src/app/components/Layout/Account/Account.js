"use client";
import { useRouter } from "next/navigation";

import { useAuth, useCart } from "@/hooks";
import styles from "./Account.module.scss";
import { Button, Icon, Label } from "semantic-ui-react";
import classNames from "classnames";

export function AccountPage() {
  const { user } = useAuth();
  const { total } = useCart();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");

  const goToAccount = () => router.push("/account");
  const goToCart = () => {
    console.log('user', user);
    if (!user) goToLogin();
    else router.push("/cart");
  };

  const handleAccount = () => {
    console.log('user', user);
    if (!user) goToLogin();
    else goToAccount();
  };

  return (
    <>
      <div className={styles.account}>
        <Button icon className={styles.cart} onClick={goToCart}>
          <Icon name="cart"  />{" "}
          {total > 0 && <Label circular>{total}</Label>}
        </Button>
        <Button icon className={classNames({ [styles.user]: user })} onClick={handleAccount}>
          <Icon name="user outline"  />
        </Button>
      </div>
    </>
  );
}
