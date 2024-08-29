import {
  DocumentTextIcon,
  EnvelopeIcon,
  FaceSmileIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import iconImg from "@/images/icon.png";

import { Card } from "./components/Card";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center gap-20 p-4">
      <Image
        src={iconImg}
        alt="Playground"
        className="size-[256px]"
        priority
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card
          href="/to-do"
          title="TO DO"
          description="To Do app built with Zustand"
          icon={<ListBulletIcon />}
        />

        <Card
          href="/email-template"
          title="Email Template"
          description="Email template built with React Email"
          icon={<EnvelopeIcon />}
        />

        <Card
          href="/pdf"
          title="PDF"
          description="PDF document built with React-pdf"
          icon={<DocumentTextIcon />}
        />

        <Card
          href="/face-detection"
          title="Face Detection"
          description="Face detection built with Media Pipe"
          icon={<FaceSmileIcon />}
        />
      </div>
    </main>
  );
}
