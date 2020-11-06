import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  headerLinks: {},
  loginButton: {
    color: theme.palette.common.white,
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(16),
      marginRight: theme.spacing(0.25)
    }
  }
}))
