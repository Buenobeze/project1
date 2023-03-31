import {Heading, Text, Button, Image} from '@chakra-ui/react';
import Link from "next/link";

interface navBarProps {
  profileImage: string;
  page: string;
}

const NavBar = (props: navBarProps) => {
  const explore = props.page === "/explore" ? <Text style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto"}} variant="currPageNavBar">Explore</Text>: <Link style={{marginLeft: "auto", marginTop: "auto", marginBottom: "auto"}} href="/explore" passHref><Text variant="navbar">Explore</Text></Link>;
  const friends = props.page === "/requests" ? <Text style={{ marginTop: "auto", marginBottom: "auto"}} variant="currPageNavBar">Friends</Text>: <Link style={{marginTop: "auto", marginBottom: "auto"}} href="/requests" passHref><Text variant="navbar">Friends</Text></Link>;
  const profile = props.page === "/myprofile" ? <Text style={{marginTop: "auto", marginBottom: "auto"}} variant="currPageNavBar">Profile</Text>: <Link style={{marginTop: "auto", marginBottom: "auto"}} href="/myprofile" passHref><Text variant="navbar">Profile</Text></Link>;
  return (
      <div style={{padding: "20px", display: "flex", flexDirection: "row", borderBottom: "solid #D8D8D8"}}>
        <Image draggable="false" style={{borderRadius: "100%", width: '57px', height: '57px'}} src={props.profileImage === "" ? "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg": props.profileImage} alt="Image not found" />
        <Heading style={{paddingLeft: "25px", marginTop: "auto", marginBottom: "auto"}} variant="logo" size="lg">Study Cubbies</Heading>
        {explore}
        {friends}
        {profile}
        <Link style={{marginTop: "auto", marginBottom: "auto"}} href="/login" passHref><Button variant="navbar">Sign Out</Button></Link>
      </div>
  );
};

export default NavBar;