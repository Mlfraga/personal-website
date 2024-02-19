import clsx from 'clsx'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Matheus Fraga, a software engineer based in Belo Horizonte.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Matheus Fraga, a software engineer based in Belo Horizonte.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              {`I've always been passionated by digital world! My first contact with a computer is when I was
              just nine years old, playing online puzzles on my sister's computer. Soon, I
              was hooked on playing games on my PlayStation 3. But the real
              game-changer came at 14 when I got my first computer, made a website
              using HTML, and sparked my first interest for coding. `}
            </p>
            <p>
              {`By the age of 16, I had delved deeper into the world of programming by enrolling in a technical course in software development. It was there that I developed a foundational understanding of programming logic through C++ and began coding with .NET and Java. This experience solidified my decision to pursue a career in this field. Ultimately, searching in the internet I discovered the versatility of JavaScript for developing mobile, web, and server applications, leading me to specialize in it. I committed myself to mastering JavaScript, aiming bocome a full-stack JavaScript developer.`}
            </p>
            <p>
              Automobiles have also captured my interest from a young age. I`m
              fascinated by custom automobiles, dedicating part of my free time
              to automotive events and customizing vintage cars.
            </p>
            <p>
              Professionally, I am in pursuit of new ventures and substantial
              projects that challenge me to apply my comprehensive knowledge in
              software development, especially in enhancing user experience
              through front-end development. My expertise predominantly lies in
              the JavaScript ecosystem, encompassing NodeJS, Express, Fastify,
              React, NextJS, React Native, and Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/FragaSlk" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/fraga.js/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/Mlfraga"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/matheus-fraga-257628178/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:matheuslf44@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              matheuslf44@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
