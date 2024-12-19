import { Products } from "@/views/products";
import { Suspense } from "react";

export default function ProductsRoot() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Products />
		</Suspense>
	);
}
