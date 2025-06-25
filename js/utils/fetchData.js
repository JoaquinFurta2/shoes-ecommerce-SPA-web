export default async function getData(filter = "none" ) {
    let data = await fetch('../../data.json')
    data = await data.json()
    
    if (filter === "none") { 
        return data
    }

    if (isNaN(filter))
      return data.filter(item => item.gender.includes(filter))

    const item = data.find(item => item.id == filter)

    if (item === undefined){
      return "Not Found"
    }

    return item
    
  }