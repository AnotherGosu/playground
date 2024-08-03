import { Metadata } from "next";

import { TaskContainer } from "./components/TaskContainer";

export const metadata: Metadata = {
  title: "To Do",
  description: "To Do app built with Zustand",
};

export default function Page() {
  return (
    <main className="p-4">
      <TaskContainer />
    </main>
  );
}
