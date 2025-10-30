import { Link } from "react-router";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <ul className="links">
        <Link to={"/products/apple"}>Apple</Link>
        <Link to={"/products/samsung"}>Samsung</Link>
        <Link to={"/products/mi"}>Redmi</Link>
      </ul>
    </div>
  );
}
