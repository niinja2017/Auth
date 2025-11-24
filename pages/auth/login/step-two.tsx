import InputItem from "@/components/inputItem"
import useAuth from "@/hooks/useAuth"
import { useAppSelector } from "@/hooks/useRedux"
import { Form, Formik } from "formik"
import Router from "next/router"
import { useEffect } from "react"
import { string } from "yup"

const StepTwo = () => {
    const token = useAppSelector(state => state.auth.phoneVerifyToken)

    const LoginFormik = useAuth( /* push */ '/', /* url */ '/auth/login/verify-phone', /* validation */ {
        code: string().required().matches(/^[0-9]+$/).length(6)
    },/* initialValues */ { code: '', token })

    useEffect(() => {
        Router.beforePopState(({ url }) => {
            if (url === '/auth/login/step-two') {
                Router.push('/auth/login')
                return false
            }
            return true
        })

        if (!token) {
            Router.push('/auth/login')
        }
    }, [token])

    const InputList = [
        { label: 'کد :', name: 'code', placeholder: 'لطفا کد خود را وارد کنید', type: 'text' },
    ]

    return (
        <div className="flex justify-center items-center h-screen bg-linear-to-tr from-[#61D8DE] via-[#7774E5] to-[#E839F6]">
            <Formik {...LoginFormik}>
                <Form className="bg-white p-10 w-11/12 sm:w-8/12 md:w-1/2 xl:w-1/3 2xl:w-1/4 rounded-xl space-y-5">
                    <h1 className="font-bold text-3xl text-center">کد ورود</h1>

                    {InputList.map((item, index) => <InputItem key={index} {...item} />)}

                    <div className="flex justify-center mb-8">
                        <button type="submit" className="cursor-pointer py-3 w-full text-white font-bold rounded-4xl bg-linear-to-r from-[#61D8DE] via-[#7774E5] to-[#E839F6]">ورود</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default StepTwo
