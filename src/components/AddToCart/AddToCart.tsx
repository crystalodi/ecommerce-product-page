import { useState } from "react";
import IconPlus from "@/assets/icons/icon-plus.svg?react";
import IconMinus from "@/assets/icons/icon-minus.svg?react";
import IconCart from "@/assets/icons/icon-cart.svg?react";

interface AddToCartProps {
	min?: number;
	max?: number;
	initialValue?: number;
}

export default function AddToCart({
	min = 0,
	max = 99,
	initialValue = 0,
}: AddToCartProps) {
	const [quantity, setQuantity] = useState(initialValue);

	const decrement = () => {
		const next = Math.max(min, quantity - 1);
		setQuantity(next);
	};

	const increment = () => {
		const next = Math.min(max, quantity + 1);
		setQuantity(next);
	};

	return (
		<>
			<div className="bg-grey-50 flex h-700 items-center justify-between rounded-lg p-4">
				<button
					onClick={decrement}
					disabled={quantity <= min}
					aria-label="Decrease quantity"
					className="text-custom-orange-500 hover:opacity-60 disabled:opacity-30"
				>
					<IconMinus />
				</button>
				<span className="text-[16px] leading-[26px] font-bold">{quantity}</span>
				<button
					onClick={increment}
					disabled={quantity >= max}
					aria-label="Increase quantity"
					className="text-custom-orange-500 hover:opacity-60 disabled:opacity-30"
				>
					<IconPlus />
				</button>
			</div>
			<button
				type="button"
				className="bg-custom-orange-500 hover:bg-custom-orange-300 flex cursor-pointer items-center justify-center rounded-[10px] px-[104px] py-4"
			>
				<IconCart
					aria-hidden={true}
					className="mr-[8px] h-[16px] w-[17.46px] shrink-0 [&>g]:fill-[#1D2026] [&>path]:fill-[#1D2026]"
				/>
				<span className="text-grey-950 leading-none font-bold whitespace-nowrap">
					Add to cart
				</span>
			</button>
		</>
	);
}
