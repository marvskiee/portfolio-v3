import { ICONS } from "./ICONS"

export const projectTypeHelper = (type: string) => {
    switch (type) {
        case "website":
            return ICONS.WEBSITE
        case "games":
            return ICONS.GAMES
        case "mobile":
            return ICONS.MOBILE
        default:
            return ""
    }
}
