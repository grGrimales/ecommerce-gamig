
"use client";
import { Container } from "semantic-ui-react";
import styles from "./BasicLayout.module.scss";
import classNames from "classnames";
import { Footer, TopBar } from "@/app/components/Layout";

export function BasicLayout({
  children,
  isOpenSearch = false,
  isContainer = false,
  relative = false,
}) {
  return (
    <>

    <TopBar isOpenSearch={isOpenSearch} />
      <Container fluid>
        <div className={classNames({ [styles.relative]: relative })}>
          {isContainer ? <Container>{children}</Container> : children}
        </div>
      </Container>

      <Footer />
    </>
  );
}
