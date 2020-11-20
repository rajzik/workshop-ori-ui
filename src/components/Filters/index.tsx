import { Search } from '@ori-ui/icons';
import { Box, InputAdornment, makeStyles, TextField } from '@ori-ui/material-ui';
import React from 'react';
import FilterButton from '../FilterButton';

const useStyles = makeStyles(theme => ({
  root: {},
}));

export default function Filters() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center">
        <TextField
          fullWidth
          variant="filled"
          placeholder="Search claim"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <FilterButton />
      </Box>
    </div>
  );
}
