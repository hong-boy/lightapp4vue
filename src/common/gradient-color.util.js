/* eslint-disable */
const regx = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/;

const regx4rgb = /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/;

export default class GradientColorUtil {
  /**
   * 颜色均匀渐变
   * @param {string} scolor 开始颜色 - 十六进制格式 如：'#ffffff'
   * @param {string} ecolor 结束颜色
   * @param {number} steps 渐变断点的数量
   * @returns {array} 返回十六进制表示的颜色数组
   */
  static transform(scolor, ecolor, steps = 1) {
    let res = [];
    // 把颜色转换为rgb
    let scolorArr = GradientColorUtil.hex2rgb(scolor);
    let ecolorArr = GradientColorUtil.hex2rgb(ecolor);

    let avgRed = (ecolorArr[0] - scolorArr[0]) / steps;
    let avgGreen = (ecolorArr[1] - scolorArr[1]) / steps;
    let avgBlue = (ecolorArr[2] - scolorArr[2]) / steps;

    // 计算断点处的颜色
    for (let i = 0; i < steps; i++) {
      res.push(
        GradientColorUtil.rgb2hex(
          "rgb(" +
            `${parseInt(scolorArr[0] + avgRed * i)},` +
            `${parseInt(scolorArr[1] + avgGreen * i)},` +
            `${parseInt(scolorArr[2] + avgBlue * i)}` +
            ")"
        )
      );
    }

    // 自动替换结束时的颜色为ecolor
    if (res.length > 1) {
      res.splice(res.length - 1, 1, ecolor);
    }

    return res;
  }

  /**
   * 将十六进制表示转换为rgb表示
   * @param {string} color
   * @returns {array} 返回rgb数组
   */
  static hex2rgb(color) {
    if (!color || !regx.test(color)) {
      throw `参数为空或参数格式不正确：${color}`;
    }
    let res = [];
    // 移除'#'前缀
    let tempColor = color.toLowerCase().replace("#", "");

    // 判断是否为3为简写：'#25f' ==> '#2255ff'
    let arr = tempColor.split("");
    if (tempColor.length === 3) {
      arr = arr.reduce((prev, curr) => prev.push(curr, curr), []);
    }

    for (let i = 0; i < 6; i += 2) {
      res.push(parseInt(`0x${arr.slice(i, i + 2).join("")}`));
    }

    return res;
  }
  /**
   * 将rgb表示转换为hex表示
   * @param {string} rgb 形如：rgb(255,255,255) ==> #FFF
   */
  static rgb2hex(rgb) {
    rgb = rgb.toLowerCase();
    if (!rgb || !/^(rgb)/.test(rgb)) {
      throw `参数为空或参数格式不正确：${rgb}`;
    }
    let tempArr = rgb.match(regx4rgb).slice(1, 4);
    let hexArr = tempArr.reduce(function(prev, curr) {
      let val = GradientColorUtil._fillzero(Number(curr).toString(16));
      prev.push(val);
      return prev;
    }, []);
    return `#${hexArr.join("")}`;
  }
  /**
   * 高位补零 形如：'5' ==> '05'
   * @param {string} str
   */
  static _fillzero(str) {
    return str.length < 2 ? `0${str}` : str;
  }
}
