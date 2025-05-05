import { inputStyle } from "@/constants"
import { TextField, TextFieldProps } from "@mui/material"

const InputForm = ({ label, type, value, error, helperText, onChange, ...props }: TextFieldProps) => {
    return (
        <TextField
            label={label}
            variant="outlined"
            fullWidth
            type={type}
            value={value}
            onChange={onChange}
            sx={inputStyle}
            error={!!error}
            helperText={helperText}
            {...props}
        />
    );
};

export default InputForm