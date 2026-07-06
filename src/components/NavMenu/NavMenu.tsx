import { cn } from "@/lib/utils";

interface NavMenuProps {
	variant: "mobile" | "desktop";
}

export default function NavMenu({ variant }: NavMenuProps) {
	const navMenuAriaLabel =
		variant === "mobile" ? "Mobile menu items" : "Desktop menu items";

	const navMenuContainerClasses = cn("flex list-none", {
		"flex-col gap-y-300": variant === "mobile",
		"gap-x-400": variant === "desktop",
	});

	const navMenuListItemClasses = cn({
		"text-grey-500 text-preset-3-regular text-[15px]": variant === "desktop",
		"text-grey-950 text-preset-3 text-[18px]": variant === "mobile",
	});

	return (
		<nav aria-label={navMenuAriaLabel}>
			<ul className={navMenuContainerClasses}>
				<li className={navMenuListItemClasses}>
					<span>Collections</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>Men</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>Women</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>About</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>Contact</span>
				</li>
			</ul>
		</nav>
	);
}
