"use client"

import { Button } from "@/main/components/ui/button";
import { Input } from "@/main/components/ui/input";
import { Textarea } from "@/main/components/ui/textarea";
import { CONTACT_WHATSAPP } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
    name: z.string().min(1).max(100),
    phone: z.string().optional(),
    message: z.string().min(1).max(255),
})

type FormType = z.infer<typeof FormSchema>

export default function KontakKami() {
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FormType>({
        resolver: zodResolver(FormSchema),
    })

    const createWhatsappLink = (data: FormType) => {
        const link = new URL(`https://wa.me/${CONTACT_WHATSAPP}`)
        link.searchParams.append("text", `${data.message}\n\n${data.name}`)
        return link.href
    }

    const submitForm: SubmitHandler<FormType> = (data) => {
        if (typeof window !== "undefined") {
            const link = createWhatsappLink(data)
            window.open(link)
        }
    }
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 dark:bg-gray-800" id="kontak">
            <div className="w-full px-4 md:px-6 space-y-12">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-red-500">Hubungi Kami</h2>
                        <p className="text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Tim sales kami siap menjawab pertanyaan dan memberikan solusi yang paling tepat untuk Anda.
                        </p>
                    </div>
                </div>
                <div className="mx-auto w-full space-y-2">
                    <form
                        className="flex flex-col space-y-4"
                        onSubmit={handleSubmit(submitForm)}
                    >
                        <div className="flex-1">
                            <Input {...register("name")} className="text-black" placeholder="Nama Lengkap" type="text" />
                            {errors.name ? (
                                <p className="text-xs text-red-500 mt-1">Nama tidak boleh kosong</p>
                            ) : null}
                        </div>
                        <Input {...register("phone")} className="flex-1 text-black" placeholder="Nomor WhatsApp +62xxxxxxx" type="hidden" />
                        <div className="flex-1">
                            <Textarea {...register("message")} className="text-black" placeholder="Halo Admin😎" />
                            {errors.message ? (
                                <p className="text-xs text-red-500 mt-1">Pesan tidak boleh kosong</p>
                            ) : null}
                        </div>
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
    )
}