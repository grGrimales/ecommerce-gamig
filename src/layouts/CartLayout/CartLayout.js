"use client";

import { Footer, HeaderCart } from "@/app/components/Layout";
import { Separator } from "@/app/components/Shared/Separator/Separator";
import { Container, Header } from "semantic-ui-react";

export function CartLayout({ children, step }) {
  return (
    <>
      <HeaderCart step={step} />
      <Separator height={150} />

      <Container>{children}</Container>
      
      <Separator height={70} />
      <Footer />
    </>
  );
}
