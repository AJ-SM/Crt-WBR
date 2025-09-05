"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.json([
        {
            "Date": "2025-08-25",
            "Open": 224.10,
            "High": 227.50,
            "Low": 223.30,
            "Close": 226.80,
            "Volume": 58432100
        },
        {
            "Date": "2025-08-26",
            "Open": 227.20,
            "High": 229.70,
            "Low": 225.80,
            "Close": 228.50,
            "Volume": 61004500
        },
        {
            "Date": "2025-08-27",
            "Open": 229.00,
            "High": 231.10,
            "Low": 226.40,
            "Close": 227.20,
            "Volume": 55786900
        },
        {
            "Date": "2025-08-28",
            "Open": 227.50,
            "High": 230.90,
            "Low": 226.10,
            "Close": 230.20,
            "Volume": 60113200
        },
        {
            "Date": "2025-08-29",
            "Open": 230.40,
            "High": 233.00,
            "Low": 229.20,
            "Close": 232.60,
            "Volume": 63921300
        }
    ]);
});
app.listen(3008);
