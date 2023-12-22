"use client";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import { Platform } from "@/api";
import { map } from "lodash";
import Link from "next/link";
import { Button, Icon, Image, Input } from "semantic-ui-react";
import classNames from "classnames";
const platformCtrl = new Platform();

export function MenuPage({ isOpenSearch }) {
  const [platforms, setPlaforms] = useState(null);
const [showSearch, setShowSearch] = useState(false);
console.log(showSearch)
const openCloseSearch = () => setShowSearch(!showSearch);
  useEffect(() => {
    try {
      (async () => {
        const response = await platformCtrl.getAll();
        console.log(response);
        setPlaforms(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className={styles.platforms}>
      {map(platforms, (platform, index) => (
        <Link key={platform.id} href={`/games/${platform.attributes.slug}`}>
          <Image
            src={platform.attributes.icon.data.attributes.url}
            alt={platform.attributes.title}
          />
          {platform.attributes.title}
        </Link>
      ))}

      <button className={styles.search} onClick={openCloseSearch}>
        <Icon name="search" />
      </button>

      <div className={classNames(styles.inputContainer, {
        [styles.active]: showSearch,
      })}>
        <Input
          id="search-games"
          placeholder="Buscador"
          className={styles.input}
          focus={true}
        />
        <Icon
          name="close"
          className={styles.closeInput}
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
