import { IFormComponent } from "@/components/FormBuilder/type"
import { Input, InputProps } from "antd"
import ComponentWrapper from "@/components/FormBuilder/ComponentWrapper/InputWrapper"
import { Controller, useFormContext } from "react-hook-form"

type FormInputProps = IFormComponent & InputProps

function FormInput({
    className,
    label,
    fieldName,
    dependOn,
    ...inputProps
}: FormInputProps) {
    const { control } = useFormContext()

    return (
        <ComponentWrapper
            dependOn={dependOn}
            label={label}
            fieldName={fieldName}
            className={className}
        >
            <Controller
                render={({ field }) => {
                    return (
                        <Input
                            id={fieldName}
                            {...field}
                            {...inputProps}
                        />
                    )
                }}
                name={fieldName}
                control={control}
            />
        </ComponentWrapper>
    )
}

export default FormInput
