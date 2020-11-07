import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(24)
  },
  root: {
    '& .MuiAccordion-root.Mui-expanded': {
      margin: 0,
      borderBottom: `1px solid ${theme.palette.grey[300]}`
    },
    '& .MuiAccordionSummary-content.Mui-expanded': {
      marginBottom: theme.spacing(0)
    },
    '& .MuiAccordionDetails-root': {
      padding: theme.spacing(1)
    },
    '& .MuiFormControlLabel-root': {
      minWidth: '33.33%',
      marginRight: 0,
      marginLeft: 0,
      [theme.breakpoints.up('md')]: {
        width: '50%'
      }
    }
  }
}))
