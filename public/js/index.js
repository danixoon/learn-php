// alert("owo");

class Downloader {
  static async fetchJson(url, query, init) {
    const response = await fetch(
      url +
        (query
          ? `?${Object.entries(query)
              .map(([key, value]) => `${key}=${value}`)
              .join("&")}`
          : ""),
      init
    );
    return { ...response, body: await response.json() };
  }
  static async fetchCurrency() {
    const response = await this.fetchJson("./api/currency.php");
    console.log(response.body);
  }
  static async fetchUser() {
    const response = await this.fetchJson("./api/auth.php");
    console.log(response.body);
  }
  static async test() {
    const response = await this.fetchJson("./api/test.php", { value: "hello" });
    console.log(response.body);
  }
}

// alert("lwl");
