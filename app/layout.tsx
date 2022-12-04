import RootStyleRegistry from './emotion';
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head/>
        <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
        </body>
        </html>
    );
}