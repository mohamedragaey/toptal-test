import React from 'react'
import * as yup from 'yup'
import {FormattedMessage} from 'react-intl'

export const ContactFormValidation = yup.object().shape({
  email: yup.string()
    .email(<FormattedMessage id='validationSchema.validEmail'/>)
    .required(<FormattedMessage id='validationSchema.required'/>),
  firstName: yup.string().required(<FormattedMessage id='validationSchema.required'/>),
  lastName: yup.string().required(<FormattedMessage id='validationSchema.required'/>),
  message: yup.string().required(<FormattedMessage id='validationSchema.required'/>),
  reCaptcha: yup.string().trim().required(<FormattedMessage id='validationSchema.reCaptcha'/>)
})
