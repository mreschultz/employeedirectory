import React, { useContext } from "react";
import DataAreaContext from "../../utils/DataAreaContext"

const DataBody = () => {
    const context = useContext(DataAreaContext);

    return (
        <tbody>
        {context.dataState.filteredUsers[0] !== undefined && context.dataState.filteredUsers[0].name !== undefined ? (
          context.dataState.filteredUsers.map(({ login, name, phone, email }) => {
            return (
              <tr key={login.uuid}>
                <td data-th="Name" className="name-cell align-middle">
                  {name.first} {name.last}
                </td>
                <td data-th="Phone" className="align-middle">
                  {phone}
                </td>
                <td data-th="Email" className="align-middle">
                  {email}
                 </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </tbody>
    );
  }
  
  export default DataBody;
