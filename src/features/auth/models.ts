export interface Credentials {
    username: string;
    password: string;
}

export interface AxiosErrorResponseData {
    detail: string;
    instance: string;
    title: string;
    status: number;
}

export interface AccessToken {
    idToken: string;
}
