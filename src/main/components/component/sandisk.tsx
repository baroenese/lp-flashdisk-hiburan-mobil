"use client"

/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dxDSysK0f7D
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
import { Input } from "@/main/components/ui/input"
import { Textarea } from "@/main/components/ui/textarea"
import { Button } from "@/main/components/ui/button"
import Image from "next/image"
import dua from "@/main/assets/2.jpg"
import tiga from "@/main/assets/3.jpg"
import satu from "@/main/assets/1.jpg"
import empat from "@/main/assets/4.jpg"
import testi1 from "@/main/assets/testi/1.jpg"
import testi2 from "@/main/assets/testi/2.jpg"
import testi3 from "@/main/assets/testi/3.jpg"
import testi4 from "@/main/assets/testi/4.jpg"
import testi5 from "@/main/assets/testi/5.jpg"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

const FormSchema = z.object({
    name: z.string().min(1).max(100),
    phone: z.string().min(10).max(20),
    message: z.string().min(1).max(255),
})

type FormType = z.infer<typeof FormSchema>

export default function Sandisk() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
    } = useForm<FormType>({
        resolver: zodResolver(FormSchema),
    })

    const createWhatsappLink = (data: FormType) => {
        const link = new URL(`https://wa.me/${data.phone}`)
        link.searchParams.append("text", `Halo ${data.name}\n${data.message}`)
        return link.href
    }

    const submitForm: SubmitHandler<FormType> = (data) => {
        if (typeof window !== "undefined") {
            const link = createWhatsappLink(data)
            window.open(link)
        }
    }

    return (
        <div className="flex flex-col min-h-[100dvh] bg-gray-900 text-white dark:bg-gray-900 dark:text-white">
            <header className="px-4 lg:px-6 h-14 flex items-center fixed inset-0 bg-gradient-to-r from-gray-900 to-black dark:from-gray-900 dark:to-black">
                <Link className="flex items-center justify-center space-x-2" href="#">
                    <Music2Icon className="h-6 w-6 text-red-500" />
                    <span className="lg:leading-tighter text-base font-bold tracking-tighter sm:text-lg md:text-xl text-red-500">Flashdisk Hiburan Mobil</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:text-red-500 transition-colors" href="#produk">
                        Produk
                    </Link>
                    <Link className="text-sm font-medium hover:text-red-500 transition-colors" href="#testimonial">
                        Testimonial
                    </Link>
                    <Link className="text-sm font-medium hover:text-red-500 transition-colors hidden lg:block" href="#kontak">
                        Kontak
                    </Link>
                </nav>
            </header>
            <main className="flex-1" id="home">
                <section className="w-full py-12 pt-24 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-black dark:from-gray-900 dark:to-black">
                    <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
                        <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                            <div className="flex flex-col justify-center ">
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-red-500">
                                    {/* Elevate Your Business with Our Solutions */}
                                    Ribuan Lagu & Video Dalam 1 Flashdisk
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl dark:text-gray-400">
                                    Hadirkan Hiburan Tanpa Batas pada Perjalanan Anda dengan Flashdisk Hiburan Mobil Terbaik!
                                </p>
                                <div className="mt-6">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                        href="#"
                                    >
                                        Pesan Sekarang
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="relative overflow-hidden shadow-md shadow-red-500 rounded-xl p-0">
                                    <Image
                                        src={dua}
                                        alt="Promo"
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover w-full"
                                        height={550}
                                        width={550}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800" id="produk">
                    <div className="container px-4 md:px-6 space-y-12">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">
                                    Produk Kami
                                </h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Dapatkan Flashdisk Hiburan Terbaik untuk Mobil Anda dan nikmati perjalanan <span className="inline-block 2xl:hidden">yang lebih</span> menyenangkan.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid items-center justify-items-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                            <div className="grid gap-1">
                                <Image
                                    src={satu}
                                    alt="Produk 1"
                                    height={200}
                                    width={300}
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                                />
                                <h3 className="text-lg font-bold text-red-500">Flashdisk Hiburan Mobil - 32GB</h3>
                                <p className="text-sm text-gray-300 dark:text-gray-400">
                                    2000+ Lagu dan video dalam sebuah flashdisk.
                                </p>
                                <div className="flex flex-col lg:flex-row justify-between">
                                    <div>Rp160.000</div>
                                    <div>
                                        <Link
                                            className="inline-flex h-8 w-full items-center justify-center rounded-md bg-red-500 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                            href="#"
                                        >
                                            Pesan Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="grid gap-1">
                                <Image
                                    src={empat}
                                    alt="Produk 1"
                                    height={200}
                                    width={300}
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                                />
                                <h3 className="text-lg font-bold text-red-500">Flashdisk Hiburan Mobil - 64GB</h3>
                                <p className="text-sm text-gray-300 dark:text-gray-400">
                                    3000+ Lagu dan video dalam sebuah flashdisk.
                                </p>
                                <div className="flex flex-col lg:flex-row justify-between">
                                    <div>Rp185.000</div>
                                    <div>
                                        <Link
                                            className="inline-flex h-8 w-full items-center justify-center rounded-md bg-red-500 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                            href="#"
                                        >
                                            Pesan Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-900" id="testimonial">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-white">Testimonial</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">Apa Yang Pelanggan Kami Katakan</h2>
                                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    {/* Hear from the people who love using our platform to build their web applications. */}
                                    Dengarkan dari orang-orang yang senang menggunakan produk flashdisk hiburan mobil kami karena sangat <span className="italic">worth it</span> bagi mereka.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
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
                                                <h3 className="text-lg font-semibold">@**9</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            "Mantap kualitas video dan lagu mp3nya gak pecah di headunit ,thanksq gan moga makin laris lapaknya."
                                        </p>
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi1}
                                                alt="@**9"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
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
                                                <h3 className="text-lg font-semibold">A**h S**h</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            "Paket flasdisk audio mobil sdh sy terima real pic amanah pengiriman sangat cepat."
                                        </p>
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi2}
                                                alt="A**h S**h"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
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
                                                <h3 className="text-lg font-semibold">P**i  A** D**i</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            "Mantap sekali ayok buruan order disini."
                                        </p>
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi5}
                                                alt="D**y P**a"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
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
                                                <h3 className="text-lg font-semibold">D** O**H</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            "Produknya sampai dngn TOP,,,, brg berpungsi Rekomendasi sudah produknya. Terimakasih."
                                        </p>
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi3}
                                                alt="D** O**H"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
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
                                                <h3 className="text-lg font-semibold">D**y P**a</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            "Barang ori alhmdllh brfungsi dgn baik lagu dn videonya lngkap sukses sllu but tokonya"
                                        </p>
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi4}
                                                alt="D**y P**a"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-gray-50 dark:bg-red-400 dark:text-gray-900">
                                    Berbagai Fitur Utama
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter dark:text-gray-900 sm:text-5xl text-red-500">
                                    Membebaskan Potensi Musikmu
                                </h2>
                                <p className="max-w-[900px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Flashdisk musik kami menawarkan penyimpanan yang tak tertandingi, tahan lama untuk menjaga musik Anda tetap aman dan mudah diakses.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <Image
                                src={tiga}
                                alt="Quality"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height={310}
                                width={550}
                            />
                            <div className="flex flex-col justify-center space-y-4">
                                <ul className="grid gap-6">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold text-white dark:text-gray-50">Penyimpanan Berkapasitas Tinggi</h3>
                                            <p className="text-gray-300 dark:text-gray-400">
                                                Simpan ribuan lagu favorit Anda dalam flashdisk musik berkapasitas tinggi.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold text-white dark:text-gray-50">Bergaransi Resmi</h3>
                                            <p className="text-gray-300 dark:text-gray-400">
                                                Semua produk yang kamu jual sudah bergaransi resmi.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-bold text-white dark:text-gray-50">Servis Terjamin</h3>
                                            <p className="text-gray-300 dark:text-gray-400">
                                                Jika ada kendala terhadap barang, kami bersedia membantu penuh proses klaim. Selama garansi masih berlaku.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <Image
                            src={dua}
                            alt="Promo 2024"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain order-last lg:order-first"
                            height={400}
                            width={400}
                        />
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg dark:bg-red-100 px-3 py-1 text-sm bg-red-500">Miliki Segera</div>
                            <h2 className="text-red-500 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Flashdisk Hiburan Mobil
                            </h2>
                            <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Flashdisk musik kami menawarkan kapasitas penyimpanan yang besar, dan daya tahan kuat. Tingkatkan pengalaman musik Anda dengan teknologi canggih kami.
                            </p>
                            <ul className="grid gap-2">
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                                    Format Video Mp4/Divx/MPG <span className="text-xs">{`(Menyesuaikan dengan Head Unit)`}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                                    Bisa dijalankandi TV, Laptop, dll
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                                    Flashdisk Original 100&#37;
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800" id="kontak">
                    <div className="container px-4 md:px-6 space-y-12">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">Hubungi Kami</h2>
                                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Tim sales kami siap menjawab pertanyaan dan memberikan solusi yang paling tepat untuk Anda.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto w-full max-w-sm space-y-2">
                            <form
                                className="flex flex-col space-y-4"
                                onSubmit={handleSubmit(submitForm)}
                            >
                                <Input {...register("name")} className="max-w-lg flex-1 text-black" placeholder="Name" type="text" />
                                <Input {...register("phone")} className="max-w-lg flex-1 text-black" placeholder="Nomor WhatsApp +62xxxxxxx" type="text" />
                                <Textarea {...register("message")} className="max-w-lg flex-1 text-black" placeholder="Halo Admin😎" />
                                <Button
                                    className="bg-red-500 hover:bg-red-600 text-gray-50"
                                    type="submit"
                                >
                                    Kirim
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 dark:border-gray-800">
                <p className="text-xs text-gray-400 dark:text-gray-400">&copy; {(new Date()).getFullYear().toString()} Flashdisk Musik Mobil.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:text-red-500 transition-colors dark:hover:text-red-500" href="#produk">
                        Produk
                    </Link>
                    <Link className="text-xs hover:text-red-500 transition-colors dark:hover:text-red-500" href="#testimonial">
                        Testimonial
                    </Link>
                    <Link className="text-xs hover:text-red-500 transition-colors dark:hover:text-red-500" href="#home">
                        Home
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function Music2Icon(props: any) {
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
            <circle cx="8" cy="18" r="4" />
            <path d="M12 18V2l7 4" />
        </svg>
    )
}

function CheckIcon(props: any) {
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
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}