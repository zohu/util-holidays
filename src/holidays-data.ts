export enum DayType {
    '工作日' = 1,
    '周末' = 2,
    '法定节假日' = 3,
    '国家补休调工日' = 4
}
export interface Holiday {
    date: string | Date | number
    type?: string
    status?: number
    dayType?: DayType
    week?: string
    ps?: string
}
export class HolidaysData {
    holiday: Holiday[] = []
    constructor() {
        if (this.holiday.length === 0) {
            this.holiday = Holiday_2020_2021
        }
    }
    getDateInfo(date: string) {
        return this.holiday.find(o => o.date === date)
    }
}
const Holiday_2020_2021 = [
    { date: '2020-01-01', type: '元旦', status: 1 },
    { date: '2020-01-24', type: '春节', status: 1 },
    { date: '2020-01-25', type: '春节', status: 1 },
    { date: '2020-01-26', type: '春节', status: 1 },
    { date: '2020-01-27', type: '春节', status: 1 },
    { date: '2020-01-28', type: '春节', status: 1 },
    { date: '2020-01-29', type: '春节', status: 1 },
    { date: '2020-01-30', type: '春节', status: 1 },
    { date: '2020-01-31', type: '春节', status: 1 },
    { date: '2020-02-01', type: '春节', status: 1 },
    { date: '2020-02-02', type: '春节', status: 1 },
    { date: '2020-04-04', type: '清明节', status: 1 },
    { date: '2020-04-05', type: '清明节', status: 1 },
    { date: '2020-04-06', type: '清明节', status: 1 },
    { date: '2020-04-26', type: '调工', status: 0 },
    { date: '2020-05-01', type: '劳动节', status: 1 },
    { date: '2020-05-02', type: '劳动节', status: 1 },
    { date: '2020-05-03', type: '劳动节', status: 1 },
    { date: '2020-05-04', type: '劳动节', status: 1 },
    { date: '2020-05-05', type: '劳动节', status: 1 },
    { date: '2020-05-09', type: '调工', status: 0 },
    { date: '2020-06-25', type: '端午节', status: 1 },
    { date: '2020-06-26', type: '端午节', status: 1 },
    { date: '2020-06-27', type: '端午节', status: 1 },
    { date: '2020-06-28', type: '调工', status: 0 },
    { date: '2020-09-27', type: '调工', status: 0 },
    { date: '2020-10-01', type: '国庆节',  status: 1 },
    { date: '2020-10-02', type: '国庆节',  status: 1 },
    { date: '2020-10-03', type: '国庆节',  status: 1 },
    { date: '2020-10-04', type: '国庆节',  status: 1 },
    { date: '2020-10-05', type: '国庆节',  status: 1 },
    { date: '2020-10-06', type: '国庆节',  status: 1 },
    { date: '2020-10-07', type: '国庆节',  status: 1 },
    { date: '2020-10-08', type: '国庆节',  status: 1 },
    { date: '2020-10-10', type: '调工', status: 0 },
    { date: '2021-01-01', type: '元旦', status: 1 },
    { date: '2021-01-02', type: '元旦', status: 1 },
    { date: '2021-01-03', type: '元旦', status: 1 },
    { date: '2021-02-07', type: '调工', status: 0 },
    { date: '2021-02-11', type: '春节', status: 1 },
    { date: '2021-02-12', type: '春节', status: 1 },
    { date: '2021-02-13', type: '春节', status: 1 },
    { date: '2021-02-14', type: '春节', status: 1 },
    { date: '2021-02-15', type: '春节', status: 1 },
    { date: '2021-02-16', type: '春节', status: 1 },
    { date: '2021-02-17', type: '春节', status: 1 },
    { date: '2021-02-20', type: '调工', status: 0 },
    { date: '2021-04-03', type: '清明节', status: 1 },
    { date: '2021-04-04', type: '清明节', status: 1 },
    { date: '2021-04-05', type: '清明节', status: 1 },
    { date: '2021-04-25', type: '调工', status: 0 },
    { date: '2021-05-01', type: '劳动节', status: 1 },
    { date: '2021-05-02', type: '劳动节', status: 1 },
    { date: '2021-05-03', type: '劳动节', status: 1 },
    { date: '2021-05-04', type: '劳动节', status: 1 },
    { date: '2021-05-05', type: '劳动节', status: 1 },
    { date: '2021-05-08', type: '调工', status: 0 },
    { date: '2021-06-12', type: '端午节', status: 1 },
    { date: '2021-06-13', type: '端午节', status: 1 },
    { date: '2021-06-14', type: '端午节', status: 1 },
    { date: '2021-09-18', type: '调工', status: 0 },
    { date: '2021-09-19', type: '中秋节', status: 1 },
    { date: '2021-09-20', type: '中秋节', status: 1 },
    { date: '2021-09-21', type: '中秋节', status: 1 },
    { date: '2021-09-26', type: '调工', status: 0 },
    { date: '2021-10-01', type: '国庆节', status: 1 },
    { date: '2021-10-02', type: '国庆节', status: 1 },
    { date: '2021-10-03', type: '国庆节', status: 1 },
    { date: '2021-10-04', type: '国庆节', status: 1 },
    { date: '2021-10-05', type: '国庆节', status: 1 },
    { date: '2021-10-06', type: '国庆节', status: 1 },
    { date: '2021-10-07', type: '国庆节', status: 1 },
    { date: '2021-10-09', type: '调工', status: 0 },
]
