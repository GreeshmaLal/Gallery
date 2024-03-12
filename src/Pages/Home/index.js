import { useEffect, useState } from "react"
import { category, collection } from "../../Constant"
import Card from "../../Components/Card"
import Navbar from "../../Components/Navbar"
import { SortFunc } from "../../Helper"
import Filter from "../../Components/Filter"

const Home = () => {
    const [collectionList, setCollectionList] = useState(collection)
    const [searchValue, setSearchValue] = useState('')
    const [sortValue, setSortValue] = useState({})
    const [categoryFilter, setCategoryFilter] = useState([])

    const onSearchHandler = (value) => setSearchValue(value)
    const onSearchCard = (value,data) => {
       return  data?.filter(x => x?.collectionName?.toLowerCase()?.includes(value?.trim()?.toLowerCase()))
    }
    useEffect(() => {
        let filterData = collection
        filterData = SortFunc(sortValue?.value, filterData)
        filterData = searchValue?.trim() ? onSearchCard(searchValue,filterData) :filterData
        if(categoryFilter?.length){
          let  filterDataCol = filterData?.filter(item =>
                categoryFilter.includes(item.categoryId?.toString()) ||
                categoryFilter.includes(item.firstSubcategoryId?.toString()) ||
                categoryFilter.includes(item.secondSubcategoryId?.toString())
              );
              setCollectionList(filterDataCol)
        }
        else{
            setCollectionList(filterData)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortValue,searchValue,collection,categoryFilter])

    return (
        <div className="card-grid">
            <div className="header-app">
                < Navbar sortValue={sortValue} setSortValue={setSortValue} onSearchHandler={onSearchHandler}searchValue={searchValue} />
              <div className="d-flex">
                <Filter category={category} setCategoryFilter={setCategoryFilter}/>

                <div className='card-new'>
                    {collectionList?.map((item, index) => (
                        <Card key={index} title={item?.collectionName} image={item.image} item={item} />
                    ))}</div>
            </div>
        </div>
        </div>
    )
}
export default Home