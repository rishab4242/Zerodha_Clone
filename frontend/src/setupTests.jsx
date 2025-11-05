// src/setupTests.js
import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// polyfill TextEncoder/Decoder for Node jest environment (react-router and some libs need it)
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
