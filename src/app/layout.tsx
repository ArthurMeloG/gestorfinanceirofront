'use client'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from "next/font/google";
import "./globals.css";
import {Button, ConfigProvider, theme} from "antd";
import Sidebar from "@/app/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm, token: {colorPrimary: "#00B96B", borderRadius: 2, colorBgContainer: '#3e5e28',}}}>
                <>
                    {children}
                </>
            </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
