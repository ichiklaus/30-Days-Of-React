import { useParams } from "react-router-dom";
import { getInvoiceNumber } from "../../utils/data";

export default function Invoice() {
    let params = useParams();
    let invoiceNumber = getInvoiceNumber(parseInt(params.invoiceId, 10));
    return (
    <main style={{display: "flex", flexFlow: "row wrap"}}>
        <div style={{margin: "0 auto",}}>
            <h2>Invoice: {params.invoiceId}</h2>
            <h3>Total due: {invoiceNumber.amount}</h3>
            <p> {`Reference: ${invoiceNumber.name} ${invoiceNumber.number}`} </p>
            <p> {`Due date: ${invoiceNumber.due}`} </p>
        </div>
    </main>
    );
  }