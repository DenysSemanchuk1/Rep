let money, time;

start();

let appData = {
  budgetData: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
};

chooseExpenses();
detectDayBudget();
detectLevel();
checkIncome();
chooseOptExpenses();

//functions
function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      b = prompt("Во сколько обойдется?", "");
    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
    } else {
      i -= 1;
    }
  }
}
function detectDayBudget() {
  appData.moneyPerDay = (appData.budgetData / 30).toFixed();
  alert("Ежедневный бюджет: " + appData.moneyPerDay);
}
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Error!");
  }
}

function checkIncome() {
  if (appData.savings == true) {
    let save = +prompt("Введите сумму накоплений!!"),
      percent = prompt("Введите процент накоплений!!");
    appData.monthIncome = (save / 100 / 12) * percent;
    alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }
}

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let c = prompt("Статья необязательных расходов?", "");
    appData.optionalExpenses[i] = c;
  }
}
