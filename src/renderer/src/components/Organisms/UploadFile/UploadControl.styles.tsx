import { Box, styled } from '@mui/system'

export const RootBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}))

export const PickerBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}))
