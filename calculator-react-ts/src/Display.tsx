import React from 'react';

interface IProps {
  display: number;
}

const Display: React.FC<IProps> =(props:IProps) => {
  return (
    <div>
      {props.display}
    </div>
  );
}

export default Display;