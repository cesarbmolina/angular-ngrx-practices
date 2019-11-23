export interface UsersInterface {
    load?: boolean;
    fill?: boolean;
    error?: string;
    user?: UserInterface;

}

export interface UserInterface {
    avatar?: string;
    email?: string;
    first_name?: string;
    id?: number;
    last_name?: string;
}
