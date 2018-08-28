import classNames from "classnames";
import React from "react";
import InputMask from 'react-input-mask'


export const InputWithMask = ({input: inputProps}) => {
 return (
    <InputMask mask="+7 (999) 999-99-99"
               maskChar={'X'}
               alwaysShowMask={false}
      // className={classNames(classes.bootstrapInput)}
               { ...inputProps}
    />
  );
}