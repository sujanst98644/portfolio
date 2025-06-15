"use client";
import React, { use } from "react";
import "./globals.css";
import Header from "./components/header";
import Homepage from "./pages/home";
import Foot from "./components/footer";

export default function Home() {
  return (
    <div >
      <Header />
      <Homepage/>
      <Foot/>
    </div>
  );
}
