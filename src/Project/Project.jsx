const Home = () => {
    return(
        <div className="page">
            
            <div className="employeeList">
              <div>{props.name}</div>
              <div>{props.work}</div>
            </div>

        </div>
    )
}

export default Home;