import { ReactHookFormLabelController } from '@renderer/components/Atoms/Form/types'
import { DateRange, DateTimePickerField } from '@renderer/components/Atoms/Form/FormDatePicker/FormDatePicker.styles'
import { TextFieldProps as MUITextFieldProps } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/en-gb'
import { Controller } from 'react-hook-form'
import { Error } from '@renderer/components/Atoms/styles'

export type InputProps = ReactHookFormLabelController<MUITextFieldProps>;

export const FormDatePicker = (props: InputProps) => {
  const {
    label,
    name,
    fullWidth,
    rules,
    defaultValue,
    disablePast,
    disableFuture,
    shouldDisableDate,
    maxDate,
    closeOnSelect,
    control,
    sx,
    disabled,
    readOnly,
    views,
    autoComplete,
    placeholder,
    minDate
  } = props

  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field: { onChange, onBlur }, fieldState: { error } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DateTimePickerField
            autoComplete={autoComplete}
            disabled={disabled}
            readOnly={readOnly}
            defaultValue={defaultValue}
            disablePast={disablePast}
            disableFuture={disableFuture}
            shouldDisableDate={shouldDisableDate}
            maxDate={maxDate}
            minDate={minDate}
            views={views}
            closeOnSelect={!!closeOnSelect}
            onChange={(newValue) => {
              onChange(newValue)
            }}
            error={!!error?.message}
            slots={{
              openPickerIcon: DateRange
            }}
            slotProps={{
              textField: {
                ...props,
                fullWidth,
                label: actionsMode ? null : label,
                error: actionsMode ? false : !!helperText,
                placeholder,
                sx,
                onBlur,
                onChange,
                helperText: <Error data-testid={`${name}-date-time-picker-error`}>
                  {error?.message}
                </Error>
              }
            }}
          />
        </LocalizationProvider>
      )}
    />
  )
}
