import {
	Text,
	HStack,
	Stack,
	Select,
	Button,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
} from "@chakra-ui/react";
import { FC } from "react";

export default function Index() {
	return (
		<Stack>
			<Header />
		</Stack>
	);
}

const Header: FC = () => {
	return (
		<HStack
			bg="black"
			w="100%"
			px="24px"
			py="32px"
			color="white"
			align="center"
			justify="space-between"
		>
			<HStack w="100%" spacing="16px">
				<Button color="black">New Array</Button>
				<Text fontSize="md" whiteSpace="nowrap">
					Array Size
				</Text>
				<Slider aria-label="slider-ex-1" defaultValue={30} w="300px">
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb />
				</Slider>
			</HStack>
			<HStack>
				<Select placeholder="Select Method" w="300px">
					<option value="merge">Merge Sort</option>
					<option value="quick">Quick Sort</option>
					<option value="heap">Heap Sort</option>
					<option value="bubble">Bubble Sort</option>
				</Select>
				<Button colorScheme="blue">Sort!</Button>
			</HStack>
		</HStack>
	);
};
