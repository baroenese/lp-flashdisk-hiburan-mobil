"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
import * as pixel from "@/main/lib/meta-pixel";

export default function MetaPixel() {
    const [loaded, setLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (!loaded) return;

        pixel.pageview();
    }, [pathname, loaded]);

    return (
        <>
            <Script
                id="fb-pixel"
                src="/vendors/meta/pixel.js"
                strategy="afterInteractive"
                onLoad={() => setLoaded(true)}
                data-pixel-id={pixel.FB_PIXEL_ID}
            />

            <div
                className="hidden"
                dangerouslySetInnerHTML={{
                    __html: `<noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${pixel.FB_PIXEL_ID}&ev=PageView&noscript=1" /></noscript>`,
                }}
            ></div>
        </>
    );
};
