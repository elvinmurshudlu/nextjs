"use client"

import { useForm } from "react-hook-form"
import { FormBuilder } from "@/components/FormBuilder/FormBuilder"

import FormInput from "@/components/FormBuilder/components/FormInput/FormInput"
import {
    loginAction,
    testAction,
} from "@/components/UserCreate/userAction"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginValidationSchema } from "@/components/UserCreate/schema"
import { useAction } from "next-safe-action/hooks"
import { Button } from "antd"
import FormDatePicker from "@/components/FormBuilder/components/Date/FormDatePicker/FormDatePicker";

function LoginForm() {
    const form = useForm({
        resolver: zodResolver(loginValidationSchema),
    })

    const { execute, isPending, result, hasErrored } =
        useAction(loginAction)

    return (
        <FormBuilder
            className={"flex  w-2xl flex-col gap-2"}
            form={form}
            onSubmitAction={execute}
        >
            <FormInput
                label={"Email"}
                fieldName={"email"}
            />
            <FormInput
                label={"Şifrə"}
                fieldName={"password"}
            />

            <FormDatePicker fieldName={'label'} label={'Test'}/>

            {hasErrored && (
                <p>
                    İstifadəçi şifrəsi və ya ünvanı səhvdir
                </p>
            )}
            <Button htmlType={"submit"} loading={isPending}>
                Daxil ol
            </Button>
        </FormBuilder>
    )
}

export default LoginForm
