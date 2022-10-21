const puppeteer = require("puppeteer");

(async()=>{
  const brower = await puppeteer.launch()
  const page = await brower.newPage()
  await page.goto("https://www.walmart.com/browse/electronics/dell-gaming-laptops/3944_3951_7052607_1849032_4519159")
  await page.screenshot({path:"mywebsite.png"})

  const grabparagrap = await page.evaluate(()=>{
    
  })


  await brower.close()

})();
// const fs = require("fs/promises")
// async function start() {
//   const brower = await puppeteer.launch();
//   const page = await brower.newPage();
//   await page.goto(
//     "https://www.quill.com/hanging-file-folders/cbk/122567.html"
//   );
// //   await page.screenshot({path:"amazing.png",fullPage:true})
// const names = ['red','orange','yellow']
// await fs.writeFile(names.txt,names.join("\r\n"))
//   await brower.close()
// }
// start();
