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
                            colorPrimary: '#00b96b',
                        },
                    }}
                >
                    {children}
                </ConfigProvider>
            </body>
        </html>
    )
}
