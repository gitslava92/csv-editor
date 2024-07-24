import dayjs from 'dayjs'
import { Button, Box } from '@mui/material'
import { rootStore } from '../../store/rootStore'
import { useForm } from 'react-hook-form'
import { FormDatePicker } from '../../Atoms/Form/FormDatePicker/FormDatePicker'
import { FormInput } from '../../Atoms/Form/FormInput/FormInput'

export function AddingControl() {
  const { items: { items, setItems }, dateFormat: { dateFormat } } = rootStore

  const fieldOrder = items.length && Object.keys(items[0])

  const newItems =
    !!items?.length &&
    items?.map((item: any) => {
      const objCopy = { ...item }
      delete objCopy.isUTF
      return objCopy
    })

  const fields =
    newItems &&
    Object.entries(newItems[0]).map((item: any) => ({
      [item[0]]: !!(
        dayjs(item[1]).isValid() &&
        item[0] !== 'phone' &&
        item[0] !== 'id' &&
        item[0] !== 'isUTF'
      )
    }))

  const defaultValues =
    !!items?.length ?
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
              : key === 'isUTF' ? 'false' : ''
        ])
      ) : {}


  const {
    control,
    handleSubmit,
    reset
  } = useForm({ mode: 'onBlur', defaultValues })

  const onSubmit = (formData) => {
    const orderedItems =
      fieldOrder &&
      fieldOrder.reduce(
        (acc, key: string) => ({
          ...acc,
          [key]:
            dayjs(formData[key]).isValid() &&
            key !== 'phone' &&
            key !== 'id' &&
            key !== 'isUTF'
              ? dayjs(formData[key]).format(dateFormat)
              : formData[key]
        }),
        {}
      )
    setItems([...items, orderedItems])
    reset()
  }

  return (
    <Box width="100%">
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {!!items?.length && fields?.map((field: Record<string, any>) => {
          const key = Object.entries(field)[0][0]
          const isDate = Object.entries(field)[0][1]
          return (
            <>
              {isDate ? (
                <FormDatePicker
                  key={key}
                  name={key}
                  label={key}
                  format={dateFormat}
                  control={control}
                />
              ) : (
                <FormInput
                  label={key}
                  disabled={key === 'id'}
                  size="small"
                  control={control}
                />
              )}
            </>
          )
        })}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Button
            onClick={reset}
            variant="contained"
          >
            Reset
          </Button>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

