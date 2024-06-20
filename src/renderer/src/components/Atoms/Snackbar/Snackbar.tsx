import { Alert, Stack, Snackbar as MUISnackbar } from '@mui/material'
import { ReactElement } from 'react'

interface SnackBarProps {
  utfError: boolean
  open: boolean
  setOpen: (open: boolean) => void
}

export const Snackbar = ({ utfError, open, setOpen }: SnackBarProps): ReactElement => {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      {utfError ? (
        <MUISnackbar open={open} id={'errorSnackBar'}>
          <Alert severity="error" variant="filled" elevation={6}>
            Warning! The file contains characters that do not have mapped
            UTF-8 characters. The problem lines are highlighted in yellow.
            You have to fix them manually.
          </Alert>
        </MUISnackbar>
      ) : (
        <MUISnackbar
          open={open}
          autoHideDuration={3000}
          id={'successSnackBar'}
          onClose={() => setOpen(false)}
        >
          <Alert severity="success" variant="filled" elevation={6}>
            The file was imported successfully
          </Alert>
        </MUISnackbar>
      )}
    </Stack>
  )
}
