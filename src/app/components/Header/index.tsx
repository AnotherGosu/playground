import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import { GitHubIcon } from "./components/GitHubIcon";
import { PageTitle } from "./components/PageTitle";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-3">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="focus-ring rounded-md p-1.5 hover:bg-indigo-100"
        >
          <HomeIcon className="size-6" />
        </Link>

        <PageTitle />
      </div>

      <a
        href="https://github.com/AnotherGosu/playground"
        target="_blank"
        className="focus-ring rounded-md p-1.5 hover:bg-indigo-100"
      >
        <GitHubIcon />
      </a>
    </header>
  );
};
