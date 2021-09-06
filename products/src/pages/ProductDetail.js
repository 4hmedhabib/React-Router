import { useParams } from 'react-router';

const ProductDetail = () => {
	const params = useParams();
	console.log(params.productId);

	return (
		<div>
			<h1>The Product Detail</h1>
			<p>{params.productId}</p>
		</div>
	);
};

export default ProductDetail;
