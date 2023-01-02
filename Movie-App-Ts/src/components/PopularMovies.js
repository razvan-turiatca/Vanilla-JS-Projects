"use strict";
exports.__esModule = true;
var TMDBService_1 = require("../ts/services/TMDBService");
var PopularMovies = /** @class */ (function () {
    function PopularMovies() {
    }
    PopularMovies.prototype.getData = function () {
        var tmdbs = new TMDBService_1["default"]();
        tmdbs.get({
            method: 'GET',
            url: '/movie/popular',
            onSuccess: function (data) {
                console.log(data);
            }
        });
    };
    return PopularMovies;
}());
exports["default"] = PopularMovies;
