const puppeteer = require('puppeteer');

(async () => {
  try {
    console.log('🚀 Memulai proses pembuatan PDF...');
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set viewport to a typical desktop size
    await page.setViewport({ width: 1200, height: 800 });

    console.log('⏳ Memuat halaman http://localhost:3000...');
    // Increase timeout and wait until network is completely idle to ensure all images & fonts load
    await page.goto('http://localhost:3000', { 
      waitUntil: 'networkidle0', 
      timeout: 90000 
    });
    
    // Wait extra seconds for any delayed animations or CSS variables
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    console.log('🖨️ Mengonversi halaman menjadi PDF...');
    await page.pdf({
      path: 'Proposal_Clash_of_Champions_Sukabumi_Showdown.pdf',
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
      }
    });

    console.log('✅ PDF berhasil dibuat: Proposal_Clash_of_Champions_Sukabumi_Showdown.pdf');
    await browser.close();
  } catch (error) {
    console.error('❌ Gagal membuat PDF:', error);
    process.exit(1);
  }
})();
