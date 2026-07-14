import AddToCart from "@/components/AddToCart";
import Lightbox from "@/components/Lightbox";

export default function MainContent() {
	const discountedPrice = 125;
	const regularPrice = 250;
	const discount = "50%";

	return (
		<main className="flex">
			<div className="w-full">
				<div className="flex flex-col gap-y-300">
					<div className="flex">
						<Lightbox />
					</div>
					<div className="flex flex-col gap-y-400 px-300 md:px-0">
						<div className="flex flex-col gap-y-200">
							<p className="text-preset-6 text-grey-500 uppercase">
								sneaker company
							</p>
							<h1 className="text-grey-950 text-preset-2 capitalize">
								Fall Limited Edition Sneakers
							</h1>
							<p className="text-grey-500 text-preset-4">
								These low-profile sneakers are your perfect casual wear
								companion. Featuring a durable rubber outer sole, they’ll
								withstand everything the weather can offer.
							</p>
						</div>
						<div className="flex gap-x-200">
							<p
								className="text-preset-2"
								aria-label="price after 50% discount"
							>{`$${discountedPrice.toFixed(2)}`}</p>
							<span
								className="bg-grey-950 inline-flex h-[27px] w-[51px] items-center justify-center rounded-md font-bold text-white"
								aria-label="discount percentage"
							>
								{discount}
							</span>
							<p
								className="text-grey-500 ml-auto leading-[26px] font-bold line-through"
								aria-label="regular retail price"
							>{`$${regularPrice.toFixed(2)}`}</p>
						</div>
						<div className="flex flex-col gap-y-200">
							<AddToCart />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
