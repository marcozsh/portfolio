"use client";
import { TypeAnimation } from "react-type-animation";

export default function CustomTypeWritter() {
  return (
    <TypeAnimation
      sequence={[
        "¡Hola!",
        500,
        "",
        1000,
        "¡Hola!",
        1000,
      ]}
      wrapper="span"
      speed={40}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
