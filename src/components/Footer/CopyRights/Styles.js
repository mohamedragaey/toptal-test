import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  copyRightsWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: theme.spacing(2, 0),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      flexDirection: 'column'
    }
  },
  copyRightsText: {
    color: theme.palette.action.active,
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.pxToRem(14),
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(0.5),
      fontSize: theme.typography.pxToRem(14)
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1)
    }
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      width: 30,
      height: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: theme.spacing(0.5),
      color: theme.palette.common.white,
      background: theme.palette.action.active,
      '&:not(:last-of-type)': {
        marginRight: theme.spacing(0.5)
      },
      '& [class^="icon-"]:before, [class*=" icon-"]:before': {
        fontSize: theme.typography.pxToRem(18)
      }
    }
  }
}))
