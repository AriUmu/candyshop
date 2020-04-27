import candy from "./candy.json";

export default class CandyService {
    static getCandy() {
        return candy ? candy : [];
    }
}