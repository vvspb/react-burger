import type { Action, ActionCreator, AnyAction, Middleware, MiddlewareAPI } from 'redux';
import { getCookie } from '../../utils/cookie';
import { ORDER_FEED_CONNECT, ORDER_FEED_DISCONNECT } from '../actions-types/ws-action-types';
import type { connect, disconnect, wsClose, wsConnecting, wsError, wsGetMessage, wsOpen } from '../actions/ws-action';

import type { RootState } from '../reducers/index'
import type { TAppDispatch, TApplicationActions } from '../store'


// export type TWSActionTypes = {
//     wsConnect: ReturnType<typeof connect>,
//     wsDisconnect: ReturnType<typeof disconnect>,

//     wsConnecting: ActionCreator<typeof wsConnecting>,
//     onOpen: ActionCreator<Action<typeof wsOpen>>,
//     onClose: ActionCreator<Action<typeof wsClose>>,
//     onError: ActionCreator<Action <typeof wsError>>,
//     onMessage: ActionCreator<Action<typeof wsGetMessage>>,
// }

// export const createSocketMiddleware = (wsActions: TWSActionTypes): Middleware<{}, RootState> => {
//     return (store) => {
//         let socket: WebSocket | null = null;
//         return next => (action: TApplicationActions) => {
//             const { dispatch, getState } = store;
//             const { onOpen, onMessage, onClose, onError, wsConnect, wsConnecting, wsDisconnect } = wsActions
//             const user = getState().authUserData.userData.name
//             const token = getCookie('accessToken')

//             if(user && action.type === wsConnect.type){
//                 socket = new WebSocket(`${action.payload}?token(${token})`);
//             }
            
//             if (action.type === wsConnect.type) {
//                 // объект класса WebSocket
//                 socket = new WebSocket(action.payload);
//             }

//             if (socket) {
//                 // функция, которая вызывается при открытии сокета
//                 socket.onopen = event => {
//                     dispatch(onOpen());
//                 };
//                 // функция, которая вызывается при ошибке соединения
//                 socket.onerror = event => {
//                     dispatch(onError('error'));
//                 };

//                 // функция, которая вызывается при получения события от сервера
//                 socket.onmessage = event => {
//                     const { data } = event;
//                     const parsedData = JSON.parse(data)
//                     dispatch(onMessage(parsedData));
//                 };
//                 // функция, которая вызывается при закрытии соединения
//                 socket.onclose = event => {
//                     dispatch(onClose());
//                 };

//                 // if (action.type === wsSendMessage.type) {
//                 //     // функция для отправки сообщения на сервер
//                 //     socket.send(JSON.stringify(action.payload));
//                 // }
//                 if (wsDisconnect.type === action.type) {
//                     socket.close();
//                     socket = null;
//                 }
//             }
//             next(action);
//         }
//     }
// }

// второй вариант


export type TWSActionTypes = {
    wsConnect: typeof connect,
    wsDisconnect:typeof disconnect,

    wsConnecting:  typeof wsConnecting,
    onOpen: typeof wsOpen,
    onClose: typeof wsClose,
    onError: typeof wsError,
    onMessage: typeof wsGetMessage,
}

export const createSocketMiddleware = (wsActions: TWSActionTypes): Middleware<{}, RootState> => {
    return (store) => {
        let socket: WebSocket | null = null;
        return next => (action: TApplicationActions) => {
            const { dispatch, getState } = store;
            const { onOpen, onMessage, onClose, onError, wsConnect, wsConnecting, wsDisconnect } = wsActions
            const user = getState().authUserData.userData.name
            const token = getCookie('accessToken')
            //   в тулките есть match, 
            //    а в чистом редакс как проверить через wsConnect? я в итоге запульнул просто action type
            if(user && action.type === ORDER_FEED_CONNECT){
                socket = new WebSocket(`${action.payload}?token(${token})`);
            }
            
            if (action.type === ORDER_FEED_CONNECT) {
                // объект класса WebSocket
                socket = new WebSocket(action.payload);
            }

            if (socket) {
                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch(onOpen());
                };
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch(onError('error'));
                };

                // функция, которая вызывается при получения события от сервера
                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data)
                    dispatch(onMessage(parsedData));
                };
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch(onClose());
                };

                // if (action.type === wsSendMessage.type) {
                //     // функция для отправки сообщения на сервер
                //     socket.send(JSON.stringify(action.payload));
                // }
                if (ORDER_FEED_DISCONNECT === action.type) {
                    socket.close();
                    socket = null;
                }
            }
            next(action);
        }
    }
}



