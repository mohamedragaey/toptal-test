import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  headerLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  headerLink: {
    color: theme.palette.action.active,
    textDecoration: 'none',
    textTransform: 'capitalize',
    marginRight: theme.spacing(2),
    fontSize: theme.typography.pxToRem(16),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  loginButton: {
    color: theme.palette.common.white,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(0.25)
    }
  },
  signUpButton: {
    textTransform: 'capitalize',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))
