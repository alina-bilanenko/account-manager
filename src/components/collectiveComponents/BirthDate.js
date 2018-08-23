import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
  weekdaysMin : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
});

const BirthDate = (props) => {

  const {classes} = props;
  const handleChange = () => {

  };

  return (
    <DatePicker
      onChange={handleChange}
      placeholderText="DD/MM/YYY"
      dateFormat="L"
    />)
};

export default BirthDate