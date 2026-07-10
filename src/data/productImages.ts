import productImage1 from "@/assets/images/image-product-1.jpg";
import productImage2 from "@/assets/images/image-product-2.jpg";
import productImage3 from "@/assets/images/image-product-3.jpg";
import productImage4 from "@/assets/images/image-product-4.jpg";
import productThumbnail1 from "@/assets/images/image-product-1-thumbnail.jpg";
import productThumbnail2 from "@/assets/images/image-product-2-thumbnail.jpg";
import productThumbnail3 from "@/assets/images/image-product-3-thumbnail.jpg";
import productThumbnail4 from "@/assets/images/image-product-4-thumbnail.jpg";

export const productImages = [
	{
		id: 1,
		image: productImage1,
		thumbnail: productThumbnail1,
		alt: "Fall limited edition sneakers front view",
	},
	{
		id: 2,
		image: productImage2,
		thumbnail: productThumbnail2,
		alt: "Fall limited edition sneakers side view",
	},
	{
		id: 3,
		image: productImage3,
		thumbnail: productThumbnail3,
		alt: "Fall limited edition sneakers angled detail view",
	},
	{
		id: 4,
		image: productImage4,
		thumbnail: productThumbnail4,
		alt: "Fall limited edition sneakers pair view",
	},
] as const;
