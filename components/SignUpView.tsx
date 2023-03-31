import {Heading, Text, Input, Stack, Button} from '@chakra-ui/react';
import Link from 'next/link';

export default function SignUp() {
    return (
        <div>
            <Heading variant="logo" size="lg" style={{marginBottom: "50px"}}>Study Cubbies</Heading>
            <Stack spacing={5}>
                <Heading size="2xl">Create your account.</Heading>
                <Text variant="underText">Enter your details to get started</Text>
                <Input style={{width: "75%", marginLeft: 'auto', marginRight: 'auto'}} placeholder="Username"/>
                <Input style={{width: "75%", marginLeft: 'auto', marginRight: 'auto'}} placeholder="youremail@example.com" />
                <Input style={{width: "75%", marginLeft: 'auto', marginRight: 'auto'}} placeholder="Password"/>
                <Input style={{width: "75%", marginLeft: 'auto', marginRight: 'auto'}} placeholder="Confirm Password"/>
                <Link href={{pathname: "/startprofile"}} style={{width: "100%", marginLeft: 'auto', marginRight: 'auto'}}><Button variant="login">
                Sign Up
                </Button></Link>
            </Stack>
        </div>
    );
}