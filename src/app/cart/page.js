"use client";
import { Game } from "@/api";
import { useCart } from "@/hooks";
import { CartLayout } from "@/layouts";
import { useEffect, useState } from "react";
import { StepOne, StepTwo } from "../components/Cart";

const gameCtrl = new Game();

export default function CartPage({ searchParams }) {

  console.log(searchParams)
  const { step = 1 } = searchParams;
  const currentStep = Number(step);

  const [games, setGames] = useState(null);

  const { cart } = useCart();


  useEffect(() => {
    (async () => {
      try {
        const data = [];
        for (const item of cart) {
          const response = await gameCtrl.getGameById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        console.log(data);
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
      <CartLayout step={step}>
        {currentStep === 1 && <StepOne games={games} />}
        {currentStep === 2 && <StepTwo games={games} />}
        {currentStep === 3 && <p>3</p>}
      </CartLayout>
    </>
  );
}
