import { ReactHookFormLabelController } from '@renderer/components/Atoms/Form/types';
import {
  DateRange,
  DateTimePickerField,
  Error,
} from '@renderer/components/Atoms/Form/FormDatePicker/FormDatePicker.styles';
import { TextFieldProps as MUITextFieldProps } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/en-gb';
import { Controller } from 'react-hook-form';

interface ValidateErrorProps {
  actionsMode?: boolean;
}

export type InputProps = ReactHookFormLabelController<MUITextFieldProps> &
  ValidateErrorProps;

export const FormDatePicker = (props: InputProps) => {
  const {
    label,
    name,
    fullWidth,
    helperText,
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
    actionsMode,
    minDate,
  } = props;

  return (
    <Controller
      render={({ field: { onChange, onBlur } }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DateTimePickerField
            actionsMode={actionsMode}
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
            closeOnSelect={Boolean(closeOnSelect)}
            onChange={(newValue) => {
              onChange(newValue);
            }}
            error={Boolean(helperText?.length)}
            slots={{
              openPickerIcon: DateRange,
            }}
            slotProps={{
              textField: {
                ...props,
                fullWidth,
                label: actionsMode ? null : label,
                error: actionsMode ? false : !!helperText,
                placeholder,
                sx,
                onBlur: (e) => onBlur(e),
                onChange: (e) => onChange(e),
                helperText: actionsMode ? null : (
                  <Error data-testid={`test-error-msg-${name}`}>
                    {helperText}
                  </Error>
                ),
              },
            }}
          />
        </LocalizationProvider>
      )}
      rules={rules}
      control={control}
      name={name}
    />
  );
};
