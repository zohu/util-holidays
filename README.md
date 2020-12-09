# 法定节假日查询（中国，定期维护）

![](https://img.shields.io/badge/Language-TypeScript-orange.svg)
[![Build Status](https://travis-ci.com/oak-c/util-holidays.svg?branch=main)](https://travis-ci.com/oak-c/util-holidays)
[![Coverage Status](https://coveralls.io/repos/github/oak-c/util-holidays/badge.svg)](https://coveralls.io/github/oak-c/util-holidays)
[![](https://img.shields.io/npm/v/util-holidays.svg)](https://www.npmjs.com/package/util-holidays)

### 更新记录

#### v1.0.3

    - 增加支持自定义API
    - 完善单元测试

#### v1.0.2

    - 增加2021离线数据

#### v1.0.1

    - 增加2020离线数据

### 安装

```bash
# 安装
npm i util-holidays
# 或者 yarn add util-holidays
```

### 支持离线、在线两种模式，支持 typescript，支持自定义 api

#### 离线模式（已支持 2021 年）

1. 因每年 11 月份左右公布下一年假期，所以离线模式需要每年更新版本，当前版本不属于当年时，会报错提示；

```javascript
import { getDayInfo, isWorkingDay, isWeekend, isStatutoryHoliday } from 'util-holidays'

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

// 判断是否工作日（含法定调工，如2020年10月10日）
isWorkingDay('2020-10-10')
// 判断是否正常休息的周末（不含法定调工，如2020年10月10日）
isWeekend('2020-10-10')
// 判断是否法定节假日
isStatutoryHoliday('2020-10-01')

// 格式化日期， fmt -> yyyy-MM-dd hh:mm:ss:S
dateFormat: (date: string | number | Date, fmt?: string) => string
```

#### 在线模式

1. 在线模式首次启动或每次调用时，会检查本地数据，若不是当年，则调用接口更新本地数据；
2. 若有出网白名单限制的话，请将此 API 放行:https://util.beituyun.com/v1/holidays/queryData
3. 在线模式需要获取 key 并进行配置：

```javascript
// key获取方式为：https://util.beituyun.com/v1/holidays/creatKey?phone=你的手机号
import { config } from 'util-holidays'
config({
    onLine: true,
    key: 'your key',
})
```

4. 在线离线支持随时切换，您可指定某一时刻才联网更新，并且更新后可关闭在线模式；
5. 其他用法同离线模式。
6. 也支持链接自己的 api，只要返回格式如下即可：

```javascript
import { config } from 'util-holidays'
config({
    onLine: true,
    url: 'your api'
})
// api返回数据格式参考上面api的返回值：其中status代表是0调工还是1调休
{
    flag: 1,
    data: [{ date: '2021-06-13', type: '端午节', status: 1 }],
    message: 'string'
}
```

### 其他说明

1. 另提供免费的开放接口供大家使用，API 地址：https://util.beituyun.com/v1/holidays
2. 使用方法（均支持 POST/GET，POST 使用 body，GET 使用 query）：
    - 获取节假日数据：/queryData, 入参 key；
    - 获取日期信息，同 getDayInfo：/getDayInfo, 入参 key、date；
    - 创建 key：/creatKey, 入参 phone
3. 接口资源有限，因此限制每个 key 可以最高调用 50 次/s；
