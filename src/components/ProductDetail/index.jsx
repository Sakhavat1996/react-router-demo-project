import { useNavigate, useParams } from "react-router";
import { productData } from "./data";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const goToBack = () => {
    navigate("/products");
  };
  return (
    <>
      <button onClick={goToBack}>Back</button>
      <h1>MARKA : {id.toLocaleUpperCase()}</h1>
      <ul>
        <li>Year: {productData[id].year}</li>
        <li>Model: {productData[id].model}</li>
      </ul>
    </>
  );
}
