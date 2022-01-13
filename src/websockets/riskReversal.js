const SOCKET_SERVER_URL = 'ws://localhost:3001/rr';
let stream;

export default class RiskReversalSocket {
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
