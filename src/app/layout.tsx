'use client'
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Inter } from "next/font/google";
import "./globals.css";
import {Button, ConfigProvider, theme} from "antd";

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
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <>
                    {children}
                </>
            </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
