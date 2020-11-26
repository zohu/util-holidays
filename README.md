# 法定节假日查询（中国）
![](https://img.shields.io/badge/Language-TypeScript-orange.svg)

### 使用方法
1. 支持离线、在线两种模式；
2. 离线模式需要每年更新版本，当前版本不属于当年时，会报错提示；
3. 在线模式每次启动时，会检查本地数据，若不是当年，则调用接口更新本地数据，（因此若有出网白名单限制的话，请将此API放行:）；

```bash
# 安装
npm i chinese-holidays
# 或者 yarn add chinese-holidays
```
```javascript
import chineseHoliday from 'chinese-holidays'
```

### 其他说明
1. 另提供免费的开放接口供大家使用，API地址：
2. 使用方法：
    - GET:
    - POST:
3. 接口资源有限，因此限制每个key可以最高调用10次/s；