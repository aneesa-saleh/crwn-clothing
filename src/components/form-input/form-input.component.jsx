import { FormInputLabel, Input, Group } from "./form-input.styles";

function FormInput ({label, ...inputProps}) {
    return (
        <Group>
            <Input {...inputProps} />
            { label && (
                <FormInputLabel shrink={inputProps.value.length}>{label}</FormInputLabel>
            )}
        </Group>       
    )
}

export default FormInput;