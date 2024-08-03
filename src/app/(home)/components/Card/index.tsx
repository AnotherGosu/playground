import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const Card = ({ href, title, description, icon }: CardProps) => {
  return (
    <Link
      href={href}
      className="focus-ring block rounded-md p-4 shadow-md hover:shadow-lg"
    >
      <div className="mb-1 flex justify-between [&>svg]:size-5 [&>svg]:text-indigo-500">
        <h3 className="font-semibold">{title}</h3>
        {icon}
      </div>

      <p className="text-slate-500">{description}</p>
    </Link>
  );
};
