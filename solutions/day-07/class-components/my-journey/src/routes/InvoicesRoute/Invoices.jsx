import { NavLink, Outlet } from "react-router-dom";
import { getInvoices } from "../../utils/data";

export default function Invoices() {
  let invoicesData = getInvoices();
  return (
    <div style={{}}>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoicesData.map((invoiceItem) => {
          return (
            <NavLink className={"navlink-li"}
              to={`/invoices/${invoiceItem.number}`}
              key={invoiceItem.number}
            >
              {invoiceItem.name}
            </NavLink>
          );
        })}
      </nav>
      <Outlet/>
    </div>
  );
}
