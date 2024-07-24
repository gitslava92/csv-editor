import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material'
import { JsonToCsv } from './JsonToCsv'
import { rootStore } from '../../../store/rootStore'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import { DELIMITERS } from '../../../../common/constants'

interface SaveFileFormProps {
  getRemoveFileProps: () => Promise<void>;
}

export const SaveFileForm = observer(({getRemoveFileProps}: SaveFileFormProps) => {
  const {
    items: { items, setItems },
    fileName: { fileName },
    dateFormat: { dateFormat },
    exportDelimiter: { exportDelimiter, setExportDelimiter },
  } = rootStore

  const dataWithoutId = items.map((item: any) => {
    const objCopy = { ...item }
    delete objCopy.id
    delete objCopy.isUTF
    return objCopy
  })

  const newData = dataWithoutId.map((item: any) =>
    Object.assign(
      {},
      ...Object.entries(item).map(([key, val]: any) => ({
        [key]:
          dayjs(val).isValid() &&
          key !== 'phone' &&
          key !== 'id' &&
          key !== 'isUTF'
            ? dayjs(val).utc().format(dateFormat)
            : val
      }))
    )
  )

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          {...getRemoveFileProps()}
          onClick={() => setItems(defaultItems)}
        >
          Reset all
        </Button>
      </Grid>

      <Grid item>
        <Grid container spacing={2}>
          <Grid item>
            <FormControl sx={{ minWidth: 75 }}>
              <InputLabel id="delimiter-filter-select-label">
                Delimiter
              </InputLabel>
              <Select
                labelId="delimiter-filter-select-label"
                id="delimiter-filter-select"
                value={exportDelimiter}
                label="Delimiter"
                onChange={(e) => setExportDelimiter(String(e.target.value))}
                size="small"
              >
                {DELIMITERS.map((item: any) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item>
            <JsonToCsv
              data={newData}
              fileName={fileName}
              exportDelimiter={exportDelimiter}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
})
