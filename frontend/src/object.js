class rawMath {
  #value;
  constructor(value = null) {
    this.#value = value;
  }
  getvalue() {
    return this.#value;
  }
  setvalue(newvalue) {
    if (typeof newvalue !== 'string' || typeof newvalue !== 'number'){
      throw new Error("Invalid Input! Input must be string or a number!");
    }
    
    this.#value = newvalue;
    return true;
  } // if value are returned from users, it will set its value
}

class sigma {
  #endNum;
  #startNum;
  #expression;
  constructor(startNum = null, endNum = null, expression = null) {
    if (
      startNum > endNum ||
      typeof startNum !== "number" ||
      typeof endNum !== "number"
    ) {
      throw new Error("Invalid Bound Input! Must be a number!");
    }
    if (typeof expression != "function") {
      throw new Error("Invalid expression! Must be a function!");
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
  setSigma(startNum, endNum, expression) {
    if (
      startNum > endNum ||
      typeof startNum !== "number" ||
      startNum === null ||
      typeof endNum !== "number" ||
      endNum === null
    ) {
      throw new Error("Invalid Bound Input! Must be a number!");
    }
    if (typeof expression != "function") {
      throw new Error("Invalid expression! Must be a function!");
    }
    this.#endNum = endNum;
    this.#startNum = startNum;
    this.#expression = expression;
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

const classes = {
  rawMath,
  sigma,
  fraction,
};

export default classes;
