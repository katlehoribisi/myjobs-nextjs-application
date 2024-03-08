"use client";
import {UploadOutlined} from "@ant-design/icons"
import {Upload} from "antd"
import { Card, Space } from 'antd';
import { Button } from 'antd';
import Login from "./login/page";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
    <Card>
        <h1 className={styles.modalTitle}>Upload Your Files</h1> 
        <br/>
        <Upload className={styles.icons} ><UploadOutlined  /></Upload>
        <Login/>
    </Card>
    </div>
  );
}
