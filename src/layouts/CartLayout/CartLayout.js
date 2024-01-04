"use client";

import { Footer } from "@/app/components/Layout";
import { Separator } from "@/app/components/Shared/Separator/Separator";
import { Container } from "semantic-ui-react";

export function CartLayout({ children }) {
  return (
    <>
      <p>ddd</p>
      <Separator height={150} />

      <Container>{children}</Container>
      <Separator height={70} />
      <Footer />
    </>
  );
}
