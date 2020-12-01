import React, {useState, useEffect} from "react";
import DataTable from "../DataTable";
import Nav from "../Nav";
import API from "../../utils/API";
import DataAreaContext from "../../utils/DataAreaContext"

const DataArea = () => {
      const [dataState, setDataState] = useState({
        users: [],
        order: "ascend",
        filteredUsers: [],
        headings: [
          { name: "Name", width: "33%", },
          { name: "Phone", width: "33%", },
          { name: "Email", width: "33%", },
        ]
      });
    
      const handleSort = heading => {
        if (dataState.order === "descend") {
            setDataState({
                order:"ascend"
            })
        } else{
            setDataState({
                order:"descend"
            })
        }
    
  
        const sortName = (a, b) => {
          if (dataState.order === "ascend") {
            if (a[heading] === undefined) {
              return 1;
            } else if (b[heading] === undefined) {
              return -1;
            } else if (heading === "name") {
              return a[heading].first.localeCompare(b[heading].first);
            } else {
              return b[heading] - a[heading];
            } 
          } else {
        if (a[heading] === undefined){
            return 1;
        } else if (b[heading] === undefined){
            return -1;
        } else if (heading ==="name"){
            return b[heading].first.localeCompare(a[heading].first);
        } else {
return b[heading]-  a[heading];
        }
    }
    }

 };
   

// const sortedUsers = dataState.filteredUsers.sort(sortName);

//         setDataState({
//           ...dataState,
//           filteredUsers: sortedUsers
//     });

      const handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = dataState.users.filter(item => {
          let values = item.name.first.toLowerCase();
          return values.indexOf(filter.toLowerCase()) !== -1;
        });
    
        setDataState({ 
        ...dataState, 
        filteredUsers: filteredList });
      };

      useEffect(() => {
        API.getUsers().then(results => {
          setDataState({
            ...dataState,
            users: results.data.results,
            filteredUsers: results.data.results
          });
        });
      }, []);
    
      return (
        <DataAreaContext.Provider
          value={{ dataState, handleSearchChange, handleSort }}
        >
          <Nav />
          <div className="data-area">
            {dataState.filteredUsers.length > 0
    ? <DataTable />
     : <div></div>
     }
          </div>
        </DataAreaContext.Provider>
      );
    }
    
    export default DataArea;