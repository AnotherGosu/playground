import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "PDF",
  description: "PDF document built with React-pdf",
};

const PDF = dynamic(() => import("./components/PDF").then((mod) => mod.PDF), {
  ssr: false,
  loading: () => <div className="loader mx-auto h-full w-full max-w-5xl" />,
});

export default function Home() {
  return (
    <main className="p-4">
      <PDF />
    </main>
  );
}
