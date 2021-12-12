/**
 * 工具库
 */

type StrAndNum = string | number

/**
 * 根据输入数字大小转为单位
 * @param num
 * @return StrAndNum
 */
export function numberConversion(num: number): StrAndNum {
    if (num < 10000) {
        return num   // 小于一万直接返回
    } else if (num > 100000000) {
        let result = num / 100000000
        let end = result.toFixed(2)
        return end + '亿'
    } else {
        let result = num / 10000
        let end = result.toFixed(2)
        return end + '万'
    }
}