import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2)
    },
    '& .MuiBreadcrumbs-ol': {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
        marginBottom: theme.spacing(1)
      }
    },
    '& .MuiBreadcrumbs-li': {
      '& a': {
        color: theme.palette.common.white
      },
      '& p': {
        color: theme.palette.common.white,
        textDecoration: 'underline'
      }
    },
    '& .MuiBreadcrumbs-separator': {
      color: theme.palette.common.white
    }
  }
}))
