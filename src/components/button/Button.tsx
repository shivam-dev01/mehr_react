import React from 'react';
import NormalButton from './variants/NormalButton';
import LinearButton from './variants/LinearButton';
import type { ButtonProps } from './type';

const Button = (props: ButtonProps): React.ReactElement => {
    const buttonJson = (
        props: ButtonProps,
    ): { normal: React.ReactElement; linear: React.ReactElement } => {
        return {
            normal: <NormalButton {...props} />,
            linear: <LinearButton {...props} />,
        };
    };

    return <div>{buttonJson(props)[props.type]}</div>;
};

export default Button;
