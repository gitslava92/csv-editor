import { Box, styled } from '@mui/system'

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))
