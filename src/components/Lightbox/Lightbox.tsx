import { productImages } from "@/data/productImages";
import { useState } from "react";
import IconNext from "@/assets/icons/icon-next.svg";
import IconPrevious from "@/assets/icons/icon-previous.svg";

export default function Lightbox() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const { image, alt } = productImages[selectedIndex];

	const handlePrevious = () => {
		setSelectedIndex(
			(selectedIndex - 1 + productImages.length) % productImages.length
		);
	};

	const handleNext = () => {
		setSelectedIndex((selectedIndex + 1) % productImages.length);
	};

	return (
		<div className="relative h-75 w-full md:h-[290px]">
			<div className="absolute inset-0 flex items-center justify-between bg-transparent px-4">
				<button
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-4 font-bold"
					onClick={handlePrevious}
				>
					<img src={IconPrevious} alt="" />
				</button>
				<button
					className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white p-4 font-bold"
					onClick={handleNext}
				>
					<img src={IconNext} alt="" />
				</button>
			</div>
			<img
				src={image}
				alt={alt}
				className="h-full w-full object-cover object-center md:rounded-[15px] md:object-[50%_63%]"
			/>
		</div>
	);
}
