import callApi from "@/helpers/callApi"
import type { Auth } from "@/typescript/type"
import { AxiosRequestConfig } from "axios"
import { useRouter } from "next/router"
import { object, AnySchema } from "yup"


const useFormik = (push: string, url: string, values: Record<string, AnySchema> , setCookies?: any) => {
    const router = useRouter()

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const onSubmit = async (values: AxiosRequestConfig<Auth>) => {


        // SignUp
        if (url == '/auth/register') {
            const res = await callApi().post(url, values)
            if (res.status == 201) {
                router.push('/auth/login')
            }
        }
        // Login
        else {
            const res = await callApi().post(url, values)
            if (res.status == 200) {
                router.push('/')
                setCookies('shopy-token' , res.data.token , {
                    'maxAge' : 3600 * 24 * 30,
                    'domain' : 'localhost',
                    'path' : '/'
                })
            }
        }
    }

    const validationSchema = object().shape(values)

    return {
        onSubmit,
        validationSchema,
        initialValues
    }
}

export default useFormik
