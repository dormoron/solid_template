/**
 * localStorage模块封装
 */

export default {
  /**
   * storage 存储
   * @param key 参数名称
   * @param val 写入值
   */
  set(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  },
  /**
   * storage读取
   * @param key 参数名称
   * @returns storage 值
   */
  get(key: string) {
    const val = localStorage.getItem(key);
    if (!val) return "";
    try {
      return JSON.parse(val);
    } catch (err) {
      return val;
    }
  },
  /**
   * 删除localStorage
   * @param key 参数名称
   */
  remove(key: string) {
    localStorage.removeItem(key);
  },
  /**
   * 清空localStorage
   */
  clear() {
    localStorage.clear();
  },
};
