import { category } from "../Constant"

export const getCategory = (id) => {
    return category.find(x => x?.id === id)?.name
}

export const SortFunc = (type, data) => {
    console.log(type)
    let sortValue = []
    switch (type) {
        case 'asc':
            sortValue= [...data]?.sort((a, b) => a?.collectionName.localeCompare(b?.collectionName) )
            break;
        case 'dsc':
            sortValue=  [...data]?.sort((a, b) => b?.collectionName.localeCompare(a?.collectionName))
            break;

        case 'recent':
            sortValue=  [...data]?.sort((a, b) => new Date(a?.createdAt) - new Date(b?.createdAt))
            break;

        default:
            sortValue= [...data];  
            break;

  }
  return sortValue
}