import Link from "next/link"
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
import testi6 from "@/main/assets/testi/6.jpg"
import dynamic from "next/dynamic"
import { ORDER_LINK } from "@/utils"

const KontakKami = dynamic(() => import("./_internal/components/kontak-kami"), { ssr: false })

function CheckIcon(props: { className: string }) {
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

export default function Page() {
    return (
        <>
            <header className="fixed inset-0 z-50 h-14 bg-gradient-to-r from-gray-900 to-black dark:from-gray-900 dark:to-black">
                <div className="px-4 lg:px-6 flex items-center justify-between h-full">
                    <Link className="flex items-center justify-center space-x-2" href="#">
                        <svg
                            className="h-6 w-6 text-red-500"
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
                        <span className="lg:leading-tighter text-base font-bold tracking-tighter sm:text-lg md:text-xl text-red-500">Flashdisk Hiburan Mobil</span>
                    </Link>
                    <nav className="flex gap-4 sm:gap-6 text-gray-50">
                        <Link className="text-sm font-medium hover:text-red-500 transition-colors" href="#produk">
                            Produk
                        </Link>
                        <Link className="text-sm font-medium hover:text-red-500 transition-colors" href="#testimonial">
                            Testimonial
                        </Link>
                        <Link className="text-sm font-medium hover:text-red-500 transition-colors hidden lg:inline-block" href="#kontak">
                            Kontak
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="w-full bg-red-500">
                <section className="w-full py-12 pt-24 md:py-24 lg:py-32 bg-gradient-to-r from-gray-900 to-black dark:from-gray-900 dark:to-black" id="home">
                    <div className="w-full px-4 md:px-6 space-y-6 md:space-y-10">
                        <div className="grid mx-auto max-w-7xl gap-4 px-4 sm:px-6 lg:px-10 lg:grid-cols-2 lg:gap-16">
                            <div className="flex flex-col justify-center ">
                                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-red-500">
                                    {/* Elevate Your Business with Our Solutions */}
                                    Ribuan Lagu & Video Dalam 1 Flashdisk
                                </h1>
                                <p className="text-gray-300 md:text-xl dark:text-gray-400">
                                    Hadirkan Hiburan Tanpa Batas pada Perjalanan Anda dengan Flashdisk Hiburan Mobil Terbaik!
                                </p>
                                <div className="mt-6">
                                    <Link
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                        href={ORDER_LINK}
                                        target="_blank"
                                    >
                                        Pesan Sekarang
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="relative h-full w-full overflow-hidden shadow-md shadow-red-500 rounded-xl bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                    <Image
                                        src={dua}
                                        alt="Promo"
                                        className="h-full w-full object-cover object-center"
                                        height={550}
                                        width={550}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800" id="produk">
                    <div className="w-full px-4 md:px-6 space-y-12">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">
                                    Produk Kami
                                </h2>
                                <p className="max-w-7xl text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
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
                                    Flashdisk Original 100&#37;, format Video Mp4/Divx/MPG {`(Menyesuaikan dengan Head Unit)`}, dan bisa dijalankan di TV, Laptop, dll.
                                </p>
                                <div className="flex flex-col lg:flex-row justify-between sm:items-center">
                                    <div className="text-base sm:text-lg tracking-wide font-semibold text-white leading-8">Rp160.000</div>
                                    <div>
                                        <Link
                                            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-red-500 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                            href={ORDER_LINK}
                                            target="_blank"
                                        >
                                            Beli Sekarang
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
                                    Flashdisk Original 100&#37;, format Video Mp4/Divx/MPG {`(Menyesuaikan dengan Head Unit)`}, dan bisa dijalankan di TV, Laptop, dll.
                                </p>
                                <div className="flex flex-col lg:flex-row justify-between sm:items-center">
                                    <div className="text-base sm:text-lg tracking-wide font-semibold text-white leading-8">Rp185.000</div>
                                    <div>
                                        <Link
                                            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-red-500 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                            href={ORDER_LINK}
                                            target="_blank"
                                        >
                                            Beli Sekarang
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 dark:bg-gray-900" id="testimonial">
                    <div className="w-full px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-white">Testimonial</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">Apa Yang Pelanggan Kami Katakan</h2>
                                <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    {/* Hear from the people who love using our platform to build their web applications. */}
                                    Dengarkan dari orang-orang yang senang menggunakan produk flashdisk hiburan mobil kami karena sangat <span className="italic">worth it</span> bagi mereka.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="grid gap-4">
                                    <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi1}
                                                alt="Testimoni pelanggan flashdisk hiburan mobil"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <picture>
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
                                            </picture>
                                            <div>
                                                <h3 className="text-lg font-semibold">A**h S**h</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            {`"Paket flasdisk audio mobil sdh sy terima real pic amanah pengiriman sangat cepat."`}
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
                                            <picture>
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
                                            </picture>
                                            <div>
                                                <h3 className="text-lg font-semibold">P**i  A** D**i</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            {`"Mantap sekali ayok buruan order disini."`}
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
                                        <div className="mt-2 rounded-lg border border-slate-200 border-gray-800 dark:border-slate-800">
                                            <Image
                                                src={testi6}
                                                alt="Testi pelanggan flashdisk hiburan mobil"
                                                height={310}
                                                width={550}
                                                className="mx-auto aspect-video overflow-hidden rounded-t-lg object-cover object-center sm:w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-start gap-2 rounded-lg bg-gray-900 p-4 shadow-lg">
                                        <div className="flex items-center gap-2">
                                            <picture>
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
                                            </picture>
                                            <div>
                                                <h3 className="text-lg font-semibold">D** O**H</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            {`"Produknya sampai dngn TOP,,,, brg berpungsi Rekomendasi sudah produknya. Terimakasih."`}
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
                                            <picture>
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
                                            </picture>
                                            <div>
                                                <h3 className="text-lg font-semibold">D**y P**a</h3>
                                                <p className="text-sm text-gray-400">Flashdisk Hiburan Mobil</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-400">
                                            {`"Barang ori alhmdllh brfungsi dgn baik lagu dn videonya lngkap sukses sllu but tokonya"`}
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
                    <div className="w-full px-4 md:px-6">
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
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full order-first lg:order-last"
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
                <section className="w-full py-12 md:py-24 lg:py-32  bg-gray-900 dark:bg-gray-800">
                    <div className="w-full sm:max-w-7xl mx-auto grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <Image
                            src={dua}
                            alt="Promo 2024"
                            className="mx-auto aspect-square overflow-hidden rounded-xl object-contain order-last lg:order-first"
                            height={400}
                            width={400}
                        />
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg dark:bg-red-100 px-3 py-1 text-sm bg-red-500 sr-only">Miliki Segera</div>
                            <h2 className="text-red-500 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Flashdisk Hiburan Mobil
                            </h2>
                            <p className="max-w-[600px] text-gray-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Flashdisk musik kami menawarkan kapasitas penyimpanan yang besar, dan daya tahan kuat. Tingkatkan pengalaman musik Anda dengan teknologi canggih kami.
                            </p>
                            <ul className="grid gap-2 text-white">
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                                    Format Video Mp4/Divx/MPG <span className="text-xs">{`(Menyesuaikan dengan Head Unit)`}</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                                    Bisa dijalankan di TV, Laptop, dll
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckIcon className="h-4 w-4 text-red-500 dark:text-red-400" />
                                    Flashdisk Original 100&#37;
                                </li>
                            </ul>
                            <div className="mt-6">
                                <Link
                                    className="inline-flex h-10  w-full sm:w-auto items-center justify-center rounded-md bg-red-500 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-red-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-red-400 dark:text-gray-900 dark:hover:bg-red-500 dark:focus-visible:ring-red-600"
                                    href={ORDER_LINK}
                                    target="_blank"
                                >
                                    Pesan Sekarang
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                
                <KontakKami />
            </main>

            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 dark:border-gray-800 bg-gray-900 dark:bg-gray-900 text-gray-50">
                <p className="text-xs text-gray-400 dark:text-gray-400">&copy; {(new Date()).getFullYear().toString()} Flashdisk Hiburan Mobil.</p>
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
        </>
    )
}