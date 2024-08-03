import { Metadata } from "next";

import { Camera } from "./components/Camera";

export const metadata: Metadata = {
  title: "Face Detection",
  description: "Face detection built with Media Pipe",
};

export default function Page() {
  return (
    <main className="flex items-center justify-center p-4">
      <Camera />
    </main>
  );
}
