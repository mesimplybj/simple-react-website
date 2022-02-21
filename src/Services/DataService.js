

const apiURL = 'https://react-website-template-api.herokuapp.com/api/Portfolio/';
export default class DataService {
    static GetHeroSection(setItems, setError, setIsLoaded) {
        fetch(apiURL + "GetHeroSection")
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }
    static GetAbout(setItems, setError, setIsLoaded) {
        fetch(apiURL + "GetAbout")
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }
    static GetServiceSection(setItems, setError, setIsLoaded) {
        fetch(apiURL + "GetServiceSection")
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }
    static GetGenericCall(setItems, setError, setIsLoaded,methodName) {
        fetch(apiURL + methodName)
            .then(res => (res.ok ? res : Promise.reject(res)))
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }
}