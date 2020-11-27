import { Holiday, HolidaysData } from './holidays-data';

const holidays = new HolidaysData();

const dateFormat = (date: string | Date | number, fmt = 'yyyy-MM-dd') => {
  const d = new Date(date);
  if (!isValidDate(d)) {
    throw new Error('Invalid date: ' + date);
  }
  const o: Record<string, any> = {
    'M+': d.getMonth() + 1,
    'd+': d.getDate(),
    'h+': d.getHours(),
    'm+': d.getMinutes(),
    's+': d.getSeconds(),
    'q+': Math.floor((d.getMonth() + 3) / 3),
    S: d.getMilliseconds(),
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
};
const isValidDate = (date: Date) => {
  return date instanceof Date && !isNaN(date.getTime());
};
const getWeek = (date: string) => {
  return '星期' + ['日', '一', '二', '三', '四', '五', '六'][new Date(date).getDay()];
};

export const getDayInfo = (date: string | Date | number) => {
  const d = dateFormat(date);
  const week = getWeek(d);
  const result: Holiday = {
    date: d,
    week,
  };
  if (['星期六', '星期日'].includes(week)) {
    result.type = '周末';
    result.dayType = 2;
  } else {
    result.type = '工作日';
    result.dayType = 1;
  }
  const holiday = holidays.getDateInfo(d);
  if (holiday) {
    result.type = holiday.type;
    result.dayType = 3;
    if (holiday.status === 0) {
      result.type = '调休补工';
      result.dayType = 4;
    }
  }
  result.ps = 'dayType：1-工作日；2-周末；3-法定节假日；4-补休调工日';
  return result;
};

export const isWorkingDay = (date: string | Date | number) => {
  const r = getDayInfo(date);
  return r.dayType === 1 || r.dayType === 4;
};
export const isWeekend = (date: string | Date | number) => {
  return getDayInfo(date).dayType === 2;
};
export const isStatutoryHoliday = (date: string | Date | number) => {
  return getDayInfo(date).dayType === 3;
};
