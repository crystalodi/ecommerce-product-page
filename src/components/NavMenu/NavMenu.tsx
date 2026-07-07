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

	const navMenuListItemClasses = cn("capitalize", {
		"text-grey-500 text-preset-3-regular text-[15px]": variant === "desktop",
		"text-grey-950 text-preset-3 text-[18px]": variant === "mobile",
	});

	return (
		<nav aria-label={navMenuAriaLabel}>
			<ul className={navMenuContainerClasses}>
				<li className={navMenuListItemClasses}>
					<span>collections</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>men</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>women</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>about</span>
				</li>
				<li className={navMenuListItemClasses}>
					<span>contact</span>
				</li>
			</ul>
		</nav>
	);
}
