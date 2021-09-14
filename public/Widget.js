class Widget {
    constructor(name, x, y, w, h, func) {
      this.name = name;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.func = func;
  
      this.update = function () {
        func(this.name, this.x, this.y, this.w, this.h);
      };
    }
  }