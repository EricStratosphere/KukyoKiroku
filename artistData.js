const string = "wassuH"

export const someString = string;

class ArtistData{
    constructor(artistName, artistMoniker, artistDescription, imgUrl){
        this.artistName = artistName;
        this.artistMoniker = artistMoniker;
        this.artistDescription = artistDescription;
        this.imgUrl = imgUrl
    }
}

const arwinName = "Arwin Gabryel Labarda";
const arwinMoniker = "musicbyarwin";
const arwinDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, facilis cum id esse iusto fugiat eaque quas? Reprehenderit error, facere a esse eius ad blanditiis eveniet nulla voluptatem similique corrupti?"
const arwinUrl = './img/arwin_studio.webp'
const Arwin = new ArtistData(arwinName, arwinMoniker, arwinDescription, arwinUrl);

const lagoonName = "Ian Stockton";
const lagoonMoniker = "nc101";
const lagoonDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, facilis cum id esse iusto fugiat eaque quas? Reprehenderit error, facere a esse eius ad blanditiis eveniet nulla voluptatem similique corrupti?";
const lagoonUrl = './img/lagoon.png'
const Lagoon = new ArtistData(lagoonName, lagoonMoniker, lagoonDescription, lagoonUrl);

const adamName = "Adam Sadely";
const adamMoniker = "Adeng!";
const adamDescription = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, facilis cum id esse iusto fugiat eaque quas? Reprehenderit error, facere a esse eius ad blanditiis eveniet nulla voluptatem similique corrupti?";
const adamUrl = './img/kabutonew.webp'
const Adam = new ArtistData(adamName, adamMoniker, adamDescription, adamUrl);

export const Artists = {
    arwin : Arwin,
    lagoon : Lagoon,
    adam : Adam,
}


class ArtistWorks{

}