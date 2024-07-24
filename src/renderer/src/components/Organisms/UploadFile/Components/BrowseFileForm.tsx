import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton, InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip
} from '@mui/material'
import { Edit, EditOff } from '@mui/icons-material'
import { DELIMITERS } from '../../../../common/constants'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { rootStore } from '../../../store/rootStore'

interface BrowseFileFormProps {
  getRootProps: () => Promise<void>;
}

export const BrowseFileForm = observer(({ getRootProps }: BrowseFileFormProps) => {
  const {
    dateFormat: { dateFormat, setDateFormat },
    delimiter: { delimiter, setDelimiter }
  } = rootStore

  const [isEdit, setIsEdit] = useState(false)

  return (
    <Grid container spacing={2}>
      <Grid item>
        <FormControl sx={{ minWidth: 75 }} margin="none">
          <InputLabel id="delimiter-filter-select-label">Delimiter</InputLabel>
          <Select
            label="Delimiter"
            labelId="delimiter-filter-select-label"
            id="delimiter-filter-select"
            value={delimiter}
            onChange={(e) => setDelimiter(String(e.target.value))}
            size="small"
            margin="none"
          >
            {DELIMITERS.map((item: string) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <Box display="flex" gap={1}>
          <FormControl margin="none">
            <TextField
              label="Specific date format in the file"
              value={dateFormat}
              onChange={(e) => setDateFormat(String(e.target.value))}
              size="small"
              margin="none"
              disabled={!isEdit}
              fullWidth
            />
          </FormControl>

          <IconButton onClick={() => setIsEdit((prev) => !prev)}>
            <Tooltip title={isEdit ? 'Turn off time format editing mode' : 'Enable format editing mode'}>
              {isEdit ? <EditOff /> : <Edit />}
            </Tooltip>
          </IconButton>
        </Box>
      </Grid>

      <Grid item>
        <Button {...getRootProps()}>
          Browse file
        </Button>
      </Grid>
    </Grid>
  )
})
