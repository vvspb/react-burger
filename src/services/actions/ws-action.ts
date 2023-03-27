import { IOrderFeed } from '../../utils/types';
import {
    ORDER_FEED_CONNECT,
    ORDER_FEED_DISCONNECT,
    ORDER_FEED_WS_CONNECTING,
    ORDER_FEED_WS_OPEN,
    ORDER_FEED_WS_CLOSE,
    ORDER_FEED_WS_GET_MESSAGE,
    ORDER_FEED_WS_ERROR,
    ORDER_PERSONAL_FEED_WS_GET_MESSAGE,
    ORDER_PERSONAL_FEED_CONNECT,
    ORDER_PERSONAL_FEED_DISCONNECT,
    ORDER_PERSONAL_FEED_WS_CONNECTING,
    ORDER_PERSONAL_FEED_WS_OPEN,
    ORDER_PERSONAL_FEED_WS_CLOSE,
    ORDER_PERSONAL_FEED_WS_ERROR
} from '../actions-types/ws-action-types';


export interface IConnectAction {
    readonly type: typeof ORDER_FEED_CONNECT;
    readonly payload: string;
}

export interface IDisconnectAction {
    readonly type: typeof ORDER_FEED_DISCONNECT;
}

export interface IWSConnecting {
    readonly type: typeof ORDER_FEED_WS_CONNECTING
}

export interface IWSOpen {
    readonly type: typeof ORDER_FEED_WS_OPEN
}

export interface IWSClose {
    readonly type: typeof ORDER_FEED_WS_CLOSE
}

export interface IWSGetMessage {
    readonly type: typeof ORDER_FEED_WS_GET_MESSAGE,
    readonly payload?: IOrderFeed;
}

export interface IWSError {
    readonly type: typeof ORDER_FEED_WS_ERROR,
    readonly payload: string;
}

// type ws-action for ws with token

export interface IConnectPersonalAction {
    readonly type: typeof ORDER_PERSONAL_FEED_CONNECT;
    readonly payload: string;
}

export interface IDisconnectPersonalAction {
    readonly type: typeof ORDER_PERSONAL_FEED_DISCONNECT;
}

export interface IWSConnectingPersonal {
    readonly type: typeof ORDER_PERSONAL_FEED_WS_CONNECTING
}

export interface IWSOpenPersonal {
    readonly type: typeof ORDER_PERSONAL_FEED_WS_OPEN
}

export interface IWSClosePersonal {
    readonly type: typeof ORDER_PERSONAL_FEED_WS_CLOSE
}

export interface IWSGetMessagePersonal {
    readonly type: typeof ORDER_PERSONAL_FEED_WS_GET_MESSAGE,
    readonly payload?: IOrderFeed;
}

export interface IWSErrorPersonal {
    readonly type: typeof ORDER_PERSONAL_FEED_WS_ERROR,
    readonly payload: string;
}

export type TWSActions =
    IConnectAction |
    IDisconnectAction |
    IWSConnecting |
    IWSOpen |
    IWSClose |
    IWSError |
    IWSGetMessage |
    IWSGetMessagePersonal |
    IConnectPersonalAction |
    IDisconnectPersonalAction |
    IWSConnectingPersonal |
    IWSOpenPersonal |
    IWSClosePersonal |
    IWSErrorPersonal;

    ///

export const connect = (url: string): IConnectAction => ({
    type: ORDER_FEED_CONNECT,
    payload: url
})

export const disconnect = (): IDisconnectAction => ({
    type: ORDER_FEED_DISCONNECT,
})

export const wsConnecting = (): IWSConnecting => ({
    type: ORDER_FEED_WS_CONNECTING
})

export const wsOpen = (): IWSOpen => ({
    type: ORDER_FEED_WS_OPEN
})

export const wsClose = (): IWSClose => ({
    type: ORDER_FEED_WS_CLOSE
})

export const wsGetMessage = (resp: IOrderFeed): IWSGetMessage => ({
    type: ORDER_FEED_WS_GET_MESSAGE,
    payload: resp
})

export const wsError = (resp: string): IWSError => ({
    type: ORDER_FEED_WS_ERROR,
    payload: resp
})

// action for ws with token

export const connectPersonalFeed = (url: string): IConnectPersonalAction => ({
    type: ORDER_PERSONAL_FEED_CONNECT,
    payload: url
})

export const disconnectPersonalFeed = (): IDisconnectPersonalAction => ({
    type: ORDER_PERSONAL_FEED_DISCONNECT,
})

export const wsConnectingPersonalFeed  = (): IWSConnectingPersonal => ({
    type: ORDER_PERSONAL_FEED_WS_CONNECTING
})

export const wsOpenPersonalFeed  = (): IWSOpenPersonal => ({
    type: ORDER_PERSONAL_FEED_WS_OPEN
})

export const wsClosePersonalFeed  = (): IWSClosePersonal => ({
    type: ORDER_PERSONAL_FEED_WS_CLOSE
})

export const wsGetMessagePersonalFeed = (resp: IOrderFeed): IWSGetMessagePersonal => ({
    type: ORDER_PERSONAL_FEED_WS_GET_MESSAGE,
    payload: resp
})
