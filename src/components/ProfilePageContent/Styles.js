import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  paginationWrapper: {
    marginBottom: theme.spacing(4),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  noResult: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing(4, 0),
    padding: theme.spacing(4, 2),
    background: theme.palette.common.white,
    boxShadow: `0 0 5px 0 ${theme.palette.grey[400]}`,
    fontSize: theme.typography.pxToRem(20)
  }
}))
