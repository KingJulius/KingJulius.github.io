import React from "react";
import Image from "next/image";
import { SOCIALS } from "@/@/_data/socials";
import { SocialLink } from "@/@/_components/social-link";
import { LINKS } from "@/@/_lib/constants";
import { siteMetadata } from "@/@/_data/siteMetadata";

export default function Home() {
  return (
    <React.Fragment>
      <section className="mb-5 p-4 ">
        <Image
          src="/me.png"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
          priority
        />
        <h1 className="text-2xl font-bold">{siteMetadata.author}</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I’m a fullstack software engineer with over 4 years of experience specializing in building scalable
            webites and mobile applications using a wide range of modern technologies and frameworks.
          </p>
          <p className="mt-4 mb-4">
            Currently, I&apos;m working as a software engineer at&nbsp;
            <a
              href="https://www.apple.com/"
              target="_blank"
              className="border-b border-slate-950 dark:border-white inline-block"
            >
              Apple
            </a>
            .
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href={`mailto:${siteMetadata.social.email}`}
              className="border-b border-slate-950 dark:border-white inline-block"
            >
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 border-b inline-block cursor-pointer border-slate-950 dark:border-white">
          <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
      </section>
    </React.Fragment>
  );
}
