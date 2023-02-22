import React from "react";
import { Card } from "../Card/Card";

export const CardList = (props) => {
	return (
		<div className="row gap-3 justify-content-center">
			{props.product.map((product) => (
				<Card key={product.id} product={product} />
			))}
		</div>
	);
};
