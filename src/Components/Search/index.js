const Search = ({onSearchHandler,searchValue}) =>{
return(
<div>
    <input type="text" onChange={(e)=> onSearchHandler(e.target?.value?.trimStart())} value={searchValue} placeholder='Search'/>
</div>)
}


export default Search