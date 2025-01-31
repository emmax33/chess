"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadSprite(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(res => {
            let image = new Image();
            image.src = "/static/media/" + filename;
            image.addEventListener("load", () => {
                res(image);
            });
        });
    });
}
const pieceIds = {
    "wp": "P",
    "wn": "N",
    "wb": "B",
    "wr": "R",
    "wq": "Q",
    "wk": "K",
    "bp": "p",
    "bn": "n",
    "bb": "b",
    "br": "r",
    "bq": "q",
    "bk": "k"
};
let pieceImages = {};
let pieceLoaders = [];
for (let [pieceId, pieceFenCharacter] of Object.entries(pieceIds)) {
    let pieceLoader = loadSprite(pieceId + ".png");
    pieceLoader.then(image => {
        pieceImages[pieceFenCharacter] = image;
    });
    pieceLoaders.push(pieceLoader);
}
const classificationIcons = {
    "brilliant": null,
    "great": null,
    "best": null,
    "excellent": null,
    "good": null,
    "inaccuracy": null,
    "mistake": null,
    "blunder": null,
    "forced": null,
    "book": null
};
for (let classification in classificationIcons) {
    loadSprite(classification + ".png").then(image => {
        classificationIcons[classification] = image;
    });
}
