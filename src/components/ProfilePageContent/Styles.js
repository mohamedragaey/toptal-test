import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  profilePageContentWrapper: {},
  profilePageContentTitle: {
    lineHeight: 1,
    marginBottom: 0,
    fontSize: theme.typography.pxToRem(40)
  },
  profilePageContentSubTitle: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[400],
    '& .MuiSvgIcon-root': {
      fontSize: theme.typography.pxToRem(14),
      marginLeft: theme.spacing(1)
    }
  },
  profilePageContentDescription: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
    '& .lazy-load-image-background.blur': {
      flex: '1 0 auto'
    }
  },
  profilePageContentBio: {
    marginRight: theme.spacing(0),
    marginLeft: theme.spacing(1),
    '& p': {
      margin: theme.spacing(0),
      fontSize: theme.typography.pxToRem(18),
      textAlign: 'justify'
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(0),
      textAlign: 'justify'
    }
  }
}))
