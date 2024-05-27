import react from "react";

class MathObjects {
  #value;
  constructor(value = null) {
    this.#value = value;
  }
  getvalue() {
    return this.#value;
  }
  setvalue(newvalue) {
    this.#value = newvalue;
    return true;
  }
}

class sigma {
  #endNum;
  #startNum;
  #expression;
  constructor(startNum, endNum, expression) {
    if (
      startNum > endNum ||
      typeof startNum != "number" ||
      typeof endNum != "number"
    ) {
      throw new Error("Invalid Input!");
    }
    if (typeof expression != "expression") {
      throw new Error("Invalid expression!");
    }
    this.#endNum = endNum;
    this.#startNum = startNum;
    this.#expression = expression;
  }
  getSum() {
    var sum = 0;
    for (let i = this.#startNum; i <= this.#endNum; i++) {
      sum += this.#expression(i);
    }
    return sum;
  }
  getStartNum() {
    return this.#startNum;
  }

  getEndNum() {
    return this.#endNum;
  }

  getExpression() {
    return this.#expression;
  }
}

class fraction {
  #top;
  #bottom;
  constructor(top, bottom) {
    if (typeof top != "number" || typeof bottom != "number") {
      throw new Error("Invalid Input!");
    }
    this.#top = top;
    this.#bottom = bottom;
  }
  getTop() {
    return this.#top;
  }
  getBottom() {
    return this.#bottom;
  }
}
