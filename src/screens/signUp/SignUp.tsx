import React from 'react';
import './SignUp.scss';
import Button from '../../components/button/Button';

const SignUp = (): React.ReactElement => {
    return (
        <div className="SignUpBody">
            <div className="leftBody"></div>
            <div className="rightBody">
                <Button type="linear" text="Sign Up" />
            </div>
        </div>
    );
};

export default SignUp;
