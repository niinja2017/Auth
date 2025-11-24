import InputItem from "@/components/inputItem"
import useAuth from "@/hooks/useAuth"
import { Form, Formik } from "formik"
import { useCookies } from "react-cookie"
import { string } from "yup"




const Signing = () => {
    const [cookies, setCookies] = useCookies(['shopy-token'])
    
    const LoginFormik = useAuth('/', '/auth/login', {
        email: string().required().email(),
        password: string().required().min(8)
    }, setCookies)

    const InputList = [
        { label: 'ایمیل :', name: 'email', placeholder: 'لطفا ایمیل خود را وارد کنید', type: 'email' },
        { label: 'پسورد :', name: 'password', placeholder: 'لطفا پسورد خود را وارد کنید', type: 'password' }
    ]


    return (
        <div className="flex justify-center items-center h-screen bg-linear-to-tr from-[#61D8DE] via-[#7774E5] to-[#E839F6]">
            <Formik {...LoginFormik}>
                <Form className="bg-white p-10 w-11/12 sm:w-8/12 md:w-1/2 xl:w-1/3 2xl:w-1/4 rounded-xl space-y-5">
                    <h1 className="font-bold text-3xl text-center">ورود</h1>

                    {InputList.map((item, index) => <InputItem key={index} {...item} />)}

                    <div className="flex justify-center mb-8">
                        <button type="submit" className="cursor-pointer py-3 w-full text-white font-bold rounded-4xl bg-linear-to-r from-[#61D8DE] via-[#7774E5] to-[#E839F6]">ورود</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default Signing
