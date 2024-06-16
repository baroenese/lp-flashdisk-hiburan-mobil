import dynamic from "next/dynamic";
import Link from "next/link";

const Sandisk = dynamic(() => import("@/main/components/component/sandisk"), { ssr: false })

export default function Home() {
    return (
        <>
            <header className="fixed inset-0 h-14 bg-gradient-to-r from-gray-900 to-black dark:from-gray-900 dark:to-black">
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
                        <Link className="text-sm font-medium hover:text-red-500 transition-colors hidden lg:inline-block" href="#testimonial">
                            Testimonial
                        </Link>
                        <Link className="text-sm font-medium hover:text-red-500 transition-colors hidden lg:inline-block" href="#kontak">
                            Kontak
                        </Link>
                    </nav>
                </div>
            </header>

            <Sandisk />
        </>
    )
}
