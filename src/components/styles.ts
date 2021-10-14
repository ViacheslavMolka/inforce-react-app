import { makeStyles, createStyles } from '@mui/styles';

export const useStyles = makeStyles(() => 
  createStyles({
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    beerCard: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 700,
      width: 400,
      margin: '0 10px 10px 0',
    },
    beerImg: {
      width: 150,
      height: 320,
    },
    buttons: {
      margin: '0 auto',
      paddingBottom: 5,
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
    }
  })
)

export default useStyles;
