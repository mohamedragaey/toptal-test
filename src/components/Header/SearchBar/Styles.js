import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  searchBarWrapper: {
    border: `1px solid ${theme.palette.common.white}`,
    borderRadius: '5px',
    background: theme.palette.common.white,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {}
  },
  SearchBoxFormControl: {
    width: '100%',
    '& .MuiFormControl-root': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      [theme.breakpoints.up('md')]: {
        width: '100%'
      }
    },
    '& .MuiInputLabel-formControl': {
      transform: 'translate(14px, 12px) scale(1)',
      fontSize: theme.typography.fontSize
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px) scale(0.75)'
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: theme.spacing(0),
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '0',
        borderColor: 'transparent',
        top: 0
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main
      }
    },
    '& .MuiOutlinedInput-input': {
      [theme.breakpoints.down('xs')]: {
        height: 11
      }
    }
  },
  searchButton: {
    color: '#e0e0e0',
    textTransform: 'capitalize',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    [theme.breakpoints.down('xs')]: {
      minWidth: 'auto',
      padding: theme.spacing(0.5, 1),
      fontSize: theme.typography.pxToRem(12)
    }
  },
  menuButton: {
    color: theme.palette.common.white,
    textTransform: 'capitalize',
    flex: '1 0 auto',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.5, 1),
      fontSize: theme.typography.pxToRem(12),
      width: 120,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      justifyContent: 'flex-start',
      '& .MuiButton-label': {
        whiteSpace: 'nowrap'
      }
    }
  }
}))
