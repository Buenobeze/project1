import {IconButton, Text, CloseButton, Divider, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";

interface CourseListItemLowerProps{
    classNumber: string;
    classDis: string;
    classLab: string;
}


export default function CourseListItem(props: CourseListItemLowerProps) {
    return (
        <div style={{display: "grid", gridTemplateColumns: "205px 174px 173px", }}>
            <Text style={{paddingTop: "4px"}} variant="courseUnder">{"Class # " + props.classNumber}</Text>
            <Text style={{paddingTop: "4px"}} variant="courseUnder">{"DIS " + props.classDis}</Text>
            <Text style={{paddingTop: "4px"}} variant="courseUnder">{"LAB " + props.classLab}</Text>
        </div>
    );
}