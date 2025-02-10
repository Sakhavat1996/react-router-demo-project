import { useNavigate, useParams } from "react-router";
import data from "../data";

export default function UsersData() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { name, email, age } = data.find((item) => item.path === id);
  const handleBack = ()=>{
    navigate('/users')
  }
  return (
    <div className="user-data">
      <button className="btn btn-back" onClick={handleBack}>Geri</button>
      <h2>{name} adlı vətəndaşın şəxsi məlumatları</h2>
      <table cellPadding={15} cellSpacing={5} border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
