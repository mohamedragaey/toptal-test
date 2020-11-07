import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {useStyles} from './Styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import {SearchLoader} from '../Loader/SearchLoader'
import {FormattedMessage} from 'react-intl'
import {GeneralConsumer} from '../../GeneralContext'

const SearchFilters = () => {
  const classes = useStyles()

  return (
    <GeneralConsumer>{({developersSkillsCheck, handleDevelopersSkillsChange, developersTypes, developersSkills, developersTypesLoading, developersSkillsLoading}) => (
      <div className={classes.root}>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="DeveloperType-content"
            id="DeveloperType-header"
          >
            <Typography className={classes.heading}>
              <FormattedMessage id='AccordionSummary.heading.DeveloperType'/>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {!!developersTypesLoading && <SearchLoader/>}
            <FormGroup row>
              {developersTypes.map((type) => (
                <FormControlLabel
                  key={type.id}
                  control={<Checkbox
                    color="primary"
                    name={type.title}
                    onChange={() => handleDevelopersSkillsChange(type.title)}
                    checked={developersSkillsCheck.includes(type.title)}
                  />}
                  label={type.title}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="Skills-content"
            id="Skills-header"
          >
            <Typography className={classes.heading}><FormattedMessage
              id='AccordionSummary.heading.Skills'/></Typography>
          </AccordionSummary>
          <AccordionDetails>
            {!!developersSkillsLoading && <SearchLoader/>}
            <FormGroup row>
              {developersSkills.map((type) => (
                <FormControlLabel
                  key={type.id}
                  control={<Checkbox
                    color="primary"
                    name={type.title}
                    onChange={() => handleDevelopersSkillsChange(type.title)}
                    checked={developersSkillsCheck.includes(type.title)}
                  />}
                  label={type.title}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </div>
    )}
    </GeneralConsumer>
  )
}

export default SearchFilters
