import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import {CarrierChart} from '../../components/carrierChart/index';
import {FutureChart} from '../../components/futureChart/index';
import {TempChart} from '../../components/tempChart/index';

export const CarrierUsage = () => {
    let [chartData, setChartData] = useState(null);
    let [chartData2, setChartData2] = useState(null);
    //     labels: ["bitcoin", "etherum", "tether", "binnance-coin", "usd-coin"],
    //     datasets: [{"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin","supply":"18936525.0000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"687415461186.1888539929764500","volumeUsd24Hr":"22724752259.6142710867887311","priceUsd":"36301.0352314476311780","changePercent24Hr":"-6.6973902863129855","vwap24Hr":"37985.0895502084444782","explorer":"https://blockchain.info/"},{"id":"ethereum","rank":"2","symbol":"ETH","name":"Ethereum","supply":"119260087.7490000000000000","maxSupply":null,"marketCapUsd":"303014411888.5226706886425831","volumeUsd24Hr":"18751292998.4625531497928246","priceUsd":"2540.7864240906820657","changePercent24Hr":"-11.2915438472132152","vwap24Hr":"2709.9891725290390452","explorer":"https://etherscan.io/"},{"id":"tether","rank":"3","symbol":"USDT","name":"Tether","supply":"78251766150.5517000000000000","maxSupply":null,"marketCapUsd":"78603539213.4740668871784912","volumeUsd24Hr":"53843924733.2155716166389344","priceUsd":"1.0044954009376041","changePercent24Hr":"0.0829894485266003","vwap24Hr":"1.0016991810684080","explorer":"https://www.omniexplorer.info/asset/31"},{"id":"binance-coin","rank":"4","symbol":"BNB","name":"BNB","supply":"166801148.0000000000000000","maxSupply":"166801148.0000000000000000","marketCapUsd":"62876896956.4015554540864708","volumeUsd24Hr":"1645023484.1193128158661461","priceUsd":"376.9572194814963471","changePercent24Hr":"-11.3252272964642764","vwap24Hr":"409.0068393458275081","explorer":"https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"},{"id":"usd-coin","rank":"5","symbol":"USDC","name":"USD Coin","supply":"43025478059.1842500000000000","maxSupply":null,"marketCapUsd":"43232961593.2625064011787676","volumeUsd24Hr":"3905897023.7611216668431337","priceUsd":"1.0048223411670836","changePercent24Hr":"0.2119878435225250","vwap24Hr":"1.0024374866374680","explorer":"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"}],
    // });

    useEffect(() => {
        const fetchPrices = async () => {
          const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
          const data = await res.json();
        const data2 = {"data":[{"id":"bitcoin","rank":"1","symbol":"BTC","name":"Bitcoin","supply":"18936775.0000000000000000","maxSupply":"21000000.0000000000000000","marketCapUsd":"675436237907.4680275603565725","volumeUsd24Hr":"28187523696.4081414515219422","priceUsd":"5.1","changePercent24Hr":"-6.3172937507760232","vwap24Hr":"36.1131737363525443","explorer":"https://blockchain.info/"},{"id":"ethereum","rank":"2","symbol":"ETH","name":"Ethereum","supply":"119263472.6865000000000000","maxSupply":null,"marketCapUsd":"293725726029.9265678216507745","volumeUsd24Hr":"22644776676.5910247285618319","priceUsd":"2.8305667572161889","changePercent24Hr":"-11.2352132797258507","vwap24Hr":"2585.6662050665321010","explorer":"https://etherscan.io/"},{"id":"tether","rank":"3","symbol":"USDT","name":"Tether","supply":"78251766150.5517000000000000","maxSupply":null,"marketCapUsd":"78535111911.4793687946571121","volumeUsd24Hr":"69798249285.2128781632932017","priceUsd":"1.0036209503614593","changePercent24Hr":"-0.0190054643610862","vwap24Hr":"1.0017257933064314","explorer":"https://www.omniexplorer.info/asset/31"},{"id":"binance-coin","rank":"4","symbol":"BNB","name":"BNB","supply":"166801148.0000000000000000","maxSupply":"166801148.0000000000000000","marketCapUsd":"61491109601.9726519425732028","volumeUsd24Hr":"2311568530.6383371414886090","priceUsd":"3.6491989969556561","changePercent24Hr":"-10.9194250329776447","vwap24Hr":"389.5709553942070698","explorer":"https://etherscan.io/token/0xB8c77482e45F1F44dE1745F52C74426C631bDD52"},{"id":"usd-coin","rank":"5","symbol":"USDC","name":"USD Coin","supply":"43160341638.2419700000000000","maxSupply":null,"marketCapUsd":"43278935082.4530474714613213","volumeUsd24Hr":"4227931361.3401376275414048","priceUsd":"1.0027477410907702","changePercent24Hr":"-0.0324943909864115","vwap24Hr":"1.0023151331043866","explorer":"https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"}],"timestamp":1642855343071};
          setChartData({
            labels: data.data.map((crypto) => crypto.name),
            datasets: [
              {
                label: "Price in USD",
                data: data.data.map((crypto) => crypto.priceUsd),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }
            ]
          });

          setChartData2({
            labels: data2.data.map((crypto) => crypto.name),
            datasets: [
              {
                label: "Price in USD",
                data: data2.data.map((crypto) => {
                    return [parseInt(crypto.priceUsd), parseInt(crypto.priceUsd)+2];
                }),

                // data: data.data.map((crypto) => crypto.priceUsd),
                // borderColor: "#008000c7",
                backgroundColor: "#65e3a4",
                // borderWidth: 2,
                // borderRadius: 5,
                // borderTopRadius: 20,
                // borderSkipped: false,
                // datalabels: {
                //     display: true
                // }
              }
            ]
          });
        };
        fetchPrices();
      }, []);
    return (
        <Grid container>
            <Grid item xs={4}>
                <CarrierChart />
            </Grid>
            <Grid item xs={4}>
                {chartData && <FutureChart chartData={chartData} gsChartTitle="Price of cryptocurrencies"/>}
            </Grid>
            <Grid item xs={4}>
                {chartData2 && <FutureChart chartData={chartData2} gsChartTitle="Floating chart Example"/>}
            </Grid>
            <Grid item xs={4}>
                {chartData2 && <TempChart />}
            </Grid>
        </Grid>
    )
}
