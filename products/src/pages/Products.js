import { Link } from 'react-router-dom';

const Products = () => {
	return (
		<section>
			<h1>Products Page</h1>
			<ul>
				<li>
					<Link to="/products/p1">A Book</Link>
				</li>
				<li>
					<Link to="/products/p2">A Carplet</Link>
				</li>
				<li>
					<Link to="/products/p3">Online Courses</Link>
				</li>
			</ul>
		</section>
	);
};

export default Products;
