import type { Authors } from "contentlayer/generated";
import type { ReactNode } from "react";
import SocialIcon from "@/components/social-icons";

interface Props {
  children: ReactNode;
  content: Omit<Authors, "_id" | "_raw" | "body">;
}

export default function AuthorLayout({ children, content }: Props) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    bluesky,
    linkedin,
    github,
  } = content;

  return (
    <div className="items-start xl:grid xl:grid-cols-3 xl:gap-x-8 space-y-6 xl:space-y-0 pt-12">
      <div className="flex flex-row items-center justify-between gap-3 py-2 xl:flex-col xl:items-center xl:py-0 xl:space-x-2">
        <div className="xl:text-center">
          <h3 className="text-xl font-bold tracking-tight xl:pt-4 xl:pb-2 xl:text-2xl xl:leading-8">
            {name}
          </h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {occupation}&nbsp;-&nbsp;{company}
          </div>
        </div>
        <div className="flex space-x-3 xl:pt-6">
          <SocialIcon kind="mail" href={`mailto:${email}`} />
          <SocialIcon kind="github" href={github} />
          <SocialIcon kind="linkedin" href={linkedin} />
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-none pb-2 xl:pt-8 xl:pb-8 xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
