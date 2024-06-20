
import dayjs from 'dayjs';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CalendarMonth } from '@mui/icons-material';
import { createRootStore } from '@renderer/components/store/rootStore';

export function AddingControl() {
  const { items: {items}, dateFormat: { format } } = createRootStore();

  const fieldOrder = items.length && Object.keys(items[0]);

  const newItems =
    items.length &&
    items.map((item: any) => {
      const objCopy = { ...item };
      delete objCopy.isUTF;
      return objCopy;
    });

  const fields =
    newItems &&
    Object.entries(newItems[0]).map((item: any) => ({
      [item[0]]: !!(
        dayjs(item[1]).isValid() &&
        item[0] !== 'phone' &&
        item[0] !== 'id' &&
        item[0] !== 'isUTF'
      ),
    }));

  const initialValues =
    items.length &&
    Object.fromEntries(
      Object.entries(items[0]).map(([key, value]) => [
        key,
        key !== 'phone' &&
        key !== 'id' &&
        key !== 'isUTF' &&
        dayjs(value).isValid()
          ? dayjs()
          : key === 'id'
            ? items.length
            : key === 'isUTF' ? 'false' : '',
      ])
    );

  const handleReset = ({ form }: any) => {
    if (fields) {
      fields.forEach((field: any) => {
        form.resetFieldState(Object.keys(field)[0]);
      });
    }

    form.reset(initialValues);
  };

  const onSubmit = (values: any, form: any) => {
    const orderedItems =
      fieldOrder &&
      fieldOrder.reduce(
        (acc, key: string) => ({
          ...acc,
          [key]:
            dayjs(values[key]).isValid() &&
            key !== 'phone' &&
            key !== 'id' &&
            key !== 'isUTF'
              ? dayjs(values[key]).format(format)
              : values[key],
        }),
        {}
      );
    setItems([...items, orderedItems]);
    handleReset({ form });
  };

  const subscription = { submitting: true, pristine: true };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validateForm}
      initialValues={initialValues}
      subscription={subscription}
      render={({ handleSubmit, submitting, submitError, form }) => (
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {items.length &&
              fields &&
              fields.map((field: Record<string, any>) => {
                  const key = Object.entries(field)[0][0];
                  const isDate = Object.entries(field)[0][1];
                  if (isDate) {
                    return (
                      <Field
                        key={key}
                        name={key}
                        render={({ input }) => (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Box>
                              <DateTimePicker
                                {...input}
                                label={key}
                                format={format}
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
                              />
                            </Box>
                          </LocalizationProvider>
                        )}
                      />
                    );
                  } return (
                    <Field
                      key={key}
                      name={key}
                      render={({ input, meta }) => (
                        <TextField
                          {...input}
                          label={key}
                          disabled={key === 'id'}
                          size='small'
                          error={
                            meta.touched &&
                            (meta.error || meta.submitError)
                          }
                          helperText={
                            meta.touched &&
                            (meta.error || meta.submitError)
                          }
                        />
                      )}
                    />
                  );
                }
              )}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              <Button
                onClick={() => handleReset({ form })}
                variant='contained'
              >
                Reset
              </Button>
              <div>{submitError && <div>{submitError}</div>}</div>
              <Button variant='contained'>
                Submit
              </Button>
            </Box>
          </Box>
        </form>
      )}
    />
  );
}

