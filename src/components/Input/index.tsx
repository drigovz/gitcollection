import React from 'react';
import IInputProperties from '../../interfaces/IInputProperties';

export const Input: React.FC<IInputProperties> = props => {
  return <input id={props.id} className={props.className} type={props.type} title={props.title} placeholder={props.placeholder} value={props.value} />;
};
