"use client";

import { ReactNode } from "react";
// import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactLenis } from 'lenis/react'

interface Props {
  children?: ReactNode;
}

function SmoothScrolling({ children }: Props) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
