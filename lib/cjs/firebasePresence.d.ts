declare function checkIfIAmOnline(callback: any): Promise<any>;
declare function checkIfUserOnline(uid: string, callback: any): void;
declare const initFirebasePresence: () => void;
export { initFirebasePresence, checkIfIAmOnline, checkIfUserOnline };
