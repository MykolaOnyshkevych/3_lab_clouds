import TableItem from "../TableItem/TableItem";
import styles from "./Table.module.css";

const Table = ({ parcels }) => {
  console.log(parcels)
  return (
    <div className={styles.container}>
      <div className={styles.headersContainer}>
        <h2>Id</h2>
        <h3>Device Id</h3>
        <h3>Territory</h3>
        <h3>Traectory</h3>
        <h3>Details</h3>
        <h3>Date</h3>
      </div>
      <div className={styles.itemContainer}>
        {parcels.map((x) => (
          <TableItem {...x} key={x.id} />
        ))}
      </div>
    </div>
  );
};

export default Table;
