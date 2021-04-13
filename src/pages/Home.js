import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import DataList from "../components/DataList";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

const Home = () => {
    const [dataSearch, setDataSearch] = useState({
        users: [],
        order: "descend",
        filteredUsers: [],
    });

    const handleSearchChange = event => {
        const {value} = event.target;
        const filteredList = dataSearch.users.filter(item => {
            let person = item.name.first.toLowerCase().includes(value.toLowerCase());

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
            <Header />
           <SearchBar handleInputChange={handleSearchChange} />
           <DataList filteredUsers={dataSearch.filteredUsers}/>
        </Wrapper>

    )
}

export default Home;