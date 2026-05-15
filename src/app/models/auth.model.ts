export interface AuthResponse{
    token : string;
    userName : string;
    role : string;
}

export interface LoginRequest{
    email : string;
    password : string;
}

export interface RegisterRequest{
    userName : string;
    email : string;
    password : string;
}