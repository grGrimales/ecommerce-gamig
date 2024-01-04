"use client";
import { useRouter } from "next/navigation";
import { BasicLayout } from "@/layouts";
import {
  ChangeEmailForm,
  ChangeNameForm,
  ChangePasswordForm,
  Info,
  ListAddresses,
  Settings,
  Wishlist,
} from "@/app/components/Account";
import { List, Tab } from "semantic-ui-react";
import styles from "./Account.module.scss";
import { useAuth } from "@/hooks";
import { Separator } from "../components/Shared/Separator/Separator";
import { AddAdress, Address } from "../components/Account/Address/AddAddress";
import { useState } from "react";

export default function AccountPage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [reload, setReload] = useState(false)
  if (!user) {
    router.push("/");
    return null;
  }


  const onReload = () => { setReload(!reload);  console.log(reload)}
  const panes = [
    {
      menuItem: "My orders",
      render: () => (
        <Tab.Pane attached={false}>
          <p>My orders</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Wish list",
      render: () => (
        <Tab.Pane attached={false}>
        <Wishlist/>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Addresses",
      render: () => (
        <Tab.Pane attached={false}>
         <AddAdress onReload={onReload} />
         <ListAddresses reload={reload}  onReload={onReload}/>
         <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key:"20", icon: "settings", content: "Settings" },
      render: () => (
        <Tab.Pane attached={false}>
          <ChangeNameForm />
          <div className={styles.containerForms}>
            <ChangeEmailForm />
            <ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {key:"21", icon: "log out", content: "", onClick: logout },
      render: () => (
        <Tab.Pane attached={false}>
          <p>Logout</p>
        </Tab.Pane>
      ),
    },
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <Tab
          panes={panes}
          menu={{ secondary: true, pointing: true }}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
}
