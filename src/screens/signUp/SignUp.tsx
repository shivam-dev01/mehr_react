import React from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import SizeBox from '../../components/sizeBox/SizeBox';
import './SignUp.scss';

const SignUp = (): React.ReactElement => {
    return (
        <div className="SignUpBody">
            <div className="leftBody"></div>
            <div className="rightBody">
                <div>
                    <Input type="normal" placeholder="Full Name" />
                    <SizeBox height={7} />
                    <Input type="normal" placeholder="Mobile Number" />
                    <SizeBox height={7} />
                    <Input type="normal" placeholder="Email Id" />
                    <SizeBox height={7} />
                    <Input type="normal" placeholder="Password" />
                    <SizeBox height={7} />
                    <Input type="normal" placeholder="Confirm Password" />
                    <SizeBox height={7} />
                    <Button type="linear" text="Sign Up" />
                    <div className="privacyServices">
                        <p>
                            By, continuing, you agree to our{' '}
                            <a href="https://microsoft.com">terms of services</a> and{' '}
                            <a href="https://google.com"> privacy policy</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
