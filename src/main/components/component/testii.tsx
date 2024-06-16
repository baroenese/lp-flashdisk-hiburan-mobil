/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/GWIKvnyJm1J
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"

export function Testii() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-red-500" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-red-500" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-red-500" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-red-500" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-red-500" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-red-500">
                    The complete platform for building the Web
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl dark:text-gray-400">
                    Give your team the toolkit to stop configuring and start innovating. Securely build, deploy, and
                    scale the best web experiences.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-500 dark:text-gray-950 dark:hover:bg-red-600 dark:focus-visible:ring-red-700"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-slate-200 border-red-500 bg-gray-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-900 hover:text-red-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:border-red-500 dark:bg-gray-950 dark:hover:bg-gray-900 dark:hover:text-red-500 dark:focus-visible:ring-red-700 dark:border-slate-800"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-gray-950">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">What our customers say</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from the people who love using our platform to build their web applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <p className="text-sm text-gray-400">CEO, Acme Inc</p>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "Vercel has been a game-changer for our team. The\n platform's ease of use and powerful features
                      have\n allowed us to build and deploy our web applications\n faster than ever before."
                    </p>
                    <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                      <img
                        alt="Screenshot"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Jane Smith</h3>
                        <p className="text-sm text-gray-400">Lead Developer, Acme Inc</p>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "Vercel's powerful features and seamless integration with\n our development workflow have been a
                      game-changer for\n our team. We're able to focus on building great\n experiences instead of
                      worrying about infrastructure."
                    </p>
                    <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                      <img
                        alt="Screenshot"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-4">
                  <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Bob Johnson</h3>
                        <p className="text-sm text-gray-400">Product Manager, Acme Inc</p>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "Vercel's platform has been a game-changer for our\n product team. The ability to quickly deploy
                      and iterate\n on our web applications has allowed us to deliver\n features faster than ever
                      before."
                    </p>
                    <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                      <img
                        alt="Screenshot"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Avatar"
                        className="h-10 w-10 rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "40/40",
                          objectFit: "cover",
                        }}
                        width="40"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">Sarah Lee</h3>
                        <p className="text-sm text-gray-400">Designer, Acme Inc</p>
                      </div>
                    </div>
                    <p className="text-gray-400">
                      "Vercel's platform has been a game-changer for our\n design team. The ability to quickly preview
                      and deploy\n our designs has allowed us to collaborate more\n effectively with our development
                      team."
                    </p>
                    <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                      <img
                        alt="Screenshot"
                        className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                        height="310"
                        src="/placeholder.svg"
                        width="550"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2024 Acme Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-red-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-red-500" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
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
