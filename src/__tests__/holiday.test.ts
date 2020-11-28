import { getDayInfo, isWorkingDay, isWeekend, isStatutoryHoliday, config, dateFormat } from '../index';
import { HolidaysData } from '../holidays-data';
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
test('The date is out of data.', () => {
  try {
    getDayInfo('2222-01-01');
  } catch (error) {
    expect(() => error.message === 'The date is out of data.').toBeTruthy();
  }
});
test('Invalid date', () => {
  try {
    getDayInfo('Invalid');
  } catch (error) {
    expect(() => error.message === 'Invalid date: Invalid').toBeTruthy();
  }
});
test('HolidaysData', () => {
  expect(new HolidaysData({ onLine: true, key: '06907aecd7bd61bd1f21a94d5cfedbfc' }).getDateInfo('2222-11-11'));
  expect(new HolidaysData({ onLine: true, key: '06907aecd7bd61bd1f21a94d5cfedbfc' }).offOnLine());
});
test('getData', (done) => {
  new HolidaysData({ onLine: true, key: '06907aecd7bd61bd1f21a94d5cfedbfc', url: 'http://127.0.0.1' }).getData(done);
});
test('getData', (done) => {
  new HolidaysData({ onLine: true, key: '06907aecd7bd61bd1f21a94d5cfedbfc' }).getData(done);
});
test('getData', (done) => {
  new HolidaysData({ onLine: true, key: '11' }).getData(done);
});
test('config', () => {
  expect(config());
  expect(config({ onLine: false, key: '' }));
  expect(config({ onLine: true, key: '' }));
});
test('dateFormat', () => {
  expect(dateFormat('2020-01-01 00:00:00:000', 'yyyy-MM-dd')).toBe('2020-01-01');
  expect(dateFormat('2020-01-01 00:00:00:000', 'MM-dd')).toBe('01-01');
  expect(dateFormat('2020-01-01 00:00:00:000', 'yyyy-MM-dd hh:mm:ss:S')).toBe('2020-01-01 00:00:00:0');
});
