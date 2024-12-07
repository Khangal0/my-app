import List from "@/Project/List";

const container = () => {

const name = [
    {
      img: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
      name: "James King",
      work: "President and CEO"
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      name: "Julie Taylor",
      work: "VP of Marketing"
    },
    {
      img: "https://i.pinimg.com/236x/10/fd/72/10fd72124736cfa1b9840c5ee543b0cf.jpg",
      name: "Eugene Lee",
      work: "CFO"
    },
    {
      img: "https://i.pinimg.com/564x/3c/1c/73/3c1c7364ed3445e25235b032ebc1dfe5.jpg",
      name: "John Williams",
      work: "VP of Engineering"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDm4jAhRUxSaBVwbc-a1YLqGtMpW0SzV_MOg&s",
      name: "Ray Moore",
      work: "VP of Sales"
    },
    {
      img: "https://i.pinimg.com/474x/af/09/3e/af093e299ac9fcf6300b59bb62024dce.jpg",
      name: "Paul Jones",
      work: "QA Manager"
    },
  ]

  return(

        <div className="page">
        <div className="body">
          <div className="header">Employee Directory</div>


    <div>
      {name.map((data) => {
        return (
          <List
          img ={data.img}
          name={data.name}
          work={data.work}
          />
        )
      })
      } 
    </div>
    </div>
    </div>
  )


    

}

export default container;