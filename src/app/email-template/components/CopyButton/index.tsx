"use client";

import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/Button";

import { useCopyButton } from "./useCopyButton";

interface CopyButtonProps {
  html: string;
}

export const CopyButton = ({ html }: CopyButtonProps) => {
  const { onCopy } = useCopyButton({ html });

  return (
    <Button
      onClick={onCopy}
      className="mx-auto mb-4 px-2"
    >
      <DocumentDuplicateIcon className="size-4" />
      Copy HTML
    </Button>
  );
};
