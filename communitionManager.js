export async function getName(newNom) {
    console.log(newNom);
    
    try {
        const response = await fetch(`https://www.omdbapi.com/?s=${newNom}&apikey=535d16cc`);

        if (!response.ok) {
            throw new Error(`HTTP ERROR ${response.status}`)
        }

        const data = await response.json();
        console.log(data);
        

        return data.Search;
    } catch (error) {
        console.error(error);
        throw error
    }

}