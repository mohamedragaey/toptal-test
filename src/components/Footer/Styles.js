import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    marginTop: theme.spacing(4),
    borderTop: `1px solid ${theme.palette.grey[300]}`
  },
  footerContent: {
    display: 'flex',
    padding: theme.spacing(3, 0)
  },
  footerLink: {
    color: theme.palette.action.active,
    textDecoration: 'none',
    textTransform: 'capitalize',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16)
  }
}))
