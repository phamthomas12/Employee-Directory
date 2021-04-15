
import React from "react";
import DataTable from "./DataTable";
import TableHeader from "./TableHeader";
import "../styles/DataList.css";

function formatDate(date) {
    const givenDate = date.split("-");
    const year = givenDate[0];
    const month = givenDate[1];
    const dayArray = givenDate[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("-");
    return formattedDate;
}

function DataList ({ filteredUsers, handleSort }) {
    console.log(filteredUsers)
    return (
        <table>
            <TableHeader handleSort={handleSort} />
        {filteredUsers.map(person => (
            <DataTable
                key={person.login.uuid}
                image={person.picture.medium}
                name={person.name.first + " " + person.name.last}
                phone={person.phone}
                email={person.email}
                dob={formatDate(person.dob.date)}
                />

        ))}  
        </table>                                 
    )
}

export default DataList; 