import { Divider, List, makeStyles } from '@ori-ui/material-ui';
import { useData } from '~/containers';
import ClaimListItem from '../ClaimListItem';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginLeft: theme.spacing(3),
    backgroundColor: theme.palette.grey[100],
  },
}));

export default function ClaimList() {
  const { HistoryItems } = useData();
  const classes = useStyles();
  return (
    <List>
      <Divider className={classes.divider} />
      {HistoryItems.flatMap((props) => [
        <ClaimListItem key={props.Claim.ClaimNo} {...props} />,
        <Divider key={`${props.Claim.ClaimNo}-divider`} className={classes.divider} />,
      ])}
    </List>
  );
}
