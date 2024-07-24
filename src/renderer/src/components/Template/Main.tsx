import { Snackbar } from '../Atoms/Snackbar/Snackbar'
import { ControlBoard } from '../Organisms/ControlBoard/ControlBoard'
import { DataTable } from '../Organisms/DataTable/DataTable'
import { Grid } from '@mui/material'
import { rootStore } from '../store/rootStore'
import { BackgroundBox, RootBox } from './Main.styles'

export const Main = () => {
  const {
    items: { items, setItems },
    utfError: { utfError, setUtfError },
    dateFormat: { dateFormat },
    isSnackBarOpen: { isSnackBarOpen, setIsSnackBarOpen },
    dateFrom: { dateValueFrom, setDateValueFrom },
    dateTo: { dateValueTo, setDateValueTo },
    error: { error },
  } = rootStore;

  return (
    <RootBox>
      <BackgroundBox>
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
            format={dateFormat}
            setUtfError={setUtfError}
          />
        </Grid>
      </BackgroundBox>
    </RootBox>
  )
}
