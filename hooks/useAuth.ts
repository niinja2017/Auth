import callApi from "@/helpers/callApi"
import type { Auth } from "@/typescript/type"
import { AxiosRequestConfig } from "axios"
import { useRouter } from "next/router"
import { object, AnySchema } from "yup"


const useFormik = (push: string, url: string, validationValues: Record<string, AnySchema> , instanceValue : Auth) => {
    const router = useRouter()

    const initialValues = instanceValue

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
            }
        }
    }

    const validationSchema = object().shape(validationValues)

    return {
        onSubmit,
        validationSchema,
        initialValues
    }
}

export default useFormik
