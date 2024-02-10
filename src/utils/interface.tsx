export interface PercentInterface {
    count: number;
    percent: number;
}

export interface UserInterface {
    id: number;
    randomString: string;
    nickName: string;
    apiKey: string;
    currentKill: number;
    targetKill: number;
    percents: PercentInterface[];
}
