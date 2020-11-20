import { Box, ListItem, makeStyles, Typography } from '@ori-ui/material-ui';
import { ArrowRightThin } from '@ori-ui/icons';
import { VFC } from 'react';
import clsx from 'clsx';
import { data } from '~/constants';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateAreas: `
      'category-name  status'
      'claim-number   .'
      'claim-date     .'
    `,
    gridTemplateColumns: '1fr auto',
    borderLeft: '7px solid',
    borderRadius: '3px 0 0 3px',
    padding: theme.spacing(3, 3, 5, 2),
    [theme.breakpoints.up('md')]: {
      gridTemplateAreas: `
        'category-name claim-number claim-date status'
      `,
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      padding: theme.spacing(5, 3, 6, 2),
    },
  },
  status: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  status0: {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey[100],
    borderColor: 'transparent',
  },
  status1: {
    borderColor: theme.palette.warning.main,
    color: theme.palette.background.husk,
  },
  status2: {
    borderColor: theme.palette.warning.main,
    color: theme.palette.background.husk,
  },
  status3: {
    borderColor: theme.palette.success.main,
    color: theme.palette.secondary.dark,
  },
  status4: {
    borderColor: theme.palette.error.dark,
    color: theme.palette.error.dark,
  },
}));

const ClaimListItem: VFC<typeof data['HistoryItems'][number]> = props => {
  const {
    Claim: { ClaimCategoryName, ClaimNo, ClaimDate, StatusName, ClaimDetailUrl, StatusId },
  } = props;
  const classes = useStyles(props);

  return (
    <ListItem
      button
      component="a"
      href={ClaimDetailUrl}
      className={clsx(classes.root, classes[`status${StatusId}` as keyof typeof classes])}
    >
      <Box gridArea="category-name">
        <Typography color="textPrimary" variant="body2">
          {ClaimCategoryName}
        </Typography>
      </Box>
      <Box
        gridArea="status"
        display="flex"
        alignItems="center"
        justifySelf={{ xs: 'initial', md: 'end' }}
      >
        <Typography variant="body2" component="span" className={classes.status} color="inherit">
          {StatusName}
        </Typography>
        <ArrowRightThin fontSize="small" />
      </Box>
      <Box gridArea="claim-number" justifySelf={{ xs: 'initial', md: 'center' }}>
        <Typography color="textPrimary">{ClaimNo}</Typography>
      </Box>
      <Box
        gridArea="claim-date"
        color="text.disabled"
        justifySelf={{ xs: 'initial', md: 'center' }}
      >
        <Typography color="inherit">{ClaimDate}</Typography>
      </Box>
    </ListItem>
  );
};

export default ClaimListItem;
