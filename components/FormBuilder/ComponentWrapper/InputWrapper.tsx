import {
    PropsWithChildren,
    useEffect,
    useRef,
    useState,
} from "react"
import clsx from "clsx"
import { ErrorMessage } from "@hookform/error-message"
import { useFormContext } from "react-hook-form"
import { IFormComponent } from "@/components/FormBuilder/type"

function ComponentWrapper({
    className,
    children,
    fieldName,
    label,
    dependOn,
}: PropsWithChildren<IFormComponent>) {
    const [canRender] = useState(true)

    const {
        formState: { errors },
        watch,
        setValue,
    } = useFormContext()
    const initialDependedValue = useRef<string>("")

    const dependedValues = watch(dependOn ?? [])
    const dependedValuesString = dependedValues.toString()

    useEffect(() => {
        if (
            dependedValuesString !==
                initialDependedValue.current &&
            initialDependedValue.current !== ""
        ) {
            setValue(fieldName, null)
        }
        initialDependedValue.current = dependedValuesString
    }, [dependedValuesString, setValue, fieldName])

    if (!canRender) return null

    return (
        <div
            className={clsx(
                className,
                "flex flex-col gap-2 items-start",
            )}
        >
            <label htmlFor={fieldName}>{label}</label>
            {children}
            <ErrorMessage
                errors={errors}
                name={fieldName}
                render={({ message }) => <p>{message}</p>}
            />
        </div>
    )
}

export default ComponentWrapper
