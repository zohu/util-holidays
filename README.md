# 法定节假日查询（中国，定期维护）
![](https://img.shields.io/badge/Language-TypeScript-orange.svg)
[![Build Status](https://travis-ci.com/oak-c/chinese-holidays.svg?branch=main)](https://travis-ci.com/oak-c/chinese-holidays)
[![Coverage Status](https://coveralls.io/repos/github/oak-c/chinese-holidays/badge.svg)](https://coveralls.io/github/oak-c/chinese-holidays)

### 使用方法
1. 支持离线、在线两种模式；
2. 因国务院每年11月份公布来年假期，所以离线模式需要每年更新版本，当前版本不属于当年时，会报错提示；
3. 在线模式首次启动或每年12月内，会检查本地数据，若不是当年，则调用接口更新本地数据，（因此若有出网白名单限制的话，请将此API放行:）；（离线已含2021年，但在线模式未发布）


```bash
# 安装
npm i chinese-holidays
# 或者 yarn add chinese-holidays
```
```javascript
import { getDayInfo, isWorkingDay, isWeekend, isStatutoryHoliday } from 'chinese-holidays'
```
```javascript
// 获取日期信息
getDayInfo('2020-10-01')
// 返回值结构：
{
    date: '2020-10-01',
    week: '星期四',
    type: '国庆节',
    dayType: 3,
    ps: 'dayType：1-工作日；2-周末；3-法定节假日；4-补休调工日'
}
```
```javascript
// 判断是否工作日（含法定调工，如2020年10月10日）
isWorkingDay('2020-10-10')
// 判断是否正常休息的周末（不含法定调工，如2020年10月10日）
isWeekend('2020-10-10')
// 判断是否法定节假日
isStatutoryHoliday('2020-10-01')
```

### 其他说明
1. 另提供免费的开放接口供大家使用，API地址：
2. 使用方法：
    - GET:
    - POST:
3. 接口资源有限，因此限制每个key可以最高调用10次/s；