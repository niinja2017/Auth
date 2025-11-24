import { store } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Vazirmatn } from "next/font/google";
import { Provider } from "react-redux";
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
        matches : 'عدد مورد نظر معتبر نیست',
        length: ({length}) => `عدد مورد نظر باید دارای ${length} رقم باشد `
    }
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={`${vazirmatn.className}`}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </div>
    )
}
