import IconMenu from "@/assets/icons/icon-menu.svg?react";
import Logo from "@/assets/icons/logo.svg?react";
import IconCart from "@/assets/icons/icon-cart.svg?react";
import imageAvatar from "@/assets/images/image-avatar.png";
import NavMenu from "@/components/NavMenu";

export default function Header() {
	return (
		<header className="flex justify-center md:justify-start">
			<div className="flex w-[87.33%] justify-between md:w-full md:items-center">
				<div className="flex items-center justify-between gap-200 lg:gap-700">
					<button
						aria-label="Open Menu"
						className="cursor-pointer pt-1.25 lg:hidden"
					>
						<IconMenu width={16} height={15} />
					</button>
					<Logo width={137.5} height={20} />
					<div className="hidden lg:block">
						<NavMenu variant="desktop" />
					</div>
				</div>
				<div className="flex items-center justify-between gap-300 md:gap-600">
					<button aria-label="Open Cart" className="cursor-pointer">
						<IconCart width={21.82} height={20} />
					</button>
					<img
						src={imageAvatar}
						className="h-6 w-6 md:h-[50px] md:w-[50px]"
						alt="user avatar"
					/>
				</div>
			</div>
		</header>
	);
}
