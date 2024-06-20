import React from 'react'
import { Box, Button } from '@mui/material'
import dayjs from 'dayjs'
import * as isBetween from 'dayjs/plugin/isBetween'
import { PeriodPicker } from './PeriodPicker'
import { PeriodFormat } from './PeriodFormat'
import { createRootStore } from '@renderer/components/store/rootStore'

dayjs.extend(isBetween as any)

export function PeriodControl() {
  const {
    items: { items, setItems },
    dateFormat: { format, setDateFormat },
    dateFrom: { dateValueFrom, setDateValueFrom },
    dateTo: { dateValueTo, setDateValueTo },
    error: { error },
  } = createRootStore()

  const handleResetDates = () => {
    setDateValueFrom(dayjs())
    setDateValueTo(dayjs())
  }

  function randomDate(start: any, end: any) {
    return dayjs(new Date(start + Math.random() * (end - start))).toISOString()
  }

  function randomDepositDate(regDate: any) {
    const randomMilliseconds = Math.floor(Math.random() * 86400000) + 86400000
    return dayjs(regDate).add(randomMilliseconds, 'millisecond').toISOString()
  }

  const handleChangeDates = () => {
    const newItems = items.map((item: any) => {
      const random = randomDate(dateValueFrom, dateValueTo)
      return Object.assign(
        {},
        ...Object.entries(item).map(([key, val]: any) => ({
          [key]:
            dayjs(val).isValid() &&
            key !== 'phone' &&
            key !== 'id' &&
            key !== 'isUTF'
              ? dayjs(val).isBetween(dateValueFrom, dateValueTo)
                ? val
                : key === 'deposit_date' || key === 'ftd_date' || key === 'ftd'
                  ? randomDepositDate(random)
                  : random
              : val
        }))
      )
    })
    setItems(newItems)
  }

  const isDisabled = dayjs(dateValueFrom).isSame(dateValueTo)

  const styles = {
    wrapper: {
      display: 'flex',
      alignItems: 'top',
      justifyContent: 'space-between',
      flexDirection: { xs: 'column', md: 'row' }
    },
    pickersBox: {
      display: 'flex',
      alignItems: 'top',
      gap: 1,
      flexDirection: { xs: 'column', md: 'row' }
    },
    btnBox: { display: 'flex', justifyContent: 'center', gap: 1 },
    btn: {
      display: 'flex',
      marginTop: { xs: 1, md: 0 }
    }
  }

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.pickersBox}>
        <PeriodPicker
          fromValue={dateValueFrom}
          setFromValue={setDateValueFrom}
          toValue={dateValueTo}
          setToValue={setDateValueTo}
          error={error}
          format={format}
        />
        <PeriodFormat
          format={format}
          setFormat={setDateFormat}
          label={'Date format'}
        />
      </Box>
      <Box sx={styles.btnBox}>
        <Box sx={styles.btnBox}>
          <Button
            variant="contained"
            disabled={isDisabled}
            onClick={handleResetDates}
            sx={styles.btn}
          >
            Reset Dates
          </Button>
        </Box>
        <Button
          variant="contained"
          disabled={isDisabled}
          onClick={handleChangeDates}
          sx={styles.btn}
        >
          Change Dates
        </Button>
      </Box>
    </Box>
  )
}
