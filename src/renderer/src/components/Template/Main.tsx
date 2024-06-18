import { Tabs } from '@renderer/components/Organisms/Tabs/Tabs'
import { TitleBox } from '@renderer/components/Template/Main.styles'
import { Paper, Typography } from '@mui/material'
import { ThemeToggle } from '@renderer/components/Molecules/ThemeToggle/ThemeToggle'

export const Main = () => {
  return (
    <Paper>
      <TitleBox>
        <Typography variant="h5">
          Controls
        </Typography>

        <ThemeToggle />
      </TitleBox>

      <Tabs />
    </Paper>
  )
}
