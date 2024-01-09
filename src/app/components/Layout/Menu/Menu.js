"use client";
import { useEffect, useState } from "react";
import styles from "./Menu.module.scss";
import { Platform } from "@/api";
import { map } from "lodash";
import Link from "next/link";
import { Button, Icon, Image, Input } from "semantic-ui-react";
import classNames from "classnames";
import { useRouter } from "next/navigation";
const platformCtrl = new Platform();

export function MenuPage({ isOpenSearch }) {
  const [platforms, setPlaforms] = useState(null);
const [showSearch, setShowSearch] = useState(isOpenSearch);
const [searchText, setSearchText] = useState("");
const router = useRouter();
const openCloseSearch = () => setShowSearch(!showSearch);
  useEffect(() => {
    try {
      (async () => {
        const response = await platformCtrl.getAll();
        setPlaforms(response.data);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);



  useEffect(() => {
  searchText && setSearchText(router.query.s);
  document.getElementById('search-games').focus()

  }, [router.query]);


const onSearch = (text) => {
  console.log("Buscando...", text);router.replace(`/search?s=${text}`);
}



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
          onChange={(_, data) => onSearch(data.value)}
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
