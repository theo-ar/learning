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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor() {\n    this.towers = [[3, 2, 1], [], []];\n  }\n\n  isValidMove(startTowerIdx, endTowerIdx) {\n      const startTower = this.towers[startTowerIdx];\n      const endTower = this.towers[endTowerIdx];\n\n      if (startTower.length === 0) {\n        return false;\n      } else if (endTower.length == 0) {\n        return true;\n      } else {\n        const topStartDisc = startTower[startTower.length - 1];\n        const topEndDisc = endTower[endTower.length - 1];\n        return topStartDisc < topEndDisc;\n      }\n  }\n\n  isWon() {\n      // move all the discs to the last or second tower\n      return (this.towers[2].length == 3) || (this.towers[1].length == 3);\n  }\n\n  move(startTowerIdx, endTowerIdx) {\n      if (this.isValidMove(startTowerIdx, endTowerIdx)) {\n        this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());\n        return true;\n      } else {\n        return false;\n      }\n  }\n\n  print() {\n      console.log(JSON.stringify(this.towers));\n  }\n\n  promptMove(reader, callback) {\n      this.print();\n      reader.question(\"Enter a starting tower: \", start => {\n        const startTowerIdx = parseInt(start);\n        reader.question(\"Enter an ending tower: \", end => {\n          const endTowerIdx = parseInt(end);\n          callback(startTowerIdx, endTowerIdx);\n        });\n      });\n  }\n\n  run(reader, gameCompletionCallback) {\n      this.promptMove(reader, (startTowerIdx, endTowerIdx) => {\n        if (!this.move(startTowerIdx, endTowerIdx)) {\n          console.log(\"Invalid move!\");\n        }\n\n        if (!this.isWon()) {\n          // Continue to play!\n          this.run(reader, gameCompletionCallback);\n        } else {\n          this.print();\n          console.log(\"You win!\");\n          gameCompletionCallback();\n        }\n      });\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const HanoiView = __webpack_require__(/*! ./view */ \"./src/view.js\");\nconst HanoiGame = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n$(() => {\n  const rootEl = $('.hanoi');\n  const game = new HanoiGame();\n  new HanoiView(game, rootEl);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\r\n  constructor(game, $el) {\r\n    this.game = game;\r\n    this.$el = $el;\r\n\r\n    this.fromTowerIdx = null;\r\n\r\n    this.$el.on(\r\n      \"click\",\r\n      \"ul\",\r\n      this.clickTower.bind(this)\r\n    );\r\n\r\n    this.setupTowers();\r\n    this.render();\r\n  }\r\n\r\n  clickTower(event) {\r\n    const clickedTowerIdx = $(event.currentTarget).index();\r\n\r\n    if (this.fromTowerIdx === null) {\r\n      this.fromTowerIdx = clickedTowerIdx;\r\n    } else {\r\n      if (!this.game.move(this.fromTowerIdx, clickedTowerIdx)) {\r\n        alert(\"Invalid Move! Try again.\");\r\n      }\r\n\r\n      this.fromTowerIdx = null;\r\n    }\r\n\r\n    this.render();\r\n\r\n    if (this.game.isWon()) {\r\n      // Remove click handler when done.\r\n      this.$el.off(\"click\");\r\n      this.$el.addClass(\"game-over\");\r\n      alert(\"Good work, you!\");\r\n    }\r\n  }\r\n\r\n  setupTowers() {\r\n    /*\r\n    We're setting up the skeleton for our towers\r\n    here. It consist of three <ul> elements, all\r\n    floated left, with each three nested <li>s.\r\n    Because the <ul>s are floated, we need to\r\n    add the `.group` class, containing the clearfix,\r\n    to their parent. The <li> elements all will be\r\n    invisible by default. Adding a disk class to\r\n    them will make them visible.\r\n    */\r\n\r\n    this.$el.empty();\r\n    this.$el.addClass(\"group\");\r\n\r\n    let $tower, $disk;\r\n\r\n    for (let towerIdx = 0; towerIdx < 3; towerIdx++) {\r\n      $tower = $(\"<ul>\");\r\n\r\n      for (let diskIdx = 0; diskIdx < 3; diskIdx++) {\r\n        $disk = $(\"<li>\");\r\n        $tower.append($disk);\r\n      }\r\n\r\n      this.$el.append($tower);\r\n    };\r\n  }\r\n\r\n  render() {\r\n    /*\r\n    Rather than removing all our elements from the page\r\n    and building them up again, we are removing only the\r\n    classes and re-adding them as necessary. This is a\r\n    more light-weight approach and will speed up the\r\n    redrawing in the browser.\r\n    */\r\n    const $towers = this.$el.find(\"ul\");\r\n    $towers.removeClass();\r\n\r\n    if (this.fromTowerIdx !== null) {\r\n      $towers.eq(this.fromTowerIdx).addClass(\"selected\");\r\n    }\r\n\r\n    this.game.towers.forEach( (disks, towerIdx) => {\r\n      const $disks = $towers.eq(towerIdx).children();\r\n      $disks.removeClass();\r\n\r\n      disks.forEach( (diskWidth, diskIdx) => {\r\n        /*\r\n        Since our disks are stacked from bottom to top\r\n        as [3, 2, 1], we have to select from the back\r\n        of our jQuery object, using negative indices.\r\n        */\r\n        $disks.eq(-1 * (diskIdx + 1)).addClass(`disk-${diskWidth}`);\r\n      });\r\n    });\r\n  }\r\n\r\n}\r\n\r\nmodule.exports = View;\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });