import Link from "next/link";

const List = (props) => {
    return(
        <div className="employeeList">
            <img src={props.img}/>
            <div className="NW">
                <Link href="/info">
              <div>{props.name}</div>
              </Link>
              <div className="work">{props.work}</div>
            </div>
        </div>
    )
}


export default List;