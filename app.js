const apiKey = {
  coinapi:'EC5601D5-C244-4166-8D9A-D35BBED83D0C',
  alphavantage:'93WI4CK51GT8QWVO',
  coinmarketcap:'af9c1208-7785-4f76-a9c2-d0bbc5887b8e',
  coingecko:''};
const apiURL = {
  coinapi:'https://rest.coinapi.io/v1/exchangerate/',
  alphavantage:'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=',
  coinmarketcap:'https://pro-api.coinmarketcap.com',
  coingecko:'https://api.coingecko.com/api/v3/simple/price?ids='
};

let display = document.querySelector('.price');
let ticker1 = document.querySelector('.ticker1');
let ticker2 = document.querySelector('.ticker2');
let decimals = document.querySelector('.decimals');
let switchBtn = document.querySelector('.switch-btn');
let ticker1Image = document.querySelector('.ticker1-img');
let ticker2Image = document.querySelector('.ticker2-img');
let background = document.querySelector('.main');
let price = 0;
let currentTheme = 'dark';
let method = 'coinapi';

  function getPrice(){
        let coinName1 = $('.ticker1').val();
        let coinName2 = $('.ticker2').val();
        let decimals = $('.decimals').val();
        var rate = 0;
    //check method and construct URL
        var url;
/*coinapi method*/        if (method=='coinapi'){
                          url = `${apiURL.coinapi}${coinName1}/${coinName2}?apikey=${apiKey.coinapi}`;
                          fetch(url)
                          .then((response) => response.json())
                          .then((json) => display.innerHTML = `The current price of ${coinName1} is ${json.rate.toFixed(2)} ${coinName2}`);
      }
/*alphavantage method*/   else if (method=='alphavantage'){
                          url = `${apiURL.alphavantage}${coinName1}&to_currency=${coinName2}&apikey=${apiKey.alphavantage}`
                          console.log('alphavantage')
      }
/*coinmarketcap method*/  else if (method=='coinmarketcap'){
                          console.log('coinmarketcap')
      }
/*coingecko method*/      else if (method=='coingecko'){
                          console.log('coingecko')
      }

 // set coin image according to selection
 let src1 = "";
 let src2 = "";
 switch (true){
 case(ticker1.value == "BTC") : src1 = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png";
 break;
 case(ticker1.value == "ETH") : src1 = "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png";
 break;
 case(ticker1.value == "BNB") : src1 = "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png";
 break;
 case(ticker1.value == "ARB") : src1 = "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png";
 break;
 case(ticker1.value == "CAKE") : src1 = "https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png";
 break;
 default : src1 = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png";
}
switch (true){
  case(ticker2.value == "USD") : src2 = "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg";
  break;
  case(ticker2.value == "EUR") : src2 = "https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/EUR.svg";
  break;
  case(ticker2.value == "INR") : src2 = "https://cdn-icons-png.flaticon.com/512/1490/1490817.png";
  break;
  default : src2 = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png";
 }
ticker1Image.src = src1;
ticker2Image.src = src2;


}
 


    //call API and fetch price from above-constructed URL
    // if ($('.decimals').val()<=0){
    //   alert('Value cannot be less than 0!')
    //   decimals.value = 0;
    // } else if (display.innerHTML.includes('0') && $('.decimals').val()>=5)
    // {
    //   alert('Cannot increase decimals after 5');

    // } else if (display.innerHTML.includes('0') && $('.decimals').val()<=5 && $('.decimals').val()>=0){
    //   run();
    // }
    //display demo price to reduce API calls
    display.innerHTML = `The current price of ${ticker1.value} is 0 ${ticker2.value}`

    function theme(){
        if(currentTheme=="light"){
          background.style = "background-image:radial-gradient(var(--dark),black);";
          currentTheme = "dark";
          
        } else if (currentTheme=="dark"){
          background.style = "background-image:radial-gradient(white,grey);";
          currentTheme = "light";
        }
    }
