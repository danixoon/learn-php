// alert("owo");

class Downloader {
  static async fetchJson(url, init) {
    const response = await fetch(url, init);
    return { ...response, body: await response.json() };
  }
  static async fetchCurrency() {
    const response = await this.fetchJson("./api/currency.php");
    console.log(response.body);
  }
}

// alert("lwl");
