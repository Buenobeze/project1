import { CloseIcon } from "@chakra-ui/icons";
import { Image, Heading, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody,
    Text,
    Divider} from "@chakra-ui/react";
import { MouseEventHandler } from "react";
import CourseListItemLower from "./CourseListItemLower";
import CourseListItemUpper from "./CourseListItemUpper";
import ProfileReadView from "./ProfileReadView";



interface ProfileSummaryBoxProps{
    color: string;
    profileImage: string;
    name: string;
    major: string;
    gradDate: string;
    userBio: string;
    pronouns: string;
    fbURL: string;
    igURL: string;
    scURL: string;
    closeClick: MouseEventHandler;
}

export default function OutgoingListItem(props: ProfileSummaryBoxProps){
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
        <div style={{ backgroundColor: props.color, padding: "10px", display: "flex", flexDirection: "row", border: "solid #E3E3E3", borderRadius: "5px"}}>
            <div onClick={onOpen} style={{display: "flex", flexDirection: "row",cursor: "pointer", width: "100%"}}>
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
                <Image style={{borderRadius: "100%", width: '50px', height: '50px', marginRight: "30px"}} src={props.profileImage === "" ? "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg": props.profileImage} alt={"Image not found"} />
                <Heading style={{marginTop: "12px", fontSize: "20px", fontWeight: "590"}}>{props.name}</Heading>
            </div>
            <div style={{marginLeft: "auto", display: "flex", flexDirection: "row", marginRight: "10px"}}>
                <div onClick={props.closeClick} style={{marginTop: "6px"}}><IconButton variant="ghost" icon={<CloseIcon />} aria-label={"Delete element"}/></div>
            </div>
        </div>
    );
}