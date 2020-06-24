import React from 'react';
import literals from '../data/literals';
import AvatarInput from './AvatarInput';
import ValidatedInput from './ValidatedInput';

const useInput = ({ inputs }) => {
  
  const struct = () => {
      console.log(inputs);
      return inputs.map((input) => {
        const structure = [];
        const { type, name, id } = input;
        switch (type) {
            case 'email':
            case 'name':
                structure.push(<ValidatedInput name={name} type={type} />)
                break;
            case 'avatar':
                structure.push(<AvatarInput name={name} id={id} />);
                break;
            case 'role':
                structure.push(
                    <input type="text" placeholder={literals.role} name={name}/>
                )
                break;
            case 'checkbox':
                structure.push(
                    <div>
                        <input type="checkbox" value="admin" id={id}/>
                        <label for={id}>
                            {literals.admin}
                        </label>
                    </div>
                )
                break;
            default:
                structure.push(<div class="error">{literals.wrongInputType}</div>);
                break;
        }
        return (
            <div>
                {structure}
            </div>
        );
      })
  }

  return [ struct ];
};

export default useInput;