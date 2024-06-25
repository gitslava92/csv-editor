import { ReactHookFormLabelController } from '@common/types'
import { TextField, TextFieldProps } from '@mui/material'
import { FocusEvent, ForwardedRef, forwardRef } from 'react'
import { Controller } from 'react-hook-form'
import { Error } from '@renderer/components/Atoms/styles'

export type ValidateErrorProps = {
  regexValidation?: RegExp;
};

export type InputProps = ReactHookFormLabelController<TextFieldProps> &
  ValidateErrorProps;

export const FormInput = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      name,
      margin,
      type,
      fullWidth,
      rules,
      control,
      required,
      disabled,
      InputProps,
      placeholder,
      InputLabelProps,
      autoComplete,
      sx,
      regexValidation,
      multiline,
      rows,
      variant,
      size
    } = props

    return (
      <Controller
        name={name}
        rules={rules}
        control={control}
        render={({ field: { value, onBlur, onChange }, fieldState: { error } }) => (
          <TextField
            name={name}
            ref={ref}
            label={label}
            variant={variant}
            required={required}
            type={type}
            margin={margin}
            value={value || ''}
            fullWidth={fullWidth}
            disabled={disabled}
            placeholder={placeholder}
            InputLabelProps={InputLabelProps}
            autoComplete={autoComplete}
            multiline={multiline || InputProps?.multiline}
            rows={rows}
            sx={sx}
            size={size}
            error={!!error?.message}
            helperText={(
              <Error data-testid={`${name}-text-field-error-msg`}>
                {error?.message}
              </Error>
            )}
            onChange={(e) => {
              if (regexValidation) {
                if (
                  e.target.value === '' ||
                  regexValidation.test(e.target.value)
                ) {
                  onChange(e)
                }
              } else {
                onChange(e)
              }
            }}
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              onBlur(e)
            }}
            InputProps={{
              ...InputProps,
              id: name,
              'data-testid': `input-${name}`
            }}
          />
        )}
      />
    )
  }
)
