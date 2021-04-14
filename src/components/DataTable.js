import React from "react";
import "../styles/DataTable.css";


const DataTable = ({ login, image, name, phone, email, dob }) => {
    return (
        <Table >
            <tbody>

                <tr key={login}>

                    <td data-th="Image">
                        <img
                            src={image}
                            alt="person"
                            className="image"
                        />

                    </td>
                    <td data-th="Name">
                        {name}

                    </td>
                    <td data-th="Phone Number">
                        {phone}
                    </td>
                    <td data-th="Email">
                        {email}
                    </td>
                    <td data-th="DOB">
                        {dob}
                    </td>
                </tr>
            </tbody>
        </Table>



    )
}


export default DataTable; 