export interface PercentInterface {
    count: number;
    percent: number;
}

export interface UserInterface {
    id: number;
    randomString: string;
    nickname: string;
    apiKey: string;
    active: boolean;
    currentKill: number;
    targetKill: number;
    percents: PercentInterface[];
}
