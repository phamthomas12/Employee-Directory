import React from "react";



const DataTable = ({handleSort, login, image, name, phone, email, dob }) => {
    return (
            <tbody>

                <tr key={login}>

                    <td data-th="Image">
                        <img
                            src={image}
                            alt="person"
                            className="image"
                        />

                    </td>
                    <td data-th="Name" className="name" onClick={handleSort}>
                        {name}

                    </td>
                    <td data-th="Phone Number">
                        {phone}
                    </td>
                    <td data-th="Email">
                        {email}
                    </td>
                    <td data-th="DOB" className="dob">
                        {dob}
                    </td>
                </tr>
            </tbody>



    )
}


export default DataTable; 