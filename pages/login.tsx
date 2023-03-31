/* eslint-disable react/no-unescaped-entities */
import {Stack, Text, Link} from '@chakra-ui/react';
import LoginView from '../components/LoginView';
import SignUpView from '../components/SignUpView';
import {useState} from 'react';

export default function Login() {
    const [viewState, setViewState] = useState(0);
    if(viewState === 0){
        return (
            <div style={{paddingTop: '115px', margin: 'auto', width: '40%', textAlign: 'center'}}>
                <Stack spacing={5}>
                    <LoginView />
                    <Text variant="underText">Don't have an account? <Link onClick={() => setViewState(1)}>Sign up</Link></Text>
                </Stack>
            </div>
        );
    } else if(viewState === 1){
        return (
            <div style={{paddingTop: '115px', margin: 'auto', width: '40%', textAlign: 'center'}}>
                <Stack spacing={5}>
                <SignUpView />
                <Text variant="underText">Already have an account? <Link onClick={() => setViewState(0)}>Log in</Link></Text>
                </Stack>
            </div>
        );
    }
}