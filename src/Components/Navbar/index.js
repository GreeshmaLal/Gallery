import {  sortOption } from "../../Constant"
import Search from "../Search"
import SelectDropdown from "../Select"

const Navbar = ({ sortValue, setSortValue, onSearchHandler,searchValue }) => {
    return (
        <nav className="d-flex w-100 nav justify-content-between p-10">
            <SelectDropdown options={sortOption} selectedValue={sortValue} setSortValue={setSortValue} />
            <Search onSearchHandler={onSearchHandler}  searchValue={searchValue}/>
        </nav>
    )
}

export default Navbar