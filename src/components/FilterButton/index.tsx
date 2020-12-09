import { makeStyles, useMediaQuery, Theme, Button, IconButton } from '@ori-ui/material-ui';
import FilterFilled from '@ori-ui/icons/lib/FilterFilled';

const useStyles = makeStyles((theme) => ({
  iconButton: {
    boxShadow: theme.shadows[2],
    marginLeft: theme.spacing(3),
  },
  button: {
    marginLeft: theme.spacing(4),
  },
}));

export const FilterButton = () => {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  const classes = useStyles();

  if (isDesktop) {
    return (
      <Button className={classes.button} variant="outlined">
        Search
      </Button>
    );
  }

  return (
    <IconButton className={classes.iconButton}>
      <FilterFilled />
    </IconButton>
  );
};
