import { getDayInfo, isWorkingDay, isWeekend, isStatutoryHoliday } from '../index';
test('2020-10-01信息', () => {
  expect(getDayInfo('2020-10-01')).toMatchObject({
    date: '2020-10-01',
    week: '星期四',
    type: '国庆节',
    dayType: 3,
    ps: 'dayType：1-工作日；2-周末；3-法定节假日；4-补休调工日',
  });
});
test('2020-10-13信息', () => {
  expect(getDayInfo('2020-10-13')).toMatchObject({
    date: '2020-10-13',
    week: '星期二',
    type: '工作日',
    dayType: 1,
    ps: 'dayType：1-工作日；2-周末；3-法定节假日；4-补休调工日',
  });
});
test('2020-11-26是否工作日', () => {
  expect(isWorkingDay('2020-11-26')).toBeTruthy();
});
test('2020-10-10是否工作日', () => {
  expect(isWorkingDay('2020-10-10')).toBeTruthy();
});
test('2020-11-28是否工作日', () => {
  expect(isWorkingDay('2020-11-28')).toBeFalsy();
});
test('2020-11-28是否周末', () => {
  expect(isWeekend('2020-11-28')).toBeTruthy();
});
test('2020-11-26是否周末', () => {
  expect(isWeekend('2020-11-26')).toBeFalsy();
});
test('2020-10-01是否法定假', () => {
  expect(isStatutoryHoliday('2020-10-01')).toBeTruthy();
});
test('2020-11-26是否法定假', () => {
  expect(isStatutoryHoliday('2020-11-26')).toBeFalsy();
});
