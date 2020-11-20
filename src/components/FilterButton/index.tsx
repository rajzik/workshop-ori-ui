import { FilterOutlined } from '@ori-ui/icons';
import { Button, IconButton, makeStyles, Theme, useMediaQuery } from '@ori-ui/material-ui';

const useStyles = makeStyles(theme => ({
  iconButton: {
    boxShadow: theme.shadows[2],
    marginLeft: theme.spacing(3),
  },
  button: {
    marginLeft: theme.spacing(4),
  },
}));

export default function FilterButton() {
  const classes = useStyles();

  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  if (isDesktop) {
    return (
      <Button className={classes.button} variant="outlined">
        Search
      </Button>
    );
  }
  return (
    <IconButton className={classes.iconButton}>
      <FilterOutlined />
    </IconButton>
  );
}
