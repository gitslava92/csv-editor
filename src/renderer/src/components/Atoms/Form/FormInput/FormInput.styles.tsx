import {
  TextField as MUITextField,
  TextFieldProps as MUITextFieldProps,
} from '@mui/material';
import { styled } from '@mui/system';

interface TextFieldProps extends MUITextFieldProps {
  mode?: 'landing' | 'main';
  margin: 'dense' | 'none' | 'normal';
  actionsMode?: boolean;
  multiline: boolean;
}

export const TextField = styled(MUITextField, {
  shouldForwardProp: (prop) =>
    prop !== 'mode' &&
    prop !== 'actionsMode' &&
    prop !== 'margin' &&
    prop !== 'multiline',
})<TextFieldProps>(
  ({ theme, mode = 'landing', actionsMode, margin, multiline }) => ({
    marginTop: 0,
    marginBottom: theme.spacing(3),
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(mode === 'landing' ? 2 : 1),
    },
    '& p': {
      marginTop: 0,
    },
    '& .MuiInputLabel-asterisk': {
      color: theme.palette.primary.main,
    },
    ...(multiline && {
      '& .MuiInputBase-root': {
        alignItems: 'unset !important',
      },
      '& .MuiInputAdornment-root': {
        marginTop: theme.spacing(1),
      },
    }),
    ...(actionsMode && {
      '& .MuiInput-root:before, & .MuiInput-root:after, & .MuiInputBase-root': {
        border: 'none !important',
      },
      '& .Mui-disabled:before': {
        borderBottomStyle: 'none !important',
      },
    }),
    ...((actionsMode || margin) && {
      marginBottom: 0,
      '& .MuiFormControl-root': {
        margin: 0,
      },
    }),
  })
);

export const Error = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isInfoMessage',
})<{ isInfoMessage?: boolean }>(({ theme, isInfoMessage }) => ({
  // position: 'absolute',
  // left: '0',
  fontSize: theme.spacing(1.5),
  color: isInfoMessage ? theme.palette.danger.light : theme.palette.danger.main,
}));
