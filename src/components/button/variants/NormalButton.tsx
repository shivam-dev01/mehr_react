import React from 'react';
import type { ButtonProps } from '../type';
import '../Button.scss';

const NormalButton = (props: ButtonProps): React.ReactElement => {
    return (
        <div className="normalButtonBody">
            <button>{props.text}</button>
        </div>
    );
};

export default NormalButton;
