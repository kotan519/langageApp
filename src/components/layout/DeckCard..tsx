import { Box, Stack, Text } from "@chakra-ui/react"

type Props = {
    id: number;
    title: string;
    introduction: string;
    percentage: number;
}

export const DeckCard = (props: Props) => {
    const { title, introduction, percentage } = props;
    return (
        <Box w="260px" h="150px" bg="yellow.200" borderRadius="10px" shadow="md" p={4} _hover={{ cursor: "pointer", opacity: 0.8 }}>
            <Stack textAlign="center">
                <Text fontSize="lg" fontWeight="bold">{title}</Text>
                <Text fontSize="sm" color="black">{introduction}</Text>
                <Text fontSize="lg" color="black">{percentage}%完了</Text>
            </Stack>
        </Box>    
    )
}