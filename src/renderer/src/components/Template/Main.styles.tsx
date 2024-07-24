import { Box, styled } from '@mui/system'
import WavyLines from '../../assets/wavy-lines.svg'

export const TitleBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2)
}))

export const RootBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  width: '100%'
}))

export const BackgroundBox = styled(Box)({
  backgroundImage: `url(${WavyLines})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  width: '100%'
})
