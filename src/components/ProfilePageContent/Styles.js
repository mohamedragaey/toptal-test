import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  profilePageContentWrapper: {},
  paper: {
    backgroundColor: theme.palette.common.white
  },
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
    paddingBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    marginBottom: theme.spacing(4),
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
  },
  contactOptionsWrapper: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`
  },
  contactOptionsTitle: {
    fontSize: theme.typography.pxToRem(18)
  },
  closeButton: {},
  formDialogButton: {
    textTransform: 'capitalize',
    width: '100%',
    padding: theme.spacing(2, 1, 1),
    fontWeight: theme.typography.fontWeightBold,
    '& .MuiButton-label': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  canHelpYouWith: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    '& ul': {
      paddingLeft: theme.spacing(2)
    },
    '& li': {
      position: 'relative',
      listStyle: 'none',
      paddingBottom: theme.spacing(2),
      fontSize: theme.typography.pxToRem(16),
      '&:before': {
        content: '">"',
        position: 'absolute',
        left: -15,
        top: 3,
        fontSize: theme.typography.pxToRem(12),
        color: '#f00'
      }
    }
  },
  experienceTitle: {},
  experienceItem: {
    '& li': {
      position: 'relative',
      listStyle: 'none',
      paddingBottom: theme.spacing(2),
      fontSize: theme.typography.pxToRem(16),
      '&:before': {
        content: '"*"',
        position: 'absolute',
        left: -15,
        top: 0,
        fontSize: theme.typography.pxToRem(20)
      }
    }
  }
}))
