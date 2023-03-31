import { EditIcon } from "@chakra-ui/icons";
import {Button, CloseButton, Divider, Heading, IconButton, Text} from "@chakra-ui/react";
import Link from "next/link";
import AddCourseForm from "../components/AddCourseForm";
import CourseListItemLower from "../components/CourseListItemLower";
import CourseListItemUpper from "../components/CourseListItemUpper";

export default function StartCourses(){
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
        <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{margin: "auto", textAlign: "center", width: "400px"}}>
                <Heading size="xl">Next, add your current courses to find students who share your learning interests.</Heading>
            </div>
            <div style={{marginLeft: "auto", marginRight: "100px", marginTop: "30px"}}>
                <div style={{width: "600px"}}>
                    <Text style={{paddingBottom: "10px", textAlign: "center", color: "#A73CFC", fontWeight: "700"}}>My Classes</Text>
                    <div>
                        <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                        <div style={{height: "300px", overflowY: "auto", overflowX: "hidden"}}>
                            {data.map(function(d) {
                            return (
                                <div key={d.id}>
                                    <div style={{display: "grid", gridTemplateColumns: "550px 5px", }}>
                                        <CourseListItemUpper courseListing={d.courseListing} courseFullName={d.courseFullName} />
                                        <IconButton style={{marginTop: "10px"}} aria-label="edit course" icon={<EditIcon />} colorScheme="gray" variant="ghost"></IconButton>
                                    </div>
                                    <div style={{display: "grid", gridTemplateColumns: "552px 5px", }}>
                                        <CourseListItemLower classNumber={d.classNumber} classDis={d.classDis} classLab={d.classLab} />
                                        <CloseButton />
                                    </div>
                                    <Divider style={{backgroundColor: "#D8D8D8"}} variant="solid" />
                                </div>
                            );
                        })}
                        </div>
                    </div>
                    <AddCourseForm></AddCourseForm>
                </div>
            </div>
            <Link href={{pathname: "/myprofile"}} style={{marginRight: "50px", marginTop: "725px"}}><Button variant="start">Finish Setup</Button></Link>
        </div>
    );
}