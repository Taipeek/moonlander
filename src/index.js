import './index.css';
import Terrain from "./terrain";
import Ship from "./ship";

var terain = new Terrain(500,500);
var ship = new Ship(500,500);
var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

terain.render(ctx);
ship.render(ctx);