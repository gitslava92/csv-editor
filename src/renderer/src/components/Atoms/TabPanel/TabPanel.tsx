import { Box } from '@mui/material'
import { PropsWithChildren } from 'react'

interface TabPanelProps {
  index: number;
  value: number;
  testId: string;
}

export const TabPanel = ({
                           value,
                           index,
                           children,
                           testId
                         }: PropsWithChildren<TabPanelProps>) =>
  value === index && <Box data-testid={testId}>{children}</Box>
