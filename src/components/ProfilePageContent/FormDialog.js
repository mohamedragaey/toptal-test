import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import {IconButton} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import {useStyles} from './Styles'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import {FormattedMessage} from 'react-intl'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FormDialog = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.formDialogButton} onClick={handleClickOpen}>
        <GroupWorkIcon/>
        <FormattedMessage id='FormDialog.Button.connect'/>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-slide-title"
        aria-describedby="form-dialog-slide-description"
      >
        <DialogTitle id="form-dialog-slide-title">
          {'Use Google\'s location service?'}
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
            <CloseIcon/>
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="form-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous location data to
            Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default FormDialog
