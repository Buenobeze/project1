import {Button, Input, Stack, Text} from "@chakra-ui/react";

export default function AddCourseForm() {
    return (
        <div style={{marginTop: "20px", width: "600px"}}>
            <Stack spacing={6}>
                <Text style={{fontSize: "15px", fontWeight: "700"}} variant="underText">Please fill in course information accurately for a more accurate filtering process.</Text>
                <div style={{border: "solid #D8D8D8", padding: "20px", borderRadius: "25px"}}>
                    <Stack spacing={5}>
                        <Stack spacing={3}>
                            <div>
                                <Text as="span">Course code</Text>
                                <Text as="span" color="red"> *</Text>
                                <Input style={{borderRadius: "10px"}} size="sm" placeholder="Course code" />
                            </div>
                            <div>
                                <Text as="span">Course title</Text>
                                <Text as="span" color="red"> *</Text>
                                <Input style={{borderRadius: "10px"}} size="sm" placeholder="Course title" />
                            </div>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <div style={{paddingRight: "10px"}}>
                                    <Text as="span">Class ID</Text>
                                    <Text as="span" color="red"> *</Text>
                                    <Input style={{borderRadius: "10px"}} size="sm" placeholder="Class ID" />
                                </div>
                                <div style={{paddingRight: "10px"}}>
                                    <Text as="span">Discussion ID</Text>
                                    <Text as="span" color="red"> *</Text>
                                    <Input style={{borderRadius: "10px"}} size="sm" placeholder="Discussion ID" />
                                </div>
                                <div style={{paddingRight: "10px"}}>
                                    <Text as="span">Lab ID</Text>
                                    <Text as="span" color="red"> *</Text>
                                    <Input style={{borderRadius: "10px"}} size="sm" placeholder="Lab ID" />
                                </div>
                            </div>
                        </Stack>
                        <div style={{width: "25%"}}>
                                <Button colorScheme="messenger">Add Course</Button>
                        </div>
                    </Stack>
                </div>
            </Stack>
        </div>
    );
}