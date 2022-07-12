import {Link, Outlet, NavLink, useSearchParams} from 'react-router-dom';
import { getInvoices } from "../data";

export default function Doc(){
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            <h2>this is doc</h2>
            <div className='test' style={{display: 'flex'}}>
            <input
                value={searchParams.get("filter") || ""}
                onChange={(event) => {
                    let filter = event.target.value;
                    if (filter) {
                    setSearchParams({ filter });
                    } else {
                    setSearchParams({});
                    }
                }}
            />
            {invoices
            .filter((invoice) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let name = invoice.name.toLowerCase();
                return name.startsWith(filter.toLowerCase());
            }).map((invoice) => (
                // <Link
                //     style={{ display: "block", margin: 0 }}
                //     to={`/Doc/${invoice.number}`}
                //     key={invoice.number}
                // >
                //     {invoice.name}
                // </Link>
                <NavLink
                    style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    };
                    }}
                    to={`/Doc/${invoice.number}`}
                    className={({isActive}) => {
                        return isActive? 'red': '';
                    }}
                    key={invoice.number}
                >
                    {invoice.name}
                </NavLink>
            ))}
            </div>
            <Outlet />
        </div>
    )
}