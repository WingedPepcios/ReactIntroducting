import React, { useState } from 'react';
import literals from '../data/literals';

const AvatarInput = ({ name, id }) => {
  const [ value, setValue ] = useState('');
  
  return (
    <div>
        <div>
            <input 
                name={name}
                id={id}
                type="text" 
                placeholder={literals.avatarPlaceholder} 
                onKeyUp={(e) => {
                    setValue(e.target.value);
                }} /></div>
        <img src={value} />
    </div>
  );
};

export default AvatarInput;