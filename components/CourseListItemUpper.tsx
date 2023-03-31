import {IconButton, Text, CloseButton, Divider, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";

interface CourseListItemUpperProps{
    courseListing: string;
    courseFullName: string;
}


export default function CourseListItemUpper(props: CourseListItemUpperProps) {
    return (
        <div>
            <Popover trigger="hover" openDelay={400} closeDelay={0}>
            <PopoverTrigger>
                <Text variant="courseMain" noOfLines={1}>{props.courseListing + " - " + props.courseFullName}</Text>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverBody style={{fontWeight: "590", color: "#414141",}}>{props.courseListing + " - " + props.courseFullName}</PopoverBody>
            </PopoverContent>
            </Popover>
        </div>
    );
}