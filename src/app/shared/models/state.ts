export interface IState {
    uid: number;
    uf: string;
    state: string;
    cases: number;
    deaths: number;
    suspects: number;
    refuses: number;
    broadcast: boolean;
    comments: string;
    datetime: Date;
}