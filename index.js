function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog!");

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
mondayWork();
mondayWork("work from home.");

let wrapAdjective = function (makePie = "*") {
  return function (adjective = "special") {
    return `You are ${makePie}${adjective}${makePie}!`;
  };
};

wrapAdjective("%")("a dedicated programmer");
