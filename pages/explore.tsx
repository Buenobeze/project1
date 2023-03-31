import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import {Grid, useToast} from "@chakra-ui/react";
import ProfileSummaryBox from "../components/ProfileSummaryBox";

export default function Explore() {
    const router = useRouter();
    const toast = useToast();
    const toastF = () =>
        toast({
          title: 'Friend Request Sent',
          description: "Your study group friend request was successfully sent.",
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
    const data = [
        {
            id: 0,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 1,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 2,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 3,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 4,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 5,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 6,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 7,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 8,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 9,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 10,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 11,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },
        {
            id: 12,
            profileImage: "",
            name: "John Doe",
            major: "Computer Science",
            gradDate: "2025",
            userBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit.",
            fbURL: "https://www.facebook.com/",
            igURL: "https://www.instagram.com/",
            scURL: "https://www.snapchat.com/en-US",
            pronouns: "He/Him",
        },

    ];
    return (
        <div>
            <NavBar profileImage={""} page={router.pathname} />
            <div style={{display: "flex", flexDirection: "row"}}>
                <div style={{backgroundColor: "#fafafa", width: "1250px"}}>
                    <Grid style={{height: "675px", overflowY: "auto", overflowX: "hidden", overflow: "auto"}} templateColumns="repeat(2, 0.01fr)">
                        {data.map(d => <div style={{marginLeft: "60px", marginTop: "50px"}} key={d.id}><ProfileSummaryBox profileImage={d.profileImage} name={d.name} major={d.major} gradDate={d.gradDate} userBio={d.userBio} pronouns={d.pronouns} fbURL={d.fbURL} igURL={d.igURL} scURL={d.scURL} likeClick={toastF} /></div>)}
                    </Grid>
                </div>
            </div>
        </div>
    );
}