export default function navbarOnChange(index) {
    switch (index) {
        case 0:
            return "/contactus"
        case 1:
            return "/notes"
        case 2:
            return "/jobs"
        case 3:
            return "/team"
        default:
            return "/"
    }
}