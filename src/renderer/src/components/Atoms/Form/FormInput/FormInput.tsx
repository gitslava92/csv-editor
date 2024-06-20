import { palette } from '@renderer/common/theme/theme';
import { ReactHookFormLabelController } from '@common/types';
import {
  Error,
  TextField,
} from '@renderer/components/Atoms/Form/FormInput/FormInput.styles';
import { InfoOutlined } from '@mui/icons-material';
import {
  InputAdornment,
  TextFieldProps as MUITextFieldProps,
  Tooltip,
} from '@mui/material';
import React, { FocusEvent, ForwardedRef, forwardRef } from 'react';
import { Controller } from 'react-hook-form';

export type ValidateErrorProps = {
  password?: string;
  mode?: 'landing' | 'main';
  regexValidation?: RegExp;
  onInputBlur?: (e: number) => void;
  isRounding?: boolean;
  isInfoMessage?: boolean;
  tooltip?: string;
  actionsMode?: boolean;
};

export type InputProps = ReactHookFormLabelController<MUITextFieldProps> &
  ValidateErrorProps;

export const FormInput = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      label,
      name,
      size,
      margin,
      type,
      fullWidth,
      helperText,
      rules,
      control,
      required,
      password,
      disabled,
      InputProps,
      mode,
      placeholder,
      InputLabelProps,
      autoComplete,
      sx,
      regexValidation,
      onInputBlur,
      onInputChange,
      isRounding,
      isInfoMessage,
      multiline,
      rows,
      tooltip,
      variant,
      actionsMode,
    } = props;

    return (
      <Controller
        render={({ field: { value, onBlur, onChange } }) => (
          <TextField
            variant={variant}
            required={required}
            error={Boolean(helperText?.length)}
            helperText={
              !actionsMode ? (
                <Error
                  isInfoMessage={isInfoMessage}
                  data-testid={`test-error-msg-${name}`}
                >
                  {helperText}
                </Error>
              ) : null
            }
            label={actionsMode ? null : label}
            actionsMode={actionsMode}
            onChange={(e) => {
              if (onInputChange) {
                onInputChange({ value, name });
              }
              if (regexValidation) {
                if (
                  e.target.value === '' ||
                  regexValidation.test(e.target.value)
                ) {
                  onChange(e);
                }
              } else {
                onChange(e);
              }
            }}
            onBlur={(e: FocusEvent<HTMLInputElement>) => {
              onBlur(e);
              if (onInputBlur) {
                if (isRounding) {
                  onInputBlur(e.target.value || 0);
                } else {
                  onInputBlur({ value, name });
                }
              }
            }}
            margin={margin}
            size={size}
            type={type}
            value={value || ''}
            fullWidth={fullWidth}
            disabled={disabled}
            ref={ref}
            placeholder={placeholder}
            InputLabelProps={InputLabelProps}
            InputProps={{
              ...InputProps,
              'data-testid': `input-${name}`,
              endAdornment: tooltip ? (
                <>
                  {InputProps?.endAdornment}
                  <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                    <Tooltip title={tooltip}>
                      <InfoOutlined color="icons" />
                    </Tooltip>
                  </InputAdornment>
                </>
              ) : (
                InputProps?.endAdornment
              ),
            }}
            autoComplete={autoComplete}
            multiline={multiline || InputProps?.multiline}
            rows={rows}
            mode={mode}
            sx={{
              ...sx,
              input: {
                ...sx?.input,
                color: value ? 'unset' : palette.icons.main,
                '&::placeholder': {
                  opacity: 1,
                },
              },
              textarea: {
                ...sx?.textarea,
                color: value ? 'unset' : palette.icons.main,
                '&::placeholder': {
                  opacity: 1,
                },
              },
            }}
          />
        )}
        rules={
          password
            ? {
                ...rules,
                validate: (value) =>
                  value === password || 'Passwords do not match',
              }
            : { ...rules }
        }
        control={control}
        name={name}
      />
    );
  }
);
