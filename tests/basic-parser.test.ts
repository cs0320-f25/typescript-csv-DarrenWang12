import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");
const QUOTED_CSV_PATH = path.join(__dirname, "../data/test-quoted.csv");
const INCONSISTENT_CSV_PATH = path.join(__dirname, "../data/test-inconsistent.csv");
const ESCAPED_CSV_PATH = path.join(__dirname, "../data/test-escaped.csv");
const MULTILINE_CSV_PATH = path.join(__dirname, "../data/test-multiline.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

// Test for quoted fields, commas should not be split
test("parseCSV should handle quoted fields with commas", async () => {
  const results = await parseCSV(QUOTED_CSV_PATH) as string[][];
  expect(results[1][0]).toBe("Smith, John");
  expect(results[1][1]).toBe("Software engineer, senior");
  expect(results[1][2]).toBe("30");
  expect(results[1][0]).toBe("Brown, Jane");
  expect(results[1][1]).toBe("Homeless, junior");
  expect(results[1][2]).toBe("25");
});

// Testing for malformed columns
test("parseCSV should detect inconsistent column counts", async () => {
  const results = await parseCSV(INCONSISTENT_CSV_PATH) as string[][];
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23", "extra"]);
  expect(results[2]).toEqual(["Bob"]);
  expect(results[3]).toEqual(["Charlie", "25", "city", "state"]);
});

// Test for escaped quotes within quoted fields
test("parseCSV should handle escaped quotes within quoted fields", async () => {
  const results = await parseCSV(ESCAPED_CSV_PATH) as string[][];
  expect(results[1][0]).toBe("O'Connor, John");
  expect(results[1][1]).toBe("He said \"Hi\"");
  expect(results[2][0]).toBe("Smith, Jane");
  expect(results[2][1]).toBe("She replied \"Bye\"");
});

// Test for multiline fields
test("parseCSV should handle multiline fields", async () => {
  const results = await parseCSV(MULTILINE_CSV_PATH) as string[][];
  expect(results[1][0]).toBe("Smith, John");
  expect(results[1][1]).toBe("This will\nspan\nmultiple lines");
  expect(results[1][2]).toBe("30");
});