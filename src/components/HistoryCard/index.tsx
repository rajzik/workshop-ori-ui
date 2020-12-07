import {
  Box,
  Button,
  Card,
  makeStyles,
  Theme,
  Typography,
  useMediaQuery,
} from '@ori-ui/material-ui';
import ClaimList from '../ClaimList';
import Filters from '../Filters';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(8),
  },
}));

export default function HistoryCard() {
  const isDesktop = useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={Number(isDesktop) * 2}>
      <Box mx={{ xs: 3, md: 6 }} mt={{ xs: 0, md: 6 }}>
        <Typography variant="h4">Recent claims</Typography>
      </Box>
      <Box mx={{ xs: 3, md: 6 }} mt={{ xs: 3, md: 4 }}>
        <Filters />
      </Box>
      <Box mx={{ sm: 0, md: 6 }} mt={{ xs: 5, md: 4 }}>
        <ClaimList />
        <Box my={6} display="grid" justifyItems="center">
          <Button variant="outlined" color="inherit">
            Load more
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
