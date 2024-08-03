import {
  EnvelopeIcon,
  FaceSmileIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

import { Card } from "./components/Card";

export default function Page() {
  return (
    <main className="flex items-center justify-center p-4">
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
          href="/face-detection"
          title="Face Detection"
          description="Face detection built with Media Pipe"
          icon={<FaceSmileIcon />}
        />
      </div>
    </main>
  );
}
