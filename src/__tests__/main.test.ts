import { mockUSDData } from "../data";
import { respondWithCurrency, Testing } from "../router";

const url = new URL("https://neilmadden.blog:8080/2021/10/27/multiple-input-macs?key1=value1&key2=value2#:~:text=Other%20approaches%20to%20multi%2Dinput%20MACs")


test("requesting USD works", () => {
  const currencyRequested = "USD"
  const testing: Testing = {
    result: ""
  }
  respondWithCurrency(mockUSDData, undefined, testing)
  expect(testing.result).not.toBe("")
  expect(testing.result).toBe("{\"USD\":{\"EUR\":0.88,\"GBP\":0.74,\"CAD\":1.27}}")
})

test("url hostname works", () => {
  const string = "http://localhost:8080/api"
  const url = new URL(string)
  expect(url.hostname).toEqual("localhost")
})

test("url hash works", () => {
  expect(url.hash).toEqual("#:~:text=Other%20approaches%20to%20multi%2Dinput%20MACs")
})

test("url hostname works", () => {
  expect(url.hostname).toEqual("neilmadden.blog")
})

test("url port works", () => {
  expect(url.port).toEqual("8080")
})

test("url pathname works", () => {
  expect(url.pathname).toEqual("/2021/10/27/multiple-input-macs")
})

test("url path works", () => {
  // path is combination of pathname and search query
  const pathname = url.pathname
  const searchQuery = url.search
  const path = pathname + searchQuery
  expect(path).toEqual("/2021/10/27/multiple-input-macs?key1=value1&key2=value2")
})

test("url search works", () => {
  expect(url.search).toEqual("?key1=value1&key2=value2")
})

test("url searchParams work", () => {
  const keys = []
  const values = []
  for (const [key, value] of url.searchParams.entries()) {
    keys.push(key)
    values.push(value)
  }
  expect(keys).toEqual(["key1", "key2"])
  expect(values).toEqual(["value1", "value2"])
})

test("url host works", () => {
  // host is a combination of the hostname and port
  expect(url.host).toEqual("neilmadden.blog:8080")
})