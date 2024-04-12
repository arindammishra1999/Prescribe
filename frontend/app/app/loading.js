"use client";
import { Circles } from "react-loader-spinner";
export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Circles height={300} width={300} color="#4fa94d" visible={true} />
    </div>
  );
}
