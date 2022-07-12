import {Link, Outlet} from 'react-router-dom';
import { getInvoices } from "../data";

export default function Doc(){
    let invoices = getInvoices();
    return (
        <div>
            <h2>this is doc</h2>
            <div className='test' style={{display: 'flex'}}>
            {invoices.map((invoice) => (
                <Link
                    style={{ display: "block", margin: 0 }}
                    to={`/test/${invoice.number}`}
                    key={invoice.number}
                >
                    {invoice.name}
                </Link>
            ))}
            </div>
            <Outlet />
        </div>
    )
}