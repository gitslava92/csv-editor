import { Tabs as MUITabs, Tab, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState, SyntheticEvent, ReactNode } from 'react'

export interface TabPanelProps {
  children?: ReactNode;
  currentTab: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, value, currentTab, ...rest } = props

  return (
    <Box component="div"
         role="tabpanel"
         hidden={value !== currentTab}
         id={`full-width-tabpanel-${currentTab}`}
         aria-labelledby={`full-width-tab-${currentTab}`}
         {...rest}
    >
      {value === currentTab && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  )
}

export enum ETabs {
  File, Period, Duplicates, Adding, Funnels
}

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(ETabs.File)

  const tabs = Object.keys(ETabs)

  const handleChangeTab = (e: SyntheticEvent, newValue: ETabs) => {
    setCurrentTab(newValue)
  }

  return (
    <>
      <MUITabs
        value={currentTab}
        onChange={handleChangeTab}
        variant="fullWidth"
        aria-label="tabs"
      >
        {tabs.map((tab) => (
          <Tab
            label={tab}
            id={`tab-${tab}`}
            aria-controls={`tab-panel-${tab}`}
            key={tab}
          />
        ))}
      </MUITabs>


      {tabs.map((tab) => (
        <TabPanel value={Tabs[tab]} currentTab={currentTab}>
          {Tabs[tab]}
        </TabPanel>
      ))}
    </>
  )
}
