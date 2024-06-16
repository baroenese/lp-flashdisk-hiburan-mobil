/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/G5mYvHVvdAo
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'
import { DM_Sans } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/main/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/main/components/ui/avatar"

export function Paygoy() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium" href="#">
            Products
          </Link>
          <Link className="text-sm font-medium" href="#">
            About
          </Link>
          <Link className="text-sm font-medium" href="#">
            Testimonials
          </Link>
          <Link className="text-sm font-medium" href="#">
            Contact
          </Link>
        </nav>
        <Button className="ml-4" size="icon" variant="ghost">
          <SunIcon className="h-6 w-6" />
          <span className="sr-only">Toggle dark mode</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Elevate Your Business with Our Solutions
                </h1>
                <p className="mx-auto max-w-[700px]">
                  Discover how our innovative products and services can transform your business and drive success.
                </p>
                <div className="mt-6">
                  <Link className="inline-flex h-10 items-center justify-center rounded-md" href="#">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <img
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="550"
                  src="/placeholder.svg"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Products and Services</h2>
                <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how our innovative solutions can transform your business and drive success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <img
                  alt="Product 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="text-lg font-bold">Product 1</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Product 2"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="text-lg font-bold">Product 2</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              <div className="grid gap-1">
                <img
                  alt="Service 1"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="200"
                  src="/placeholder.svg"
                  width="300"
                />
                <h3 className="text-lg font-bold">Service 1</h3>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers and learn how our solutions have helped their businesses.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1  p-4 rounded-lg">
                <blockquote>
                  <p className="text-sm">
                    "Working with Acme Inc has been a game-changer for our\n business. Their products and services have
                    helped us\n streamline our operations and drive growth."
                  </p>
                </blockquote>
                <div className="flex items-center space-x-4 mt-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">John Doe</h4>
                    <p className="text-sm">CEO, Acme Corp</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1  p-4 rounded-lg">
                <blockquote>
                  <p className="text-sm">
                    "Acme Inc's solutions have been a game-changer for our\n business. Their team has been incredibly
                    helpful and\n responsive throughout the process."
                  </p>
                </blockquote>
                <div className="flex items-center space-x-4 mt-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Jane Smith</h4>
                    <p className="text-sm">COO, Acme Corp</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-1  p-4 rounded-lg">
                <blockquote>
                  <p className="text-sm">
                    "I highly recommend Acme Inc to any business looking to\n take their operations to the next level.
                    Their products\n and services are top-notch."
                  </p>
                </blockquote>
                <div className="flex items-center space-x-4 mt-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.svg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold">Bob Johnson</h4>
                    <p className="text-sm">CTO, Acme Corp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}