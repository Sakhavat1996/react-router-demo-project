import { Link } from "react-router";
import data from "../data";

export default function Users() {
  return (
    <div className="users">
      {data.map((item) => (
        <Link to={item.path} key={item.id}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
