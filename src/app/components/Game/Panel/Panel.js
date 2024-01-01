"use client";

import { Button, Container, Icon, Image } from "semantic-ui-react";
import styles from "./Panel.module.scss";
import { calcDiscountedPrice } from "@/utils/functions";
export function Panel({ gameId, game }) {

  const buyPrice = calcDiscountedPrice(game.price, game.discount);
  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image src={game.cover.data.attributes.url} alt="cover" />
      </div>

      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.title}</h2>

          <div className={styles.moreInfo}>
            <span>
              <Image
                src={game.platform.data.attributes.icon.data.attributes.url}
                alt="platform"
              />
              {game.platform.data.title}
            </span>

            <span>
              <Icon name="check" />
              In stock
            </span>
          </div>

          <div className={styles.price}>
            {game.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />${game.price}
                </span>

                <span className={styles.discount}>
                    <Icon name="tag" />-{ game.discount}%
                </span>
              </>
            )}

            <span className={styles.price}>
                <Icon name="tag" />${buyPrice}
            </span>
          </div>

          <Button primary fluid>Buy now</Button>
        </div>
      </div>
    </Container>
  );
}
