import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Vazirmatn } from "next/font/google";
import { CookiesProvider } from "react-cookie";
import { setLocale } from "yup";

const vazirmatn = Vazirmatn({
    subsets: ["latin"]
})

setLocale({
    mixed: {
        required: "این فیلد الزامی است",
    },
    string: {
        email: "لطفا ایمیل معتبر وارد کنید",
        min: ({ min }) => `حداقل باید ${min} کاراکتر باشد`,
    }
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${vazirmatn.className}`}>
            <CookiesProvider>
                <Component {...pageProps} />
            </CookiesProvider>
        </div>
    )
}
