import React from 'react';
import { bool } from '../../../utils/boolean';
import '../Input.scss';
import type { inputProps } from '../type';

const NormalInput = (props: inputProps): React.ReactElement => {
    console.log('--props.errorText--', props.errorText);
    return (
        <div className="normalInput">
            <input
                className={bool(props.isError) ? 'inputErrorFocus' : 'inputFocus'}
                placeholder={props.placeholder}
            />
            <p>{bool(props.errorText) ? props.errorText : ''}</p>
        </div>
    );
};

export default NormalInput;
