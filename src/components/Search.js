import react from "react";

const Search = (props) =>{
       const handleSubmit = (event) =>{
            event.preventDefault();
            props.search(props.term);            
        };
    return (<div> 
        <form onSubmit={handleSubmit}></form>
        </div>)
        };

    
export default Search;