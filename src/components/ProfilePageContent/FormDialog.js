import React from 'react'
import {useFormik} from 'formik'
import Slide from '@material-ui/core/Slide'
import {FormattedMessage} from 'react-intl'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ReCAPTCHA from 'react-google-recaptcha'
import CloseIcon from '@material-ui/icons/Close'
import DialogTitle from '@material-ui/core/DialogTitle'
import {IconButton, InputAdornment, TextField} from '@material-ui/core'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import {ContactFormValidation} from '../../utils/validationSchema'
import {FormLoader} from '../Loader/FormLoader'
import {useStyles} from './Styles'
import {AccountCircle} from '@material-ui/icons'
import Alert from '@material-ui/lab/Alert'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const FormDialog = ({profileObj}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

  React.useEffect(() => {
    setSuccess(false)
  }, [])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSuccess(false)
  }

  const contactForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      reCaptcha: ''
    },
    validateOnBlur: false,
    validateOnChange: true,
    validateOnMount: true,
    validationSchema: ContactFormValidation,
    onSubmit: ((values, actions) => {
      setTimeout(() => {
        actions.setSubmitting(false)
        actions.resetForm()
        setSuccess(true)
      }, 3000)
    })
  })

  return (
    <div>
      <Button variant="outlined" color="primary" className={classes.formDialogButton} onClick={handleClickOpen}>
        <GroupWorkIcon/>
        <FormattedMessage id='FormDialog.Button.connect'/>
      </Button>
      <Dialog
        maxWidth='md'
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="form-dialog-slide-title"
        aria-describedby="form-dialog-slide-description"
      >
        <form onSubmit={contactForm.handleSubmit} noValidate autoComplete="off" className={classes.formWrapper}>
          {!!success && <Alert severity="success">Form sent successfully</Alert>}
          <DialogTitle id="form-dialog-slide-title" className={classes.dialogHeader} disableTypography={true}>
            <div>
              <span className={classes.DialogTitleHint}>Contact</span>
              <h2 className={classes.DialogTitle}>{`${profileObj.first_name} ${profileObj.last_name}`}</h2>
            </div>
            <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <div className={classes.row}>
              <TextField
                required
                fullWidth
                margin="dense"
                type="text"
                name='firstName'
                id='firstName'
                variant="outlined"
                label='Your First name'
                className={classes.marginRight}
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                value={contactForm.values.firstName}
                helperText={contactForm.errors.firstName && contactForm.touched.firstName && contactForm.errors.firstName}
                error={contactForm.errors.firstName && contactForm.touched.firstName !== undefined}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <AccountCircle/>
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                required
                fullWidth
                margin="dense"
                type="text"
                name='lastName'
                id='lastName'
                variant="outlined"
                label='Your Last name'
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                value={contactForm.values.lastName}
                helperText={contactForm.errors.lastName && contactForm.touched.lastName && contactForm.errors.lastName}
                error={contactForm.errors.lastName && contactForm.touched.lastName !== undefined}
              />
            </div>
            <TextField
              required
              fullWidth
              margin="dense"
              type="email"
              name='email'
              id='email'
              variant="outlined"
              label='Email Address'
              onChange={contactForm.handleChange}
              onBlur={contactForm.handleBlur}
              value={contactForm.values.email}
              helperText={contactForm.errors.email && contactForm.touched.email && contactForm.errors.email}
              error={contactForm.errors.email && contactForm.touched.email !== undefined}
            />
            <div className={classes.row}>
              <TextField
                multiline={true}
                rows={5}
                required
                fullWidth
                margin="dense"
                type="text"
                name='message'
                id='message'
                variant="outlined"
                label='Would you like to leave a message'
                className={classes.marginRight}
                onChange={contactForm.handleChange}
                onBlur={contactForm.handleBlur}
                value={contactForm.values.message}
                helperText={contactForm.errors.message && contactForm.touched.message && contactForm.errors.message}
                error={contactForm.errors.message && contactForm.touched.message !== undefined}
              />
              <div className={classes.reCaptchaWrapper}>
                <ReCAPTCHA sitekey="6Lc-TuIZAAAAADoN_6pSBBDXJlndyQG3wvQuwqMa"
                           onChange={(value) => contactForm.setFieldValue('reCaptcha', value)}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions className={classes.dialogActions}>
            <Button onClick={handleClose} color="primary" variant='outlined'>
              cancel
            </Button>
            <Button type='submit' color="primary" variant='contained'>
              contact
            </Button>
          </DialogActions>
          {contactForm.isSubmitting && <FormLoader loading={true}/>}
        </form>
      </Dialog>
    </div>
  )
}
export default FormDialog
