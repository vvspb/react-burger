
// get ingredients api
export type TIngredients = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
};

// add order api
export type TOwner = {
    name: string,
    email: string,
    createdAt: Date,
    updatedAt: Date,
};

export type TOrder = {
    ingredients: TIngredients[],
    _id: string,
    owner: TOwner,
    status: string,
    name: string,
    createdAt: Date,
    updatedAt: Date,
    number: number,
    price: number,
};

//get/ login/ register user api

export type TUser = {
    email: string,
    name: string,
};

// token api 

export type TToken = {
    accessToken: string,
    refreshToken: string,
    success: boolean,
    message?: string,
}

export type TResponseBody<TDataKey extends string = '', TDataType = {}> = {
    [key in TDataKey]: TDataType
} & {
    success: boolean;
    message?: string;
    headers?: Headers;
    name?: string;
    accessToken?: string;
    refreshToken?: string;
};

interface CustomBody<T extends any> extends Body {
    json(): Promise<T>;
}

export interface CustomResponse<T> extends CustomBody<T> {
    [x: string]: any;
    readonly headers: Headers;
    readonly ok: boolean;
    readonly redirected: boolean;
    readonly status: number;
    readonly statusText: string;
    readonly trailer: Promise<Headers>;
    readonly type: ResponseType;
    readonly url: string;
    clone(): Response;
}