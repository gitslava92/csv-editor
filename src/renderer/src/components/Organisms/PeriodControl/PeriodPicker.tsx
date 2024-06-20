import dayjs, { Dayjs } from 'dayjs';
import { Box, InputAdornment, Typography } from '@mui/material';
import {
  DateTimePicker,
} from '@mui/x-date-pickers';
import { CalendarMonth } from '@mui/icons-material';

type Props = {
  fromValue: any;
  setFromValue: Function;
  toValue: any;
  setToValue: Function;
  error: string;
  format: string;
};

export function PeriodPicker({
  fromValue,
  setFromValue,
  toValue,
  setToValue,
  error,
  format,
}: Props) {
  const handleChangeFromValue = (newValue: Dayjs | null) => {
    setFromValue(newValue);
  };

  const handleChangeToValue = (newValue: Dayjs | null) => {
    setToValue(newValue);
  };

  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center',
    },
    periodBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: { xs: 'column', md: 'row' },
      gap: { xs: 2, md: 1 },
    },
    pickerBox: {
      position: 'relative',
    },
    periodPickerFrom: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: { xs: 'column', md: 'row' },
    },
    periodPickerTo: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: { xs: 'column', md: 'row' },
    },
    helperText: {
      color: 'red',
      fontSize: '0.7rem',
      textAlign: 'center',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: '-16px',
    },
  };

  return (
    <Box sx={styles.wrapper}>
      <Box component='div'>
        <Box sx={styles.periodBox}>
            <Box sx={styles.pickerBox}>
              <DateTimePicker
                label='Choose the initial period'
                format={format}
                value={dayjs(fromValue, format)}
                onChange={handleChangeFromValue}
                slotProps={{
                  textField: {
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <CalendarMonth />
                        </InputAdornment>
                      ),
                    },
                    size: 'small',
                  },
                }}
                sx={styles.periodPickerFrom}
              />
            </Box>
          <Typography
            variant='body1'
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            -
          </Typography>
            <Box sx={styles.pickerBox}>
              <DateTimePicker
                label='Choose the end period'
                format={format}
                value={dayjs(toValue)}
                onChange={handleChangeToValue}
                slotProps={{
                  textField: {
                    InputProps: {
                      endAdornment: (
                        <InputAdornment position='end'>
                          <CalendarMonth />
                        </InputAdornment>
                      ),
                    },
                    size: 'small',
                  },
                }}
                sx={styles.periodPickerTo}
              />
              <Typography sx={styles.helperText}>{error}</Typography>
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
