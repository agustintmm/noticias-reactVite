export const determinarImgCategoria = categoria => {
    switch(categoria){
        case "general":
            return "img/general.png"
        case "science":
            return "img/science.png"
        case "sports":
            return "img/sports.png"
        case "business":
            return "img/business.png"
        case "entertainment":
            return "img/entertainment.png"
        case "health":
            return "img/health.png"
        case "technology":
            return "img/technology.png"
    }
}