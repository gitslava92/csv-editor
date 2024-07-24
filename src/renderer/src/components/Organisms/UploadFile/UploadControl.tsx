import { useCSVReader } from 'react-papaparse'
import dayjs from 'dayjs'
import { Grid, Typography } from '@mui/material'
import { checkNonAsciiCharacters } from '@renderer/common/helpers/checkNonUTF8Characters'
import { dateToISO } from '@renderer/common/helpers/dateConverter'
import { RootBox } from './UploadControl.styles'
import { rootStore } from '../../store/rootStore'
import { observer } from 'mobx-react-lite'
import { BrowseFileForm } from './Components/BrowseFileForm'
import { SaveFileForm } from './Components/SaveFileForm'

export const UploadControl = observer(() => {
  const {
    items: { setItems },
    defaultItems: { setDefaultItems },
    fileName: { fileName, setFileName },
    delimiter: { delimiter },
    utfError: { setUtfError },
    uploadDateFormat: { uploadDateFormat }
  } = rootStore
  const { CSVReader } = useCSVReader()

  const csvConfig = {
    quotes: false,
    // quoteChar: '"',
    // escapeChar: '"',
    delimiter,
    header: true,
    // dynamicTyping: true,
    // newline: '\r\n',
    skipEmptyLines: true
    // columns: null,
  }

  return (
    <RootBox>
      <CSVReader
        config={csvConfig}
        onUploadAccepted={(results: any, acceptedFile: any) => {
          const resultWithId = results.data.map(
            (item: any, i: any = 0) => ({
              ...item,
              id: i,
              isUTF: checkNonAsciiCharacters(item)
            })
          )
          if (results) {
            setUtfError(
              !!resultWithId.filter((i: any) => i.isUTF === true).length
            )
          }
          const newResult = resultWithId.map((item: any) =>
            Object.assign(
              {},
              ...Object.entries(item).map(([key, val]: any) => ({
                [key]:
                  dayjs(val).isValid() &&
                  key !== 'phone' &&
                  key !== 'id' &&
                  key !== 'isUTF'
                    ? dayjs(val).utc().toISOString()
                    : dayjs(dateToISO(val, uploadDateFormat)).isValid()
                      ? dateToISO(val, uploadDateFormat)
                      : val
              }))
            )
          )

          setFileName(acceptedFile.name ?? '')
          setItems(newResult)
          setDefaultItems(newResult)
        }}
      >
        {({ getRootProps, ProgressBar, getRemoveFileProps }: any) => (
          <>
            <Grid container spacing={2} flexDirection="column">
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Typography variant="h5">
                      Upload file:
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography variant="body1">
                      {fileName}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Grid container spacing={2} justifyContent="space-between">
                  <Grid item>
                    <BrowseFileForm getRootProps={getRootProps} />
                  </Grid>

                  <Grid item>
                    <SaveFileForm getRemoveFileProps={getRemoveFileProps} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <ProgressBar />
          </>
        )}
      </CSVReader>
    </RootBox>
  )
})
