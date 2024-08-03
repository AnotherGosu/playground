import { usePathname } from "next/navigation";

export const usePageTitle = () => {
  const pathname = usePathname();

  const [_, route] = pathname.split("/");

  const title = route || "Playground";

  return { title };
};
