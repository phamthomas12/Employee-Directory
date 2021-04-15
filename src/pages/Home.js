import React, {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import DataList from "../components/DataList";
import API from "../utils/API";
import Wrapper from "../components/Wrapper";
import Header from "../components/Header";

const Home = () => {
    const [sortCol, setSortCol] = useState("name")
    const [dataSearch, setDataSearch] = useState({
        users: [],
        filteredUsers: [],
        order: "ascending"
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

    const handleSort = (event) => {
      
        
       
        if(dataSearch.order === "ascending") {
            const sortedUsers = dataSearch.filteredUsers.sort((a, b) => {
                 
            
                return a.name.last.localeCompare(b.name.last)
           
    
        })
            setDataSearch({
                ...dataSearch,
                order:"descending",
                filteredUsers:sortedUsers})
        } else {
            const sortedUsers = dataSearch.filteredUsers.sort((a, b) => {
                 
            
                return b.name.last.localeCompare(a.name.last)
           
    
        })
            setDataSearch({
                ...dataSearch,
                order:"ascending",
                filteredUsers:sortedUsers})
        }
         
        
    
    }

    return(
         
        <Wrapper>
            <Header />
           <SearchBar handleInputChange={handleSearchChange} />
           <DataList filteredUsers={dataSearch.filteredUsers}  handleSort={handleSort}/>
        </Wrapper>

    )
}

export default Home;