import React from 'react';
import IImageProperties from '../../interfaces/IImageProperties';

export const Img: React.FC<IImageProperties> = props => {
  return <img src={props.src} title={props.title} alt={props.alt} />;
};
