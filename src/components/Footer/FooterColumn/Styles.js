import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footerColumnWrapper: {},
  footerColumnTitle: {
    fontWeight: theme.typography.fontWeightRegular
  },
  footerColumnContent: {
    display: 'flex',
    flexDirection: 'column'
  },
  footerLink: {
    color: theme.palette.action.active,
    textDecoration: 'none',
    textTransform: 'capitalize',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16)
  },
  signUpButton: {
    color: theme.palette.common.white,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular
  }
}))
