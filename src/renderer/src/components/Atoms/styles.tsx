import { Box, styled } from '@mui/system'
import { Typography } from '@mui/material'

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.4rem' },
  fontWeight: 700,
  marginBottom: 1,
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}))

export const Error = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: 8,
  fontSize: theme.spacing(1.5),
  color: theme.palette.danger.main
}))
