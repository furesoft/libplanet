window.BENCHMARK_DATA = {
  "lastUpdate": 1721090550101,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "2aa539ec15069490d113a2698b55e2015ca1f9e6",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T17:48:21+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/2aa539ec15069490d113a2698b55e2015ca1f9e6"
        },
        "date": 1721033819835,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 201182.16666666666,
            "unit": "ns",
            "range": "± 8436.787904262466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 195049.28846153847,
            "unit": "ns",
            "range": "± 5596.14854719004"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 167848,
            "unit": "ns",
            "range": "± 4227.8310471962295"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3044738.382352941,
            "unit": "ns",
            "range": "± 61375.76553482078"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2811072.533333333,
            "unit": "ns",
            "range": "± 50405.85997660344"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12724.42857142857,
            "unit": "ns",
            "range": "± 1276.6327158670306"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61568.84848484849,
            "unit": "ns",
            "range": "± 5069.055749456167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 51134.27777777778,
            "unit": "ns",
            "range": "± 789.9165857344055"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 63561.42857142857,
            "unit": "ns",
            "range": "± 11525.635889830479"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2875.244680851064,
            "unit": "ns",
            "range": "± 283.8781991640953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15051.578947368422,
            "unit": "ns",
            "range": "± 2085.779437855753"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1047413.734375,
            "unit": "ns",
            "range": "± 48510.449531229606"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1993771.5614035088,
            "unit": "ns",
            "range": "± 85520.60490523773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1726308.2461538462,
            "unit": "ns",
            "range": "± 73644.8079214157"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8341838.266666667,
            "unit": "ns",
            "range": "± 242514.65759650606"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3815259.52734375,
            "unit": "ns",
            "range": "± 10242.3589417147"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1208489.2698317308,
            "unit": "ns",
            "range": "± 1820.3787809141763"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 777302.722280649,
            "unit": "ns",
            "range": "± 7657.489723872206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1942252.515345982,
            "unit": "ns",
            "range": "± 2028.876511825105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 614383.8677884615,
            "unit": "ns",
            "range": "± 925.6699452132838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572157.4862583706,
            "unit": "ns",
            "range": "± 913.6330064063216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2465399.5,
            "unit": "ns",
            "range": "± 47353.534598098726"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2569829.3181818184,
            "unit": "ns",
            "range": "± 96183.88433107016"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3048751.590909091,
            "unit": "ns",
            "range": "± 72294.54839349861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2642192.6428571427,
            "unit": "ns",
            "range": "± 34461.32864443216"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260668.3571428573,
            "unit": "ns",
            "range": "± 36233.53930324169"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32569.64285714286,
            "unit": "ns",
            "range": "± 391.6839104613383"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10570096.42857143,
            "unit": "ns",
            "range": "± 59212.983092606264"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27442801.2,
            "unit": "ns",
            "range": "± 105399.94118336661"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68886746.06666666,
            "unit": "ns",
            "range": "± 482249.7070393047"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 139366727.03333333,
            "unit": "ns",
            "range": "± 904607.0707537584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 283650396.4,
            "unit": "ns",
            "range": "± 1109805.4324490395"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "ea9808e6ccf719ba5399cd4ef6a316741a346114",
          "message": "fix: Fix an issue where curreny does not work correctly in dotnet 6",
          "timestamp": "2024-07-15T18:09:05+09:00",
          "tree_id": "b2fe1bb6f3e68a926c89ef638055451091e64841",
          "url": "https://github.com/planetarium/libplanet/commit/ea9808e6ccf719ba5399cd4ef6a316741a346114"
        },
        "date": 1721035031807,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 202142.86363636365,
            "unit": "ns",
            "range": "± 6762.067784720778"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 197735.12857142856,
            "unit": "ns",
            "range": "± 5608.12112862029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 163801.125,
            "unit": "ns",
            "range": "± 2979.1540158239554"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3018577.4,
            "unit": "ns",
            "range": "± 44983.93950194098"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2735075.4285714286,
            "unit": "ns",
            "range": "± 30420.207665589372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12943.35294117647,
            "unit": "ns",
            "range": "± 623.3598123578887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 71374.0671641791,
            "unit": "ns",
            "range": "± 3204.8976025994807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50077.5,
            "unit": "ns",
            "range": "± 319.0236525856522"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 48371.1914893617,
            "unit": "ns",
            "range": "± 5618.628486602795"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2613.4210526315787,
            "unit": "ns",
            "range": "± 197.68170090127362"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12166.065789473685,
            "unit": "ns",
            "range": "± 628.3808046193287"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1018048.6133333333,
            "unit": "ns",
            "range": "± 49513.25274294052"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2011771.024390244,
            "unit": "ns",
            "range": "± 70505.73837514498"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1730190.9576271186,
            "unit": "ns",
            "range": "± 75488.30084998603"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8634285.755813954,
            "unit": "ns",
            "range": "± 314224.51831006905"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3823691.2639508927,
            "unit": "ns",
            "range": "± 5054.942597483002"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1205955.3796875,
            "unit": "ns",
            "range": "± 2278.3814615827596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 759776.7337239584,
            "unit": "ns",
            "range": "± 1016.9219418894457"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1934265.5546875,
            "unit": "ns",
            "range": "± 2863.628160677768"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 612948.2602864583,
            "unit": "ns",
            "range": "± 681.938869732499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572908.9961588542,
            "unit": "ns",
            "range": "± 958.7872168849358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2435323.933333333,
            "unit": "ns",
            "range": "± 39766.64665352947"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2522952.6,
            "unit": "ns",
            "range": "± 43835.18369464028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3000180.5,
            "unit": "ns",
            "range": "± 20854.336376214604"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2596397.066666667,
            "unit": "ns",
            "range": "± 39566.10156157607"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3260050.4,
            "unit": "ns",
            "range": "± 49376.090578624906"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32256.923076923078,
            "unit": "ns",
            "range": "± 207.94609138687102"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10670313.92857143,
            "unit": "ns",
            "range": "± 33412.77761049434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27275180.333333332,
            "unit": "ns",
            "range": "± 138402.55805319015"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 72607126.76666667,
            "unit": "ns",
            "range": "± 400530.9615352506"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136987823.53333333,
            "unit": "ns",
            "range": "± 471859.23555742565"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288699868.06666666,
            "unit": "ns",
            "range": "± 1450621.3927593466"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "committer": {
            "email": "han0210@netsgo.com",
            "name": "s2quake",
            "username": "s2quake"
          },
          "distinct": true,
          "id": "f36cbd1a34020e003725426cd4d6b82d75836175",
          "message": "Changelog",
          "timestamp": "2024-07-16T09:33:33+09:00",
          "tree_id": "c1eea56039119650a0171132e2666f8147bf07f0",
          "url": "https://github.com/planetarium/libplanet/commit/f36cbd1a34020e003725426cd4d6b82d75836175"
        },
        "date": 1721090524282,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 200726.41428571427,
            "unit": "ns",
            "range": "± 9727.147690635993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 191716.09302325582,
            "unit": "ns",
            "range": "± 6647.907765440741"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 165313.22727272726,
            "unit": "ns",
            "range": "± 3570.016565678762"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3017191.2666666666,
            "unit": "ns",
            "range": "± 50276.297702178665"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2787560.9285714286,
            "unit": "ns",
            "range": "± 29292.47931693333"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12232.391304347826,
            "unit": "ns",
            "range": "± 777.0098851892403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 59021.89743589744,
            "unit": "ns",
            "range": "± 3023.4248602285265"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 50270.833333333336,
            "unit": "ns",
            "range": "± 343.8420179869432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61754.19387755102,
            "unit": "ns",
            "range": "± 10491.07945725886"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3419.0729166666665,
            "unit": "ns",
            "range": "± 214.91272376878783"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12231.376344086022,
            "unit": "ns",
            "range": "± 835.5694610365579"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 999837.0428571429,
            "unit": "ns",
            "range": "± 45454.45559175761"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1888391,
            "unit": "ns",
            "range": "± 58623.491403297536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1647908.971830986,
            "unit": "ns",
            "range": "± 74565.27990961474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8268487.66,
            "unit": "ns",
            "range": "± 216505.65776223186"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3736063.275390625,
            "unit": "ns",
            "range": "± 5634.7673104775695"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1189322.5252604166,
            "unit": "ns",
            "range": "± 3358.409081256311"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 770795.8568359375,
            "unit": "ns",
            "range": "± 1373.3690086144381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1953081.529296875,
            "unit": "ns",
            "range": "± 1849.8603838069687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 618567.4719401042,
            "unit": "ns",
            "range": "± 414.5945659724211"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 579217.390625,
            "unit": "ns",
            "range": "± 455.5450351584383"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2426087.533333333,
            "unit": "ns",
            "range": "± 68050.94574616232"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2513828.5,
            "unit": "ns",
            "range": "± 39367.678622873435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3011444,
            "unit": "ns",
            "range": "± 30635.621034244534"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2694020.5,
            "unit": "ns",
            "range": "± 36025.60870871349"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3193475.2333333334,
            "unit": "ns",
            "range": "± 27654.54144173034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32072.153846153848,
            "unit": "ns",
            "range": "± 265.709379508843"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10203858.857142856,
            "unit": "ns",
            "range": "± 76495.20242458361"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27187589.666666668,
            "unit": "ns",
            "range": "± 205859.05345949225"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 70346898.6923077,
            "unit": "ns",
            "range": "± 150181.61686237578"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 136738027.26666668,
            "unit": "ns",
            "range": "± 568927.6635633375"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 287132653.71428573,
            "unit": "ns",
            "range": "± 720197.8681086329"
          }
        ]
      }
    ]
  }
}