"use client";
import React from 'react'
import { ConfigProvider } from 'antd';


export default function LayoutProvider({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ConfigProvider
                    theme={{
                        token: {
                            // Seed Token
                            colorPrimary: '#E178C5',
                        },
                    }}
                >
                    {children}
                </ConfigProvider>
            </body>
        </html>
    )
}
