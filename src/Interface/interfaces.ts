//Types
export type Tdays = 0|1|2|3|4|5|6;
export type Thours = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|20|21|22|23;
export type Tminutes = 0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20 
|21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|41|42|43|44|45
|46|47|48|49|50|51|52|53|54|55|56|57|58|59;
export type TokenType = "password" | "validation"

export interface IAsignature{
    title: string,
    description: string,
    hour: number,
    minutes: number,
    isDone: boolean,
    isExpire: boolean,
    day: number,
    isCheck: boolean,
    id: string
}
export interface IUser {
    username: string,
    email: string,
    createdAt: Date,
    user_id: string,
    jwt?: string
}
export interface IAsignature_add{
    title: string,
    description: string,
    hour: number,
    minutes: number,
    isDone: boolean,
    isExpire: boolean,
    day: number,
    isCheck: boolean,
    id: string
}
export interface Ijwt{
    user_id: string,
    email: string,
    iat: number,
    exp: number
}