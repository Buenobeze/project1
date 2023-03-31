import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Button, useToast, Grid} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react"
import MatchedListItem from "../components/MatchedListItem";
import NavBar from "../components/NavBar";
import OutgoingListItem from "../components/OutgoingListItem";
import ProfileSummaryBox from "../components/ProfileSummaryBox";

export default function Requests() {
    const router = useRouter();
    const toast = useToast();
    const acceptF = () =>
        toast({
        title: 'Friend Request Accepted',
        description: "Your study group friend request was successfully accepted.",
        status: 'success',
        duration: 2000,
        isClosable: true,
        });
    const deleteFriendF = () =>
        toast({
            title: "Friend Deleted",
            description: "You have successfully deleted this friend.",
            status: 'success',
            duration: 2000,
            isClosable: true,

        });
    const deleteRequestF = () =>
    toast({
        title: "Request Deleted",
        description: "You have successfully deleted this request.",
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
    const [friendsState, changeFriendsState] = useState(0); //0 is friends, 1 is incoming, 2 is outgoing
    let mainState = "Friends";
    let otherState = (<div><MenuItem onClick={() => changeFriendsState(1)}>Incoming Requests</MenuItem> <MenuItem onClick={() => changeFriendsState(2)}>Outgoing Requests</MenuItem></div>);
    let pageState = <div style={{width: "1300px", margin: "auto", marginTop: "20px", height: "550px", overflowY: "auto", overflowX: "hidden", overflow: "auto"}}>
        {data.map(function(d){
        return (
            <MatchedListItem key={d.id} color={d.id % 2 === 0 ? "#E3E3E3" : "#FFFFFF"} profileImage={d.profileImage} name={d.name} fbURL={d.fbURL} igURL={d.igURL} scURL={d.scURL} closeClick={deleteFriendF} />
        );
    })}
    </div>
    if(friendsState === 1){
        mainState = "Incoming Requests";
        otherState = (<div><MenuItem onClick={() => changeFriendsState(0)}>Friends</MenuItem> <MenuItem onClick={() => changeFriendsState(2)}>Outgoing Requests</MenuItem></div>);
        pageState = <div style={{backgroundColor: "#fafafa", borderTop: "solid #D8D8D8", height: "550px", overflowY: "auto", overflowX: "hidden", overflow: "auto"}}>
            <Grid templateColumns="repeat(3, 0.1fr)">
                {data.map(d => <ProfileSummaryBox key={d.id} profileImage={d.profileImage} name={d.name} major={d.major} gradDate={d.gradDate} userBio={d.userBio} pronouns={d.pronouns} fbURL={d.fbURL} igURL={d.igURL} scURL={d.scURL} likeClick={acceptF} />)}    
            </Grid>
        </div>
    }
    else if(friendsState === 2){
        mainState = "Outgoing Requests";
        otherState = (<div><MenuItem onClick={() => changeFriendsState(0)}>Friends</MenuItem> <MenuItem onClick={() => changeFriendsState(1)}>Incoming Requests</MenuItem></div>);
        pageState = <div style={{width: "1300px", margin: "auto", marginTop: "20px", height: "550px", overflowY: "auto", overflowX: "hidden", overflow: "auto"}}>
        {data.map(function(d){
        return (
            <OutgoingListItem key={d.id} color={d.id % 2 === 0 ? "#E3E3E3" : "#FFFFFF"} profileImage={d.profileImage} name={d.name} fbURL={d.fbURL} igURL={d.igURL} scURL={d.scURL} closeClick={deleteRequestF} major={d.major} gradDate={d.gradDate} userBio={d.userBio} pronouns={d.pronouns} />
        );
    })}
    </div>
    }
    return (
        <div>
            <NavBar profileImage={""} page={router.pathname} />
            <div style={{marginTop: "30px", marginLeft: "70px", marginBottom: "20px"}}>
                <Menu>
                    <Button variant="navbar" as={MenuButton} rightIcon={<ChevronDownIcon />}>
                        {mainState}
                    </Button>
                    <MenuList>
                        {otherState}
                    </MenuList>
                </Menu>
            </div>
            {pageState}
        </div>
    );
}