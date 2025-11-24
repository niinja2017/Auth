import callApi from "@/helpers/callApi"
import { updatePhoneVerifyToken } from "@/store/slice/auth"
import type { Auth } from "@/typescript/type"
import { AxiosRequestConfig } from "axios"
import { useRouter } from "next/router"
import { object, AnySchema } from "yup"
import { useAppDispatch } from "./useRedux"


const useFormik = (push: string, url: string, validationValues: Record<string, AnySchema>, instanceValue: Auth) => {
    const router = useRouter()
    const dispatch = useAppDispatch()

    const setPhoneVerifyToken = (token: string) => {
        dispatch(updatePhoneVerifyToken(token))
    }

    const initialValues = instanceValue

    const onSubmit = async (values: AxiosRequestConfig<Auth>) => {


        // SignUp
        if (url == '/auth/register') {
            const res = await callApi().post(url, values)
            console.log(res)
            if (res.status == 201) {
                // router.push(push)
            }
        }
        // Login
        else if (url == '/auth/login') {
            const res = await callApi().post(url, values)
            setPhoneVerifyToken(res?.data?.token)
            if (res.status == 200) {
                router.push(push)
            }
        }

        // Code Phone Verify
        else {
            const res = await callApi().post(url, values)
            console.log(res)
            if (res.status == 200) {
                router.push(push)
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
