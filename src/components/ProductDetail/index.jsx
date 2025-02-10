import { useLocation, useNavigate, useParams } from "react-router";
import data from "../data";
import { Link } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();
  const path = useLocation();
  console.log(path)
  const navigate = useNavigate();
  console.log(history);
  const goToBack = () => {
    navigate("/products");
  };
  return (
    <>
      <button onClick={goToBack}>Back</button>
      <h1>MARKA : {id.toLocaleUpperCase()}</h1>
      <ul>
        <li>Year: {data[id].year}</li>
        <li>Model: {data[id].model}</li>
      </ul>
    </>
  );
}
