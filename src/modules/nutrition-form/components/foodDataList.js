export const foodDataList = [{
  key: '1',
  category: '谷物',
  name: '米、面、全谷类',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '2',
  category: '谷物',
  name: '薯类（土豆、山药、地瓜、芋头）',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '3',
  category: '谷物',
  name: '杂豆（绿豆、蚕豆、芸豆等）',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '4',
  category: '蛋类',
  name: '鸡蛋、鸭蛋、鹌鹑蛋',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '5',
  category: '奶类',
  name: '牛奶、羊奶、无糖酸奶',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '6',
  category: '奶类',
  name: '奶粉、脱脂奶粉',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '7',
  category: '奶类',
  name: '奶酪',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '8',
  category: '豆类',
  name: '北/南豆腐',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '9',
  category: '豆类',
  name: '豆腐丝、豆腐干',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '10',
  category: '豆类',
  name: '豆浆/豆腐脑',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '11',
  category: '肉禽类',
  name: '瘦肉、牛羊肉、鸡肉',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '12',
  category: '鱼虾类',
  name: '鱼虾类',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '13',
  category: '蔬果类',
  name: '蔬菜类',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '14',
  category: '蔬果类',
  name: '水果类',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '15',
  category: '油脂类',
  name: '油脂',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '16',
  category: '油脂类',
  name: '坚果',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '17',
  category: '代餐',
  name: '益力佳/安素（均值）',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '18',
  category: '小计',
  name: '糖类',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '19',
  category: '小计',
  name: '脂肪',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '20',
  category: '小计',
  name: '蛋白质',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}, {
  key: '21',
  category: '小计',
  name: '能量',
  breakfast: '',
  addMileB: '',
  lunch: '',
  addMileL: '',
  dinner: '',
  addMileN: '',
  total: '',
}]

export const getCellMerge = () => {
  const arr = []
  for (let i = 0; i < foodDataList.length;) {
    const indexOfCategory = []
    let count = 0
    for (let j = i; j < foodDataList.length; j += 1) {
      if (foodDataList[i].category === foodDataList[j].category) {
        indexOfCategory.push(j)
        count += 1
      }
    }
    const obj = { date: '', indexOfCategory: [], count: 0 }
    obj.date = foodDataList[i].category
    obj.indexOfCategory = indexOfCategory
    obj.count = count
    arr.push(obj)
    i += count
  }
  return arr
}