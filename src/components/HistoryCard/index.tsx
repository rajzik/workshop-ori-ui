import { Card, useMediaQuery, Theme, makeStyles, Box, Typography } from '@ori-ui/material-ui';
import { Filters } from '../Filters';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(6),
  },
}));

export const HistoryCard = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));

  return (
    <Card
      classes={{
        root: classes.root,
      }}
      elevation={Number(isDesktop) * 2}
    >
      <Box mx={{ xs: 3, md: 6 }} mt={{ xs: 0, md: 6 }}>
        <Typography variant="h5">Recent claims</Typography>
      </Box>
      <Filters />
    </Card>
  );
};
