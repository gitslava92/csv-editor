import { DateRange as MUIDateRange } from '@mui/icons-material';
import { styled } from '@mui/system';
import {
  DateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from '@mui/x-date-pickers';

interface TextFieldProps extends MUIDateTimePickerProps<string> {
  actionsMode?: boolean;
}

export const DateTimePickerField = styled(DateTimePicker, {
  shouldForwardProp: (prop) => prop !== 'actionsMode',
})<TextFieldProps>(({ theme, actionsMode }) => ({
  marginTop: 0,
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
  },
  '& p': {
    marginTop: 0,
  },
  ...(actionsMode && {
    '& .MuiInputBase-root': {
      marginTop: '0px !important',
    },
    '& .MuiInput-root:before, & .MuiInput-root:after, & .MuiInputBase-root': {
      border: 'none !important',
    },
    '& .Mui-disabled:before': {
      borderBottomStyle: 'none !important',
    },
  }),
  ...(actionsMode && {
    marginBottom: 0,
    '& .MuiFormControl-root': {
      margin: 0,
    },
  }),
}));

export const Error = styled('span')(({ theme }) => ({
  fontSize: theme.spacing(1.5),
  color: theme.palette.danger.main,
}));

export const DateRange = styled(MUIDateRange)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
