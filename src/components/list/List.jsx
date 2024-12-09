import "./list.scss";
import Card from "../card/Card";
import { listData } from "../../lib/dummyData";
export default function List() {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card className="card" key={item.id} item={item} />
      ))}
    </div>
  );
}
