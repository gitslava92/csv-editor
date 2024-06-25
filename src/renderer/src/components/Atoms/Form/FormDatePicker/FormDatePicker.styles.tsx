import { DateRange as MUIDateRange } from '@mui/icons-material';
import { styled } from '@mui/system';
import {
  DateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
} from '@mui/x-date-pickers';

interface TextFieldProps extends MUIDateTimePickerProps<string> {
  actionsMode?: boolean;
}

export const DateTimePickerField = styled(DateTimePicker)(({ theme }) => ({
  marginTop: 0,
  marginBottom: theme.spacing(3),
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
  },
  '& p': {
    marginTop: 0,
  },
}));

export const DateRange = styled(MUIDateRange)(({ theme }) => ({
  color: theme.palette.primary.main,
}));
