import { Outlet, NavLink, useSearchParams, useLocation, useParams, useNavigate} from 'react-router-dom';
import { getInvoices } from "../data";

export default function Doc(){
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();
    let location = useLocation();
    let params = useParams();
    let navigate = useNavigate();
    console.log(location, params, searchParams);
    console.log(Array.from(searchParams))
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
                    let arr = Array.from(searchParams);
                    console.log(searchParams, arr);
                    if(searchParams.get('filter') === null && filter){
                        arr.push(['filter', filter])
                    }
                    let str = '';
                    arr.forEach(([key, value]) => {
                        if(key === 'filter'){
                            value = filter;
                        }
                        str+= (key + '=' + value + '&');
                    })
                    console.log(str, searchParams.get('filter'));
                    navigate("/Doc?" + str)
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
                    to={`/Doc/${invoice.number}${location.search}`}
                    className={({isActive}) => {
                        return isActive? 'red': '';
                    }}
                    key={invoice.number}
                    end
                >
                    {invoice.name}
                </NavLink>
            ))}
            </div>
            <Outlet />
        </div>
    )
}