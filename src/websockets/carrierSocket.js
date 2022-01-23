const SOCKET_SERVER_URL = 'ws://localhost:3001/cs';
let stream;

export default class CarrierSocket {
    constructor() {
        if(stream)
            return stream;
        else
            return this.open();
    }
    open() {
        stream = new WebSocket(SOCKET_SERVER_URL);
        return stream;
    }
}
