/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\r\nvar Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\")\r\n\r\nconst COLOR = \"blue\";\r\nconst RADIUS = 10;\r\n\r\nfunction Asteroid(object) {\r\n  MovingObject.call(this, object);\r\n  this.color = COLOR;\r\n  this.radius = RADIUS;\r\n  this.vel = Util.randomVec(10);\r\n};\r\n\r\n\r\n\r\nUtil.inherits(Asteroid, MovingObject);\r\n\r\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\r\nconst asteroids = [];\r\n\r\nfunction Game() {\r\n  this.asteroids = this.addAsteroids()\r\n}\r\n\r\nGame.NUM_ASTEROIDS = 10;\r\nGame.DIM_X = 1000;\r\nGame.DIM_Y = 500;\r\n\r\nGame.prototype.addAsteroids = function() {\r\n  for(let i = 0; i < Game.NUM_ASTEROIDS; ++i ) {\r\n    let pos = this.randomPosition();\r\n    asteroids.push(new Asteroid({pos}))\r\n  }\r\n  return asteroids;\r\n}\r\n\r\nGame.prototype.randomPosition = function() {\r\n  return [Math.random()*Game.DIM_X, Math.random()*Game.DIM_Y]\r\n}\r\n\r\nGame.prototype.draw = function(ctx) {\r\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\r\n\r\n  asteroids.forEach(function (asteroid) {\r\n    asteroid.draw(ctx)\r\n  })\r\n}\r\n\r\nGame.prototype.moveObjects = function() {\r\n  asteroids.forEach(function (asteroid){\r\n    asteroid.move()\r\n  })\r\n}\r\n\r\nGame.prototype.wrap = function(pos) {\r\n  if (Game.DIM_X < pos[0] || Game.DIM_Y < pos[1]) {\r\n    return this.randomPosition()\r\n  } else {\r\n    return pos\r\n  }\r\n}\r\n\r\nGame.prototype.checkCollisions = function() {\r\n  for(let i = 0; i < asteroids.length-1; i++){\r\n    for(let j = 1; j < asteroids.length; j++){\r\n      if (asteroids[i].isCollidedWith(asteroids[j])) {\r\n        \r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nGame.prototype.remove = function(asteroid) {\r\n  let index = asteroids.indexOf(asteroid);\r\n  asteroids.splice(index, 1);\r\n}\r\n\r\nGame.prototype.step = function() {\r\n  this.moveObjects();\r\n  this.checkCollisions();\r\n}\r\n\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\r\n\r\nfunction GameView() {\r\n  this.g = new Game();\r\n};\r\n\r\nGameView.prototype.start = function (canvasEl) {\r\n  const ctx = canvasEl.getContext(\"2d\");\r\n  setInterval(() => {\r\n    this.g.step();\r\n    this.g.draw(ctx);\r\n  }, 20);\r\n  \r\n}\r\n\r\n\r\nmodule.exports = GameView;\r\n\r\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\r\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\r\n\r\nwindow.MovingObject = MovingObject;\r\nwindow.Asteroid = Asteroid;\r\nwindow.Game = Game;\r\nwindow.GameView = GameView;\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function(){\r\n  const canvasEl = document.getElementById(\"mycanvas\");\r\n  canvasEl.height = Game.DIM_Y;\r\n  canvasEl.width = Game.DIM_X;\r\n  new GameView().start(canvasEl);\r\n}); \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nfunction MovingObject(object) {\r\n  this.pos = object.pos;\r\n  this.vel = object.vel;\r\n  this.radius = object.radius;\r\n  this.color = object.color;\r\n}\r\n\r\nMovingObject.prototype.move = function() {\r\n  this.pos = Game.prototype.wrap(this.pos)\r\n  this.pos[0] += this.vel[0];\r\n  this.pos[1] += this.vel[1];\r\n};\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n  ctx.fillStyle = this.color;\r\n  ctx.beginPath();\r\n\r\n  ctx.arc(\r\n    this.pos[0],\r\n    this.pos[1],\r\n    this.radius,\r\n    0,\r\n    2 * Math.PI,\r\n    false\r\n  );\r\n\r\n  ctx.fill();\r\n};\r\n\r\nMovingObject.prototype.isCollidedWith = function(otherObject) {\r\n  let a = this.pos[0] - otherObject.pos[0];\r\n  let b = this.pos[1] - otherObject.pos[1];\r\n  let center_dist = Math.sqrt( a*a + b*b );\r\n  let radius_sum = this.radius + otherObject.radius;\r\n\r\n  if (center_dist < radius_sum) {\r\n    Game.prototype.remove(this);\r\n    Game.prototype.remove(otherObject);\r\n    return true;\r\n  } else {\r\n    return false;\r\n  }\r\n};\r\n\r\nmodule.exports = MovingObject\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\r\n  inherits: function inherits(childClass, parentClass) {\r\n    var Surrogate = function() {};\r\n    Surrogate.prototype = parentClass.prototype;\r\n    childClass.prototype = new Surrogate();\r\n    childClass.prototype.constructor = childClass;\r\n  },\r\n\r\n  randomVec(length) {\r\n    const deg = 2 * Math.PI * Math.random();\r\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\r\n  },\r\n  \r\n  // Scale the length of a vector by the given amount.\r\n  scale(vec, m) {\r\n    return [vec[0] * m, vec[1] * m];\r\n  }\r\n}\r\n\r\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });