import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  developerCardWrapper: {
    background: theme.palette.common.white,
    boxShadow: `0 0 5px 0 ${theme.palette.grey[300]}`,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',
    '& .lazy-load-image-background': {
      flex: '0 0 auto',
      padding: theme.spacing(0.5),
      border: `1px solid ${theme.palette.grey[400]}`
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  developerCardContentWrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(3),
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      paddingLeft: theme.spacing(0),
      paddingTop: theme.spacing(3)
    }
  },
  developerCardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'center'
    }
  },
  developerName: {
    margin: theme.spacing(0),
    lineHeight: 1
  },
  developerSkills: {
    marginBottom: theme.spacing(1)
  },
  developerSkill: {
    marginRight: theme.spacing(1),
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.grey[500]
  },
  developerBio: {
    marginRight: theme.spacing(4),
    '& p': {
      margin: theme.spacing(0)
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(0),
      textAlign: 'justify'
    }
  },
  viewProfile: {
    '&.MuiButton-root': {
      flex: '1 0 auto',
      textTransform: 'capitalize',
      color: theme.palette.action.active,
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(3),
        width: '100%'
      }
    }
  }
}))
