export type Menu = {
    id?: number
    title: string
    link: string
    icon?: JSX.Element
    submenu?: Menu[]
}