"use client";
import "semantic-ui-css/semantic.css";
import { Container, Button } from "semantic-ui-react";
import "@/scss/global.scss";
import { useAuth } from "@/hooks";
import HomePage from "./home/HomePage";

export default function Home() {
  const { user, logout } = useAuth();
  console.log("Home");
  return <HomePage />;
}
