import { IOrderFeed } from '../../utils/types';
import {ORDER_FEED_CONNECT, 
    ORDER_FEED_DISCONNECT, 
    ORDER_FEED_WS_CONNECTING, 
    ORDER_FEED_WS_OPEN, 
    ORDER_FEED_WS_CLOSE, 
    ORDER_FEED_WS_GET_MESSAGE, 
    ORDER_FEED_WS_ERROR} from '../actions-types/ws-action-types';


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

export type TWSActions = IConnectAction | IDisconnectAction | IWSConnecting | IWSOpen | IWSClose | IWSError |IWSGetMessage 

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

export const wsGetMessage = (resp: IOrderFeed ): IWSGetMessage => ({
    type: ORDER_FEED_WS_GET_MESSAGE,
    payload: resp
})

export const wsError = (resp: string ): IWSError => ({
    type: ORDER_FEED_WS_ERROR,
    payload: resp
})
