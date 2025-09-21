/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Director: () => (/* binding */ Director),\n/* harmony export */   Teacher: () => (/* binding */ Teacher),\n/* harmony export */   createEmployee: () => (/* binding */ createEmployee),\n/* harmony export */   executeWork: () => (/* binding */ executeWork),\n/* harmony export */   isDirector: () => (/* binding */ isDirector),\n/* harmony export */   teachClass: () => (/* binding */ teachClass)\n/* harmony export */ });\n/* Task 2 / Task 6 - employees (frontend-javascript)\n   Exports:\n   - DirectorInterface, TeacherInterface\n   - Director, Teacher classes\n   - createEmployee, isDirector, executeWork\n   - (Optional) Subjects and teachClass\n*/\nvar Director = /** @class */ (function () {\n    function Director() {\n    }\n    Director.prototype.workFromHome = function () {\n        return 'Working from home';\n    };\n    Director.prototype.getCoffeeBreak = function () {\n        return 'Getting a coffee break';\n    };\n    Director.prototype.workDirectorTasks = function () {\n        return 'Getting to director tasks';\n    };\n    return Director;\n}());\n\nvar Teacher = /** @class */ (function () {\n    function Teacher() {\n    }\n    Teacher.prototype.workFromHome = function () {\n        return 'Cannot work from home';\n    };\n    Teacher.prototype.getCoffeeBreak = function () {\n        return 'Cannot have a break';\n    };\n    Teacher.prototype.workTeacherTasks = function () {\n        return 'Getting to work';\n    };\n    return Teacher;\n}());\n\n/**\n * createEmployee\n * - if salary is a number and < 500 => Teacher\n * - otherwise => Director\n */\nfunction createEmployee(salary) {\n    if (typeof salary === 'number' && salary < 500) {\n        return new Teacher();\n    }\n    return new Director();\n}\n/**\n * isDirector - type predicate\n */\nfunction isDirector(employee) {\n    return employee instanceof Director;\n}\n/**\n * executeWork - dispatches to the correct task method\n */\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        return employee.workDirectorTasks();\n    }\n    return employee.workTeacherTasks();\n}\nfunction teachClass(todayClass) {\n    if (todayClass === 'Math') {\n        return 'Teaching Math';\n    }\n    return 'Teaching History';\n}\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;