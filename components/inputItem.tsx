import { ErrorMessage, Field } from "formik"

interface Props {
    label : string,
    name : string ,
    placeholder : string,
    type?: string
}

const InputItem = ({ label, name , placeholder , type = 'text' } : Props) => {
    return (
        <div className="flex flex-col mb-8 mt-10">
            <label htmlFor={name} className="mb-2">{label}</label>
            <Field className="border rounded border-gray-300 px-3 py-2 outline-0" name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name} component='span' className="text-red-500" />
        </div>
    )
}


export default InputItem
