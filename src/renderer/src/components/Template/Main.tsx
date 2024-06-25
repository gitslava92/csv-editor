import { Snackbar } from '../Atoms/Snackbar/Snackbar'
import { ControlBoard } from '../Organisms/ControlBoard/ControlBoard'
import { DataTable } from '../Organisms/DataTable/DataTable'
import { createRootStore } from '@renderer/components/store/rootStore';
import { Grid } from '@mui/material'

export const Main = () => {
  const {
    items: { items, setItems },
    utfError: { utfError, setUtfError },
    dateFormat: { format },
    isSnackBarOpen: { isSnackBarOpen, setIsSnackBarOpen },
    dateFrom: { dateValueFrom, setDateValueFrom },
    dateTo: { dateValueTo, setDateValueTo },
    error: { error },
  } = createRootStore()

  return (
    <Grid container>
      <ControlBoard />
      <Snackbar
        utfError={utfError}
        open={isSnackBarOpen}
        setOpen={setIsSnackBarOpen}
      />
      <DataTable
        rows={items}
        setData={setItems}
        format={format}
        setUtfError={setUtfError}
      />
    </Grid>
  )
}
