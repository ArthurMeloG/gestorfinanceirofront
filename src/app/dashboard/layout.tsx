"use client"
import Sidebar from "@/app/Sidebar";
import {ReactNode} from "react";

export default function Layout({children} : Readonly<{children: ReactNode}>) {
    return (
        <>
            <Sidebar>{children}</Sidebar>
        </>
    )

}