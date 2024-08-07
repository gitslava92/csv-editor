import { ChangeEvent, useState } from 'react'
import { Box, FormControl, IconButton, InputLabel, TextField, Tooltip } from '@mui/material'
import { Edit, EditOff } from '@mui/icons-material'

interface PeriodProps {
  format: string;
  setFormat: Function;
  label: string;
}

export const PeriodFormat = ({ format, setFormat, label }: PeriodProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const [change, setChange] = useState(format);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value);
  };

  const handleClick = () => {
    setIsEdit(!isEdit);
    setFormat(change);
  };

  return (
    <Box display='flex' gap={1}>
      <FormControl margin="none">
        <TextField
          label={label}
          value={change}
          onChange={handleChange}
          size='small'
          margin="none"
          disabled={!isEdit}
          fullWidth
        />
      </FormControl>
      <IconButton onClick={handleClick}>
        {!isEdit ? (
          <Tooltip title='Enable format editing mode'>
            <Edit />
          </Tooltip>
        ) : (
          <Tooltip title='Turn off time format editing mode'>
            <EditOff />
          </Tooltip>
        )}
      </IconButton>
    </Box>
  );
}
