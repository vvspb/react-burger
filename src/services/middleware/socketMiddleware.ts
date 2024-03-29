import type { Middleware } from 'redux';

import type { RootState } from '../reducers/index'
import type { TApplicationActions } from '../store'

export type TWSActionTypes = {
    wsConnectType: string,
    wsDisconnectType: string,

    wsConnectingType: string,
    onOpenType: string,
    onCloseType: string,
    onErrorType: string,
    onMessageType: string,
    wsSendMessageType?: string
}

export const createSocketMiddleware = (wsActions: TWSActionTypes): Middleware<{}, RootState> => {
    return (store) => {
        let socket: WebSocket | null = null;
        return next => (action: TApplicationActions) => {
            const { dispatch } = store;
            const {
                onOpenType,
                onMessageType,
                onCloseType,
                onErrorType,
                wsConnectType,
                wsDisconnectType,
                wsSendMessageType
            } = wsActions;

            if (action.type === wsConnectType) {
                // объект класса WebSocket
                socket = new WebSocket((action as { payload: string }).payload);
            }
            
            if(socket){
                // функция, которая вызывается при открытии сокета
                socket.onopen = event => {
                    dispatch({ type: onOpenType });
                };
                // функция, которая вызывается при ошибке соединения
                socket.onerror = event => {
                    dispatch({ type: onErrorType, payload: event });
                };

                socket.onmessage = event => {
                    const { data } = event;
                    const parsedData = JSON.parse(data)
                    dispatch({ type: onMessageType, payload: parsedData });
                    // };
                }
                // функция, которая вызывается при закрытии соединения
                socket.onclose = event => {
                    dispatch({ type: onCloseType });
                };

                if (action.type === wsSendMessageType) {
                    // функция для отправки сообщения на сервер
                    socket.send(JSON.stringify((action as { payload: any }).payload));
                }

                if (wsDisconnectType === action.type) {
                    socket.close();
                    socket = null;
                }
            }
            next(action);
        }
    }
}
