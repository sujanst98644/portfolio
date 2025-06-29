"use client";
import Foot from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import React, { useEffect } from "react";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function RootLayout({ children }) {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // 0 = no smooth, higher = more
      effects: true,
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js application." />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Header />
            <div>{children}</div>
            <Foot />
          </div>
        </div>
      </body>
    </html>
  );
}
