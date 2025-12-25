const string = "wassuH"

export const someString = string;

class ArtistData{
    constructor(artistName, artistMoniker, artistDescription){
        this.artistName = artistName;
        this.artistMoniker = artistMoniker;
        this.artistDescription = artistDescription;
    }
}

const arwinName = "Arwin Gabryel Labarda";
const arwinMoniker = "musicbyarwin";
const arwinDescription = "lorem ipsum dolor";
const Arwin = new ArtistData(arwinName, arwinMoniker, arwinDescription);

const lagoonName = "Ian Stockton";
const lagoonMoniker = "nc101";
const lagoonDescription = "lorem ipsum dolor";
const Lagoon = new ArtistData(lagoonName, lagoonMoniker, lagoonDescription);

const adamName = "Adam Sadely";
const adamMoniker = "Adeng!";
const adamDescription = "lorem ipsum dolor";
const Adam = new ArtistData(adamName, adamMoniker, adamDescription);




class ArtistWorks{

}