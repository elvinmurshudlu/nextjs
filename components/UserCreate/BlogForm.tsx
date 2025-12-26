'use client'

import {FormBuilder} from "@/components/FormBuilder/FormBuilder";
import {useForm} from "react-hook-form";
import FormInput from "@/components/FormBuilder/components/FormInput/FormInput";
import FormDatePicker from "@/components/FormBuilder/components/Date/FormDatePicker/FormDatePicker";
import FormRangePicker from "@/components/FormBuilder/components/Date/FormRangePicker/FormRangePicker";
import * as zod from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {createBlogAction} from "@/components/UserCreate/userAction";
import {Button} from "antd";
import {useAction} from "next-safe-action/hooks";
import FormSelect from "@/components/FormBuilder/components/FormSelect/FormSelect";

export const validation = zod.object({
    title:zod.string(),
    description:zod.string(),
    stoppedDate:zod.string(),
    beginDate:zod.string(),
    endDate:zod.string(),
    status:zod.string()
})


function BlogForm() {
    const form = useForm({
        resolver:zodResolver(validation)
    })

    const {execute,isPending,} = useAction(createBlogAction,{
        onError:(e)=>{
            console.log(e,'ERROR')
        }
    })

    return (
        <FormBuilder onSubmitAction={execute} form={form} className={'flex flex-col gap-2'}>
            <FormInput fieldName={'title'} label={'Basliq'}/>
            <FormInput fieldName={'description'} label={'Desc'}/>
            <FormDatePicker fieldName={'stoppedDate'} label={'stoppedDate'}/>
            <FormRangePicker fieldName={['beginDate','endDate']} label={'Range'}/>
            <FormSelect fieldName={'status'} label={'Status'}  options={[
                {
                    label:'Active',
                    value:'active'
                },
                {
                    label:'Stopped',
                    value:'stopped'
                }
            ]}/>
            <Button loading={isPending} htmlType={'submit'}>Create</Button>
        </FormBuilder>
    );
}

export default BlogForm;