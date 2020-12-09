import { makeStyles, Typography } from '@ori-ui/material-ui';
import { Switch } from '@ori-ui/components';
import { HistoryCard } from '../HistoryCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridAutoFlow: 'row',
    justifyItems: 'center',
    marginTop: theme.spacing(4),
  },
  switch: {
    marginTop: theme.spacing(4),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 330,
    },
  },
}));

export default function Page() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h3">
        Claim history
      </Typography>
      <Typography>
        Find your claim/return and click on the claim number to see more details.
      </Typography>
      <Switch className={classes.switch} firstText="Me" secondText="Others" />
      <HistoryCard />
    </div>
  );
}
