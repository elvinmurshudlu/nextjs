'use client'

import {FieldValues, FormProvider, UseFormReturn} from "react-hook-form";
import {ReactNode} from "react";

export function FormBuilder<T extends FieldValues>({form, children,onSubmitAction,className}: { form: UseFormReturn<T>, children: ReactNode,onSubmitAction:(values:T)=>void ,className?:string}) {
    return <FormProvider {...form}>
       <form className={className} onSubmit={form.handleSubmit(onSubmitAction)}>
           {children}
       </form>
    </FormProvider>
}