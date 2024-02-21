import dynamic from "next/dynamic";
import React from "react";

const DynamicMap = dynamic(() => import('@/../components/LeafMap'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <DynamicMap />
    </>
  );
}
