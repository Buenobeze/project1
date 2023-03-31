import {Box, Image, Heading, Text, Icon, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
ModalBody, ModalCloseButton, useDisclosure, Divider} from "@chakra-ui/react";
import { MouseEventHandler, useState} from "react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import CourseListItemLower from "./CourseListItemLower";
import CourseListItemUpper from "./CourseListItemUpper";
import ProfileReadView from "./ProfileReadView";

interface ProfileSummaryBoxProps{
    profileImage: string;
    name: string;
    major: string;
    gradDate: string;
    userBio: string;
    pronouns: string;
    fbURL: string;
    igURL: string;
    scURL: string;
    likeClick: MouseEventHandler;
}

export default function ProfileSummaryBox(props: ProfileSummaryBoxProps){
    const [heartView, changeHeartView] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const data = [{
        id: 0,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 1,
        courseListing: "EECS 16A",
        courseFullName: "Designing Information Devices and Systems",
        classNumber: "1",
        classDis: "105",
        classLab: "123",
    }, {
        id: 2,
        courseListing: "COMPSCI 61B",
        courseFullName: "Algorithms",
        classNumber: "13234",
        classDis: "1",
        classLab: "123",
    }, {
        id: 3,
        courseListing: "ANTHRO 2AC",
        courseFullName: "Introduction to Archaeology",
        classNumber: "13234",
        classDis: "105",
        classLab: "1",
    }, {
        id: 4,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 5,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 6,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 7,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 8,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }, {
        id: 9,
        courseListing: "COMPSCI 61A",
        courseFullName: "Introduction to Progamming and Program Design and Pretty Much Everything Programming",
        classNumber: "13234",
        classDis: "105",
        classLab: "123",
    }];
    return (
        <div style={{marginTop: "20px", marginLeft: "50px"}}>
            <Box style={{cursor: "pointer"}} onClick={onOpen} backgroundColor="#FFFFFF" maxW='sm' borderWidth='2px' borderRadius='3xl' overflow='hidden'>
                <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
                    <ModalOverlay />
                    <ModalContent maxW="1200px">
                        <ModalCloseButton />
                        <ModalBody>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{margin: "auto"}}>
                                    <ProfileReadView profileImage={"https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} name={"John Doe"} major={"Computer Science"} gradDate={"2025"} userBio={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed metus dui. Integer et aliquam velit."} fbURL={"https://www.facebook.com/"} igURL={"https://www.instagram.com/"} scURL={"https://www.snapchat.com/en-US"} pronouns={"He/Him"}/>
                                </div>
                                <div style={{marginTop: "20px", marginBottom: "20px", width: "575px"}}>
                                    <Text style={{paddingBottom: "10px", textAlign: "center", color: "#A73CFC", fontWeight: "700"}}>Classes</Text>
                                    <div>
                                        <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                                        <div style={{height: "500px", overflowY: "auto", overflowX: "hidden"}}>
                                            {data.map(function(d) {
                                                return (
                                                    <div key={d.id}>
                                                        <div style={{display: "grid", gridTemplateColumns: "550px", }}>
                                                            <CourseListItemUpper courseListing={d.courseListing} courseFullName={d.courseFullName} />
                                                        </div>
                                                        <div style={{display: "grid", gridTemplateColumns: "552px", }}>
                                                            <CourseListItemLower classNumber={d.classNumber} classDis={d.classDis} classLab={d.classLab} />
                                                        </div>
                                                        <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </Modal>
                <Box p="6" pb="0" style={{display: "flex", flexDirection: "row"}}>
                    <Image style={{width: "100px", height: "100px", borderRadius: "100%"}} src={props.profileImage === "" ? "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg": props.profileImage} alt="Image not found"/>
                    <div style={{paddingTop: "15px", paddingLeft: "30px"}}>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <Heading style={{ paddingBottom: "5px" }} size="md">{props.name}</Heading>
                            <Text style={{paddingTop: "4px", paddingLeft: "10px", fontWeight: "700"}} variant="underText">{props.pronouns}</Text>
                        </div>
                        <Text>{props.major + " Major"}</Text>
                        <Text variant="underText">{"Graduating " + props.gradDate}</Text>
                    </div>
                </Box>
                <Box p='6'>
                    <Text noOfLines={3}>{props.userBio}</Text>
                </Box>
            </Box>
            <Box marginLeft="350px" marginTop="-35px" backgroundColor="#FFFFFF" borderRadius="full" borderWidth='2px'>
                <Box p="1.5" pb="1">
                    <IconButton aria-label='Like profile' variant="like" onClick={props.likeClick} icon={<Icon boxSize="2.5em" _hover={{ color: "#B01E28",}} onMouseOver={() => changeHeartView(1)} onMouseOut={() => changeHeartView(0)} as={heartView === 0 ? AiOutlineHeart: AiFillHeart} />} />
                </Box>
            </Box>
        </div>
    )
}