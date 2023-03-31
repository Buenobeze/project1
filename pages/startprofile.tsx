/* eslint-disable @next/next/no-img-element */
import {Button, Heading} from "@chakra-ui/react";
import NextLink from "next/link";
import ProfileEditView from "../components/ProfileEditView";

export default function StartProfile(){
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{margin: "auto", textAlign: "center", width: "400px"}}>
                <Heading size="xl">Start building your profile by first entering some basic information.</Heading>
            </div>
            <div style={{margin: "auto"}}>
                <div style={{width: "750px"}}>
                <ProfileEditView profileImage={""} name={"Enter your full name"} major={"Enter your major area of study"} gradDate={"Enter your esimated or expected date of graduation"} userBio={"Enter a short biography, introducing yourself and highlighting your academic and nonacademic interests"} pronouns={"Enter your pronouns"} fbURL={"Enter your facebook profile link"} igURL={"Enter your instagram profile link"} scURL={"Enter your snapchat profile link"} />
                </div>
            </div>
            <NextLink href={{pathname: "/startcourses"}} style={{marginRight: "50px", marginTop: "725px"}}><Button variant="start">Next</Button></NextLink>
        </div>
    );
}