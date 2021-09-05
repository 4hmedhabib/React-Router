import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<section>
			<h1>Products Page</h1>
			<ul>
				<li>
					<Link to="/product-detail/p1">A Book</Link>
				</li>
				<li>
					<Link to="/product-detail/p2">A Carplet</Link>
				</li>
				<li>
					<Link to="/product-detail/p3">Online Courses</Link>
				</li>
			</ul>
		</section>
	);
};

export default Products;
