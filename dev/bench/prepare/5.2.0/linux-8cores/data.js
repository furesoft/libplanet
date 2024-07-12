window.BENCHMARK_DATA = {
  "lastUpdate": 1720695054308,
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
          "id": "7dccf1d6f78638504d5ef461ae43954c29cc7d36",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T13:43:50+09:00",
          "tree_id": "5357d8d956b14e1ac4fcbfb0faeeebf54662bcf0",
          "url": "https://github.com/planetarium/libplanet/commit/7dccf1d6f78638504d5ef461ae43954c29cc7d36"
        },
        "date": 1720673545578,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3748251.384765625,
            "unit": "ns",
            "range": "± 6199.371401563155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1198159.2371651786,
            "unit": "ns",
            "range": "± 1960.4299535059781"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 782199.3359375,
            "unit": "ns",
            "range": "± 801.119407783276"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1939618.671484375,
            "unit": "ns",
            "range": "± 1778.086744486776"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 615094.8110351562,
            "unit": "ns",
            "range": "± 680.5605097111224"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 584603.8780691965,
            "unit": "ns",
            "range": "± 559.7264299885021"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2454848.3076923075,
            "unit": "ns",
            "range": "± 66048.7009596823"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2582897.05,
            "unit": "ns",
            "range": "± 57753.29305304636"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3050235.8125,
            "unit": "ns",
            "range": "± 42329.23531669139"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2599082.8529411764,
            "unit": "ns",
            "range": "± 76996.6755024674"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3239507.230769231,
            "unit": "ns",
            "range": "± 43179.925714298166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1015656.8414634146,
            "unit": "ns",
            "range": "± 44410.26035197398"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1962258.7567567567,
            "unit": "ns",
            "range": "± 66360.34983348507"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1722250.2945205478,
            "unit": "ns",
            "range": "± 84701.94153011536"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8414223.878787879,
            "unit": "ns",
            "range": "± 261366.75102582833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 208847.43902439025,
            "unit": "ns",
            "range": "± 11084.62653452142"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192616.43396226416,
            "unit": "ns",
            "range": "± 7809.374185774413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 164186.3,
            "unit": "ns",
            "range": "± 3495.815914098332"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3145426,
            "unit": "ns",
            "range": "± 25986.27691982532"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2864811.0714285714,
            "unit": "ns",
            "range": "± 35954.91686599566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13021.885057471265,
            "unit": "ns",
            "range": "± 848.8186239721836"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61429.641304347824,
            "unit": "ns",
            "range": "± 5307.286044263852"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 52459.5,
            "unit": "ns",
            "range": "± 1798.9026534965024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 61085,
            "unit": "ns",
            "range": "± 10053.281347531838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3044.3736842105263,
            "unit": "ns",
            "range": "± 460.1578878460311"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12634.363636363636,
            "unit": "ns",
            "range": "± 1016.2878606349586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10588353.714285715,
            "unit": "ns",
            "range": "± 64242.75937103259"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27507614.066666666,
            "unit": "ns",
            "range": "± 163395.62199698298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 69919258.86666666,
            "unit": "ns",
            "range": "± 406767.1418804036"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140022670.14285713,
            "unit": "ns",
            "range": "± 747766.8850950457"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 289172134.8666667,
            "unit": "ns",
            "range": "± 1433251.0879467037"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 32594.846153846152,
            "unit": "ns",
            "range": "± 428.32889352183685"
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
          "id": "6ae55d917b690c6c7ba4c39ed274b6566b4cb4e3",
          "message": "Prepare 5.2.0",
          "timestamp": "2024-07-11T19:42:14+09:00",
          "tree_id": "87ce8f5e57fddf39bbd19fb45afdcd27722cb680",
          "url": "https://github.com/planetarium/libplanet/commit/6ae55d917b690c6c7ba4c39ed274b6566b4cb4e3"
        },
        "date": 1720695028628,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3774982.817908654,
            "unit": "ns",
            "range": "± 2294.7585552255937"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1211964.0629185268,
            "unit": "ns",
            "range": "± 2428.3987303007916"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 765587.0260667067,
            "unit": "ns",
            "range": "± 850.0602547761866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1964023.1007254464,
            "unit": "ns",
            "range": "± 1579.6079471681944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 636878.7536808894,
            "unit": "ns",
            "range": "± 1385.4467488768405"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 580609.2639508928,
            "unit": "ns",
            "range": "± 643.0101363810514"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2544495.1739130435,
            "unit": "ns",
            "range": "± 62138.70183977146"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2538460.033333333,
            "unit": "ns",
            "range": "± 34792.31105917075"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3000631,
            "unit": "ns",
            "range": "± 42933.937420897455"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2559041,
            "unit": "ns",
            "range": "± 40233.174281545704"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 3283484.6153846155,
            "unit": "ns",
            "range": "± 54196.95354067186"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1008674.268292683,
            "unit": "ns",
            "range": "± 43466.81974724487"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1962799.0892857143,
            "unit": "ns",
            "range": "± 80571.68692881837"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1666819.97752809,
            "unit": "ns",
            "range": "± 91572.5271981397"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8133935.666666667,
            "unit": "ns",
            "range": "± 240442.81794539632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 204624.23636363636,
            "unit": "ns",
            "range": "± 8701.78143737467"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 192173.13333333333,
            "unit": "ns",
            "range": "± 6556.828340814566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 173435.05555555556,
            "unit": "ns",
            "range": "± 3611.2302038179896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3009396.214285714,
            "unit": "ns",
            "range": "± 22621.419945157395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2813512.066666667,
            "unit": "ns",
            "range": "± 50133.059146160034"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 12760.943037974683,
            "unit": "ns",
            "range": "± 673.8924959314385"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61411.229166666664,
            "unit": "ns",
            "range": "± 5876.01562191891"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 49916.153846153844,
            "unit": "ns",
            "range": "± 514.615365451688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 52063.188888888886,
            "unit": "ns",
            "range": "± 5948.35365315658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 2783.78125,
            "unit": "ns",
            "range": "± 291.3574112982559"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14965.505154639175,
            "unit": "ns",
            "range": "± 1620.365642402146"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10320971.5,
            "unit": "ns",
            "range": "± 49918.9727115545"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27562592.866666667,
            "unit": "ns",
            "range": "± 165368.29768811996"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 71917544.64285715,
            "unit": "ns",
            "range": "± 347778.80803146376"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 140204220.33333334,
            "unit": "ns",
            "range": "± 713875.4259134398"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 288627556.8,
            "unit": "ns",
            "range": "± 1144354.0052672387"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 31949.14285714286,
            "unit": "ns",
            "range": "± 326.9235636712601"
          }
        ]
      }
    ]
  }
}