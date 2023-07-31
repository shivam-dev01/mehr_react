import React from 'react';
import type { ButtonProps } from '../type';
import '../Button.scss';

const LinearButton = (props: ButtonProps): React.ReactElement => {
    return (
        <div className="linearButtonBody">
            <button>{props.text}</button>
        </div>
    );
};

export default LinearButton;
