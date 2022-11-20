import { COUNTRY_API } from "../../constants"

export const fetchCountryData = async (setCountries, setIsLoading) => {
    setIsLoading(true)
    await fetch(COUNTRY_API)
        .then((response) => response.json())
        .then((data) => {
            setCountries(data)
            setIsLoading(false)
        }).finally(() => {
            setIsLoading(false)
        })
}

export function parseCountry({ countries, searchText }) {
    const temp = [...countries]
    if (typeof searchText !== 'string') {
        return temp;
    }
    let filterdCountry = temp.filter((country) => country.name.toLowerCase().includes(searchText.toLowerCase()))
    return filterdCountry
}