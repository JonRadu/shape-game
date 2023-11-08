const app = new PIXI.Application({
  width: 1200,
  height: 1000,
  background: "white",
  border: "132043",
  antialising: true,
});
document.body.appendChild(app.view);
class gameController {
  static start() {
    let shape_generator = new shapeGenerator();
    app.ticker.add(() => {
      shape_generator.update();
    });
  }
}
const masker = new PIXI.Graphics();
masker
  .lineStyle(2, 0xff0000)
  .beginFill("0CEEAD")
  .drawRect(0, 100, app.screen.width, 800)
  .endFill();

const canvasOutline = new PIXI.Graphics();
canvasOutline.interactive = true;
canvasOutline
  .beginFill("1F4172")
  .drawRect(0, 100, app.screen.width, 800)
  .endFill();

app.stage.addChild(canvasOutline);

class Circle {
  static generate(xPos, yPos, color) {
    const circle = new PIXI.Graphics();
    circle.lineStyle(0).beginFill(color, 1).drawCircle(100, 250, 50).endFill();
    const texture_for_circle = app.renderer.generateTexture(circle);
    const circle_texture = PIXI.Sprite.from(texture_for_circle);
    circle_texture.anchor.set(0.5);
    circle_texture.x = xPos;
    circle_texture.y = yPos;

    const circle_mask = new PIXI.Graphics();
    circle_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawCircle(100, 250, 50)
      .endFill();
    const texture_for_circle_mask = app.renderer.generateTexture(circle_mask);
    const circle_texture_mask = PIXI.Sprite.from(texture_for_circle_mask);
    circle_texture_mask.anchor.set(0.5);
    circle_texture_mask.x = circle_texture.x;
    circle_texture_mask.y = circle_texture.y;
    circle_texture.mask = masker;
    return [circle_texture_mask, circle_texture];
  }
}
class Ellipse {
  static generate(xPos, yPos, color) {
    const ellipse = new PIXI.Graphics();
    ellipse.beginFill(color).drawEllipse(170, 185, 45, 25).endFill();
    const texture_for_ellipse = app.renderer.generateTexture(ellipse);
    const ellipse_texture = PIXI.Sprite.from(texture_for_ellipse);
    ellipse_texture.anchor.set(0.5);
    ellipse_texture.x = xPos;
    ellipse_texture.y = yPos;

    const ellipse_mask = new PIXI.Graphics();
    ellipse_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawEllipse(170, 185, 45, 25)
      .endFill();
    const texture_for_ellipse_mask = app.renderer.generateTexture(ellipse_mask);
    const ellipse_texture_mask = PIXI.Sprite.from(texture_for_ellipse_mask);
    ellipse_texture_mask.anchor.set(0.5);
    ellipse_texture_mask.x = ellipse_texture.x;
    ellipse_texture_mask.y = ellipse_texture.y;
    ellipse_texture.mask = masker;
    return [ellipse_texture_mask, ellipse_texture];
  }
}
class Triangle {
  static generate(xPos, yPos, color) {
    const triangle = new PIXI.Graphics();

    triangle
      .beginFill(color, 1)
      .moveTo(50, 350)
      .lineTo(150, 350)
      .lineTo(100, 250)
      .lineTo(50, 350)
      .endFill();
    const texture_for_triangle = app.renderer.generateTexture(triangle);
    const triangle_texture = PIXI.Sprite.from(texture_for_triangle);
    triangle_texture.anchor.set(0.5);
    triangle_texture.x = xPos;
    triangle_texture.y = yPos;

    const triangle_mask = new PIXI.Graphics();

    triangle_mask
      .beginFill(color, 0)
      .lineStyle(1, color)
      .moveTo(50, 350)
      .lineTo(150, 350)
      .lineTo(100, 250)
      .lineTo(50, 350)
      .endFill();
    const texture_for_triangle_mask =
      app.renderer.generateTexture(triangle_mask);
    const triangle_texture_mask = PIXI.Sprite.from(texture_for_triangle_mask);
    triangle_texture_mask.anchor.set(0.5);
    triangle_texture_mask.x = triangle_texture.x;
    triangle_texture_mask.y = triangle_texture.y;
    triangle_texture.mask = masker;
    return [triangle_texture_mask, triangle_texture];
  }
}
class Rectangle {
  static generate(xPos, yPos, color) {
    const rectangle = new PIXI.Graphics();
    rectangle.beginFill(color);
    rectangle.drawRect(50, -100, 100, 100);
    rectangle.endFill();
    const texture_for_rectangle = app.renderer.generateTexture(rectangle);
    const rectangle_texture = PIXI.Sprite.from(texture_for_rectangle);
    rectangle_texture.anchor.set(0.5);
    rectangle_texture.x = xPos;
    rectangle_texture.y = yPos;
    const rectangle_mask = new PIXI.Graphics();
    rectangle_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawRect(50, -100, 100, 100)
      .endFill();
    const texture_for_rectangle_mask =
      app.renderer.generateTexture(rectangle_mask);
    const rectangle_texture_mask = PIXI.Sprite.from(texture_for_rectangle_mask);
    rectangle_texture_mask.anchor.set(0.5);
    rectangle_texture_mask.x = rectangle_texture.x;
    rectangle_texture_mask.y = rectangle_texture.y;
    rectangle_texture.mask = masker;
    return [rectangle_texture_mask, rectangle_texture];
  }
}
class Pentagon {
  static generate(xPos, yPos, color) {
    const path = [600, 435, 650, 470, 640, 525, 560, 525, 550, 470];
    const pentagon = new PIXI.Graphics();
    pentagon.beginFill(color).drawPolygon(path).endFill();
    const texture_for_pentagon = app.renderer.generateTexture(pentagon);
    const pentagon_texture = PIXI.Sprite.from(texture_for_pentagon);
    pentagon_texture.anchor.set(0.5);
    pentagon_texture.x = xPos;
    pentagon_texture.y = yPos;
    const pentagon_mask = new PIXI.Graphics();
    pentagon_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawPolygon(path)
      .endFill();
    const texture_for_pentagon_mask =
      app.renderer.generateTexture(pentagon_mask);
    const pentagon_texture_mask = PIXI.Sprite.from(texture_for_pentagon_mask);
    pentagon_texture_mask.anchor.set(0.5);
    pentagon_texture_mask.x = pentagon_texture.x;
    pentagon_texture_mask.y = pentagon_texture.y;
    pentagon_texture.mask = masker;
    return [pentagon_texture_mask, pentagon_texture];
  }
}
class Hexagon {
  static generate(xPos, yPos, color) {
    const hexagon = new PIXI.Graphics();
    hexagon.beginFill(color);
    let hexagonRadius = 60;
    let hexagonHeight = hexagonRadius * Math.sqrt(3);
    hexagon.drawPolygon([
      -hexagonRadius,
      0,
      -hexagonRadius / 2,
      hexagonHeight / 2,
      hexagonRadius / 2,
      hexagonHeight / 2,
      hexagonRadius,
      0,
      hexagonRadius / 2,
      -hexagonHeight / 2,
      -hexagonRadius / 2,
      -hexagonHeight / 2,
    ]);
    hexagon.endFill();
    const texture_for_hexagon = app.renderer.generateTexture(hexagon);
    const hexagon_texture = PIXI.Sprite.from(texture_for_hexagon);
    hexagon_texture.anchor.set(0.5);
    hexagon_texture.x = xPos;
    hexagon_texture.y = yPos;
    const hexagon_mask = new PIXI.Graphics();
    hexagon_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawPolygon([
        -hexagonRadius,
        0,
        -hexagonRadius / 2,
        hexagonHeight / 2,
        hexagonRadius / 2,
        hexagonHeight / 2,
        hexagonRadius,
        0,
        hexagonRadius / 2,
        -hexagonHeight / 2,
        -hexagonRadius / 2,
        -hexagonHeight / 2,
      ]);
    hexagon.endFill();
    const texture_for_hexagon_mask = app.renderer.generateTexture(hexagon_mask);
    const hexagon_texture_mask = PIXI.Sprite.from(texture_for_hexagon_mask);
    hexagon_texture_mask.anchor.set(0.5);
    hexagon_texture_mask.x = hexagon_texture.x;
    hexagon_texture_mask.y = hexagon_texture.y;
    hexagon_texture.mask = masker;
    return [hexagon_texture_mask, hexagon_texture];
  }
}
class Star {
  static generate(xPos, yPos, color) {
    const star = new PIXI.Graphics();
    star.beginFill(color).drawStar(360, 370, 5, 50).endFill();
    const texture_for_star = app.renderer.generateTexture(star);
    const star_texture = PIXI.Sprite.from(texture_for_star);
    star_texture.anchor.set(0.5);
    star_texture.x = xPos;
    star_texture.y = yPos;
    const star_mask = new PIXI.Graphics();
    star_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawStar(360, 370, 5, 50)
      .endFill();
    const texture_for_star_mask = app.renderer.generateTexture(star_mask);
    const star_texture_mask = PIXI.Sprite.from(texture_for_star_mask);
    star_texture_mask.anchor.set(0.5);
    star_texture_mask.x = star_texture.x;
    star_texture_mask.y = star_texture.y;
    star_texture.mask = masker;
    return [star_texture_mask, star_texture];
  }
}

class RandomShape {
  static generate(xPos, yPos, color, path) {
    const random = new PIXI.Graphics();
    random.beginFill(color).drawPolygon(path).endFill();
    const texture_for_random = app.renderer.generateTexture(random);
    const random_texture = PIXI.Sprite.from(texture_for_random);
    random_texture.anchor.set(0.5);
    random_texture.x = xPos;
    random_texture.y = yPos;
    const random_mask = new PIXI.Graphics();
    random_mask
      .lineStyle(2, color)
      .beginFill(color, 0)
      .drawPolygon(path)
      .endFill();
    const texture_for_random_mask = app.renderer.generateTexture(random_mask);
    const random_texture_mask = PIXI.Sprite.from(texture_for_random_mask);
    random_texture_mask.anchor.set(0.5);
    random_texture_mask.x = random_texture.x;
    random_texture_mask.y = random_texture.y;
    random_texture.mask = masker;
    return [random_texture_mask, random_texture];
  }
}
function getRandomFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
class shapeGenerator {
  constructor() {
    this.shapes = [];
    this.gravity = 2;
    this.shapes_area = 0;
    this.shapes_per_second_input = 1;
    if (this.shapes_per_second_input % 2 == 0) {
      this.shapes_per_second = this.shapes_per_second_input;
    } else {
      this.shapes_per_second = this.shapes_per_second_input + 1;
    }
    this.colors = [
      "red",
      "green",
      "blue",
      "orange",
      "grey",
      "yellow",
      "magenta",
      "cyan",
      "purple",
      "silver",
      "maroon",
    ];
    let clicked = this;
    canvasOutline.on("pointerup", function (e) {
      let x = parseInt(e.data.global.x);
      let y = parseInt(e.data.global.y);
      clicked.generate(1, x, y, 1);
    });
    this.random_shapes = [
      Circle,
      Ellipse,
      Triangle,
      Rectangle,
      Pentagon,
      Hexagon,
      Star,
    ];
    this.initializeButtonsListener();
  }
  update() {
    if (this.shapes.length === 0 && this.shapes_per_second > 0) {
      this.generate(this.shapes_per_second);
    }
    if (this.shapes_per_second === 0) {
      for (let i = 0; i < this.shapes.length; i++) {
        app.stage.removeChild(this.shapes[i]);
      }
    }
    let new_shapes_to_generate = 0;
    if (this.shapes_per_second > this.shapes.length) {
      new_shapes_to_generate = this.shapes_per_second - this.shapes.length;
      this.generate(new_shapes_to_generate);
    }
    if (this.shapes_per_second < this.shapes.length) {
      app.stage.removeChild(this.shapes[0]);
      this.shapes.splice(0, 1);
    }
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].y += this.gravity;
    }
    new_shapes_to_generate = 0;
    for (let i = 0; i < this.shapes.length; i++) {
      if (this.shapes[i].y > 1100) {
        new_shapes_to_generate++;
        app.stage.removeChild(this.shapes[i]);

        this.shapes.splice(i, 1);
      }
    }
    this.generate(new_shapes_to_generate);
  }
  generate(shapes_to_generate, x_pos = 0, y_pos = -50, random = 0) {
    for (let i = 0; i < shapes_to_generate; i++) {
      let random_shape_index = this.getRandomInt(this.random_shapes.length);
      let random_color_index = this.getRandomInt(this.colors.length);
      let random_path = [
        getRandomFromInterval(580, 680),
        getRandomFromInterval(300, 400),
        getRandomFromInterval(650, 750),
        getRandomFromInterval(360, 510),
        getRandomFromInterval(690, 800),
        getRandomFromInterval(320, 420),
        getRandomFromInterval(680, 780),
        getRandomFromInterval(470, 570),
        getRandomFromInterval(550, 650),
        getRandomFromInterval(520, 620),
      ];
      x_pos = x_pos === 0 ? this.getRandomInt(1200) : x_pos;
      y_pos = y_pos === -50 ? -50 : y_pos;
      for (let j = 0; j < 2; j++) {
        if (random === 0) {
          var generated_shape = this.random_shapes[random_shape_index].generate(
            x_pos,
            y_pos,
            this.colors[random_color_index]
          )[j];
        } else {
          var generated_shape = RandomShape.generate(
            x_pos,
            y_pos,
            this.colors[random_color_index],
            random_path
          )[j];
        }
        this.shapes.push(generated_shape);
        app.stage.addChild(this.shapes[this.shapes.length - 1]);
      }
      app.stage.removeChild(masker);
      x_pos = 0;
    }
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  initializeButtonsListener() {
    let number_current_shapes = document.getElementById(
      "number_current_shapes"
    );
    let inc_shapes_button = document.getElementById("inc_shapes");
    let dec_shapes_button = document.getElementById("dec_shapes");
    let shapes_input = document.getElementById("shapes_value");
    let shapes_area_input = document.getElementById("surface_occupied_shapes");
    shapes_area_input.value =
      "Surface area occupied: " + this.shapes_area + " px^2";
    shapes_input.value = Math.round(this.shapes_per_second / 2);
    number_current_shapes.value =
      "Number of current shapes: " + Math.round(this.shapes_per_second / 2);

    let inc_gravity_button = document.getElementById("inc_gravity");
    let dec_gravity_button = document.getElementById("dec_gravity");
    let gravity_input = document.getElementById("gravity_value");
    gravity_input.value = this.gravity;

    let _self = this;
    inc_shapes_button.addEventListener("click", function () {
      _self.shapes_per_second++;
      if (_self.shapes_per_second % 2 == 0) {
      } else {
        _self.shapes_per_second = _self.shapes_per_second + 1;
      }
      shapes_input.value = Math.round(_self.shapes_per_second / 2);
      number_current_shapes.value =
        "Number of current shapes: " + Math.round(_self.shapes_per_second / 2);
    });
    dec_shapes_button.addEventListener("click", function () {
      if (_self.shapes_per_second > 0) {
        _self.shapes_per_second--;
      }
      if (_self.shapes_per_second % 2 == 0) {
      } else {
        _self.shapes_per_second = _self.shapes_per_second - 1;
      }
      shapes_input.value = Math.round(_self.shapes_per_second / 2);
      number_current_shapes.value =
        "Number of current shapes: " + Math.round(_self.shapes_per_second / 2);
    });
    inc_gravity_button.addEventListener("click", function () {
      _self.gravity++;
      gravity_input.value = _self.gravity;
    });
    dec_gravity_button.addEventListener("click", function () {
      if (_self.gravity > 1) _self.gravity--;
      gravity_input.value = _self.gravity;
    });
  }
}

gameController.start();
