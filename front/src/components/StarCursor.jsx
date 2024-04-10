import React, { useEffect } from 'react';
import p5 from 'p5';

const StarCursor = () => {
  useEffect(() => {
    let magicParticles = [];
    let stars = [];

    const MagicParticle = (x, y) => {
      return {
        x,
        y,
        size: Math.random() * (30 - 10) + 10,
        baseColor: color(randomColor()),
        color: color(randomColor()),
        rotation: Math.random() * TWO_PI,
        speed: Math.random() * (3 - 1) + 1,
        opacity: 155,
        fadeOutRate: Math.random() * (3 - 1) + 1,
        shapeType: 'star',
        sparkles: [],
        shimmer: Math.random() * (0.8 - 0.3) + 0.3,
        shimmerSpeed: Math.random() * (0.02 - 0.005) + 0.005,
        update: function () {
          this.x += cos(this.rotation) * this.speed;
          this.y += sin(this.rotation) * this.speed;
          this.opacity -= this.fadeOutRate;

          this.updateSparkles();
          this.updateColor();
        },
        updateSparkles: function () {
          for (let i = this.sparkles.length - 1; i >= 0; i--) {
            let sparkle = this.sparkles[i];
            sparkle.update();
            if (sparkle.opacity <= 0) {
              this.sparkles.splice(i, 1);
            }
          }
        },
        updateColor: function () {
          let shimmerVal = sin(frameCount * this.shimmerSpeed);
          let shimmerColor = lerpColor(this.baseColor, color(255), shimmerVal);
          let sparkleColor = lerpColor(shimmerColor, color(255), this.opacity / 255);
          this.color = lerpColor(sparkleColor, this.baseColor, this.shimmer);
        },
        display: function () {
          noStroke();
          fill(this.color, this.opacity);
          push();
          translate(this.x, this.y);
          rotate(frameCount * 0.02);
          let shapeSize = this.size * 0.6;
          if (this.shapeType === 'circle') {
            ellipse(0, 0, shapeSize, shapeSize);
          } else if (this.shapeType === 'rect') {
            rect(-shapeSize / 2, -shapeSize / 2, shapeSize, shapeSize, 5);
          } else if (this.shapeType === 'star') {
            drawStar(0, 0, 5, 15, 5);
          }
          pop();

          for (let sparkle of this.sparkles) {
            sparkle.display();
          }

          if (random() < 0.1) {
            let sparkle = new Sparkle(this.x, this.y, this.color);
            this.sparkles.push(sparkle);
          }
        },
      };
    };

    const Star = () => {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * (3 - 1) + 1,
        opacity: Math.random() * (255 - 100) + 100,
        twinkleSpeed: Math.random() * (0.03 - 0.01) + 0.01,
        update: function () {
          let twinkleVal = sin(frameCount * this.twinkleSpeed);
          this.opacity = map(twinkleVal, -1, 1, 100, 255);
        },
        display: function () {
          noStroke();
          fill(255, this.opacity);
          ellipse(this.x, this.y, this.size, this.size);
        },
      };
    };

    const drawStar = (x, y, radius1, radius2, npoints) => {
      let angle = TWO_PI / npoints;
      let halfAngle = angle / 2.0;
      beginShape();
      for (let a = -PI / 2; a < TWO_PI - PI / 2; a += angle) {
        let sx = x + cos(a) * radius2;
        let sy = y + sin(a) * radius2;
        vertex(sx, sy);
        sx = x + cos(a + halfAngle) * radius1;
        sy = y + sin(a + halfAngle) * radius1;
        vertex(sx, sy);
      }
      endShape(CLOSE);
    };

    const Sparkle = (x, y, color) => {
      return {
        x,
        y,
        size: Math.random() * (8 - 2) + 2,
        color,
        opacity: 255,
        speedX: Math.random() * (1 - (-1)) + (-1),
        speedY: Math.random() * (1 - (-1)) + (-1),
        update: function () {
          this.x += this.speedX;
          this.y += this.speedY;
          this.opacity -= 10;
        },
        display: function () {
          noStroke();
          fill(this.color, this.opacity);
          ellipse(this.x, this.y, this.size, this.size);
        },
      };
    };

    const sketch = (p) => {
      // Your existing sketch code
    };

    new p5(sketch);

    // Cleanup on component unmount
    return () => {
      magicParticles = [];
      stars = [];
    };
  }, []);

  return <div id="star-card"></div>;
};

export default StarCursor;
