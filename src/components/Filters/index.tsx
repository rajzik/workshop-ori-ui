import { makeStyles, TextField, InputAdornment } from '@ori-ui/material-ui';
import { Search } from '@ori-ui/icons';
import { FilterButton } from '../FilterButton';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(5, 3, 0, 3),
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(4, 6, 0, 6),
    },
  },
}));

export const Filters = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        fullWidth
        variant="filled"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <FilterButton />
    </div>
  );
};
