import Image from "next/image";
import { GitHubIcon } from "@/@/_components/icons";
import { SocialLink } from "@/@/_components/social-link";
import { WEB_APPS } from "@/@/_data/projects";

type Props = {
  project: (typeof WEB_APPS)[number];
};

export const ProjectCard = ({ project }: Props) => {
  return (
    <div
      className="flex flex-col rounded-xl shadow-2xl dark:shadow-slate-700 hover:scale-105"
      key={project.title}
    >
      <Image
        src={project.thumbnail}
        alt={`Logo of ${project.title}`}
        className="h-36 w-full rounded-t-xl object-cover bg-no-repeat"
        width={0}
        height={0}
        unoptimized
        priority
      />
      <div className="p-4">
        <a className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {project.title}
        </a>
        <div className=" z-10 mt-2 text-sm text-gray-500 dark:text-gray-400">
          {project.description}
        </div>
        <div className="z-10 mb-6 mt-6 flex flex-wrap gap-1 ">
          {project.tags.map((techStackItem) => (
            <p
              className="hover:text-primary dark:hover:text-primary inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs leading-4 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
              key={techStackItem}
            >
              {techStackItem}
            </p>
          ))}
        </div>
        <div className="flex items-center">
          <SocialLink
            icon={GitHubIcon}
            href={project.repo}
            className="h-6 w-6 flex-none"
          />
        </div>
      </div>
    </div>
  );
};
