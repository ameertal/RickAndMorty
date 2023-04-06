abstract class Global{
}
class Development extends Global{
    public urls = {
        characters: 'https://rickandmortyapi.com/api/character'
    }
}
class Production extends Global{
    public urls ={
        characters: 'Enter Production URL'
    }
}
const urlService = (process.env.NODE_ENV === "production") ? new Production() : new Development();
export default urlService;

