import React from "react";

export const Card = (props) => {
	const product = props.product;
	return (
		<div key={product.id} className="col-12 col-sm-4 col-md-3 card  p-0">
			<img src={product.image} className="card-img-top" alt={product.title} />
			<div className="card-body">
				<h5 className="card-title">{product.title}</h5>
				<p className="card-text">{product.description}</p>
				<p className="card-text">{product.category}</p>
				<p className="card-text">{product.price}</p>
			</div>
		</div>
	);
};
