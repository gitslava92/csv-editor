import { TitleBox } from '@renderer/components/Template/Main.styles'
import { Tab, Tabs as MUITabs, Typography } from '@mui/material'
import { ThemeToggle } from '@renderer/components/Molecules/ThemeToggle/ThemeToggle'
import { SyntheticEvent, useEffect } from 'react'
import { TabPanel } from '@renderer/components/Atoms/TabPanel/TabPanel'
import { UploadControl } from '@renderer/components/Organisms/UploadFile/UploadControl'
import { ETabs } from '@renderer/components/store/currentTabStore'
import { AddingControl } from '@renderer/components/Organisms/AddingControl/AddingControl'
import { FunnelControl } from '@renderer/components/Organisms/FunnelControl/FunnelControl'
import { PeriodControl } from '@renderer/components/Organisms/PeriodControl/PeriodControl'
import { DuplicateControl } from '@renderer/components/Organisms/DuplicatesControl/DuplicatesControl'
import { observer } from 'mobx-react-lite'
import { rootStore } from '../../store/rootStore'
import { Paper } from './ControlBoard.styles'

const tabs = [
  { id: ETabs.File, title: 'File', component: UploadControl },
  { id: ETabs.Period, title: 'Period', component: PeriodControl },
  // { id: ETabs.Duplicates, title: 'Duplicates', component: DuplicateControl },
  { id: ETabs.Adding, title: 'Adding', component: AddingControl },
  // { id: ETabs.Funnels, title: 'Funnels', component: FunnelControl }
]

export const ControlBoard = observer(() => {
  const {
    items: { items },
    isSnackBarOpen: { setIsSnackBarOpen },
    currentTab: { currentTab, setCurrentTab },
    utfError: { utfError }
  } = rootStore

  useEffect(() => {
    if (items.length) {
      setIsSnackBarOpen(true)
    }
  }, [utfError, items])

  const handleChangeTab = (e: SyntheticEvent, newValue: ETabs) => {
    setCurrentTab(newValue)
  }

  return (
    <Paper elevation={8}>
      <TitleBox>
        <Typography variant="h5">
          Controls
        </Typography>

        <ThemeToggle />
      </TitleBox>

      <MUITabs
        value={currentTab}
        onChange={handleChangeTab}
        variant="fullWidth"
        aria-label="tabs"
      >
        {tabs.map((tab) => (
          <Tab
            label={tab.title}
            id={`tab-${tab.id}`}
            aria-controls={`tab-panel-${tab.id}`}
            key={tab.id}
          />
        ))}
      </MUITabs>


      {tabs.map((tab) => (
        <TabPanel
          value={tab.id}
          index={currentTab}
          testId={`tab-panel-${tab.id}`}
          key={tab.id}
        >
          <tab.component />
        </TabPanel>
      ))}
    </Paper>
  )
})
