import {Heading, Text, Input, Stack, Button} from '@chakra-ui/react';
import Link from 'next/link';

export default function Login() {
    return (
        <div>
            <Heading variant="logo" size="lg" style={{marginBottom: "50px"}}>Study Cubbies</Heading>
            <Stack spacing={5}>
                <Heading size="2xl">Log in.</Heading>
                <Text variant="underText">Enter your details to get signed in</Text>
                <Input style={{width: "75%", marginLeft: 'auto', marginRight: 'auto'}} placeholder="Email"/>
                <Input style={{width: "75%", marginLeft: 'auto', marginRight: 'auto'}} placeholder="Password"/>
                <Link href={{pathname: "/myprofile", }} style={{width: "100%", marginLeft: 'auto', marginRight: 'auto'}}><Button variant="login">
                Log In
                </Button></Link>
            </Stack>
        </div>
    );
}