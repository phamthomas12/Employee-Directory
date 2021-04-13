import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import DataSearchResult from "../components/DataSearchResult";
import API from "../utils/API"
import Wrapper from "../components/Wrapper"

const Home = () => {
    const [dataSearch, setDataSearch] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
        headings: [
            {name: "Image"},
            {name: "Name"},
            {name: 'Phone'},
            {name: 'Email'},
            {name: "DOB"}
        ]
    });

    const handleSearchChange = event => {
        const {value} = event.target;
        const filteredList = dataSearch.users.filter(item => {
            let person = item.name.first.toLowerCase().includes(value.toLowerCase()) ;

            return person;
        })

        setDataSearch({...dataSearch, filteredUsers: filteredList});
       
    }

    useEffect(() => {
        
        API.getUsers().then(res => {
            console.log(res.data.results);
            setDataSearch({
                ...dataSearch,
                users: res.data.results,
                filteredUsers: res.data.results
            })
        })

    }, []);

    return(
         
        <Wrapper>
           <SearchBar handleInputChange={handleSearchChange} />
           <DataSearchResult filteredUsers={dataSearch.filteredUsers}/>
        </Wrapper>

    )
}

export default Home;