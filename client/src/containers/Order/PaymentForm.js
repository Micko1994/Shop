import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
  radio: {
    '&$checked': {
      color: '#9B59B6'
    }
  },
  checked: {}
}));

export default function PaymentForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState('cash');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Payment details</FormLabel>
        <RadioGroup aria-label="payment_type" name="payment_type" value={value} onChange={handleChange}>
          <FormControlLabel value="cash" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Cash"/>
          <FormControlLabel value="bank_transfer" control={<Radio classes={{root: classes.radio, checked: classes.checked}}/>} label="Bank Transfer" />
          <FormControlLabel value="disabled" disabled control={<Radio />} label="Online (coming soon)" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}