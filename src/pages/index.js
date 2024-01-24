import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <header style={{ padding: "20px", textAlign: "center"}}>
        <h1> Xtremepush React PWA NextJS</h1>
      </header>
    </div>
  );
}
