const filterDog = async (temp ,dogs) => {
    const aweiteame = await dogs
    const filteredDog = aweiteame.filter((dog)=>{
        dog.Temperaments.includes(temp)
    })
    return filteredDog
}

module.exports = {
    filterDog
}