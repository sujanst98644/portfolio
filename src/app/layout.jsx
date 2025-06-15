"use client";
import "./globals.css";
import React from "react";


export default function rootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>My Next.js App</title>
                <meta name="description" content="A simple Next.js application." />
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>{children}</body>
        </html>
    );
}