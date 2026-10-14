  /**
   * 將 Buy Feature 模式名稱轉換為檔案索引
   * @param mode Buy Feature 模式名稱 (例如: 'bf', 'bf1', 'bf2', 'dc', 'dc1', 'dc2', 'eb', 'eb1', 'eb2', ...)
   * @returns 檔案索引 (bf/bf1=0, bf2=1, bf3=2, ...)
   */
export function FindModeIndex(mode: string): number {
  // 尋找數字部位
  const numberPart = mode.replace(/^\D+/g, ''); // 移除開頭的非數字字符，保留數字部分
  
  // 如果没有数字或数字为 1，返回 0
  if (numberPart === '' || numberPart === '1') {
    return 0;
  }
  
  // 解析数字并减 1
  const num = parseInt(numberPart, 10);
  return isNaN(num) ? 0 : num - 1;
}