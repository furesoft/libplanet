window.BENCHMARK_DATA = {
  "lastUpdate": 1695089679488,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2dbe34b4f8b633e133ec730a39d49794678ee4b6",
          "message": "Merge pull request #3423 from greymistcube/merge/3.3.1-to-main\n\n🔀 Merge 3.3.1 to main",
          "timestamp": "2023-09-13T12:11:35+09:00",
          "tree_id": "fe99df5707bc1adf87c21c65175db244cdd28918",
          "url": "https://github.com/planetarium/libplanet/commit/2dbe34b4f8b633e133ec730a39d49794678ee4b6"
        },
        "date": 1695085701235,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8656885.07142857,
            "unit": "ns",
            "range": "± 88493.60606690901"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21316156.033333335,
            "unit": "ns",
            "range": "± 382526.9449228132"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52204249.28571428,
            "unit": "ns",
            "range": "± 536459.2484577683"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103825868.83333333,
            "unit": "ns",
            "range": "± 586922.6142401772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 213319963.96153846,
            "unit": "ns",
            "range": "± 399060.3518179958"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 73656.93406593407,
            "unit": "ns",
            "range": "± 5826.6929267184705"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 317028.62666666665,
            "unit": "ns",
            "range": "± 15839.609330745207"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 308173.1369863014,
            "unit": "ns",
            "range": "± 15160.91021006459"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 306650.1034482759,
            "unit": "ns",
            "range": "± 8915.53614422129"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4104013.8571428573,
            "unit": "ns",
            "range": "± 33040.43696769889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3751286.5714285714,
            "unit": "ns",
            "range": "± 54542.90293495047"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22931.864583333332,
            "unit": "ns",
            "range": "± 3096.8930189696543"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 107087.3469387755,
            "unit": "ns",
            "range": "± 10168.756755910075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 112229.86206896552,
            "unit": "ns",
            "range": "± 6123.834425731729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103865.70967741935,
            "unit": "ns",
            "range": "± 9757.40915316089"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7002.1875,
            "unit": "ns",
            "range": "± 615.1267445349009"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20556.31182795699,
            "unit": "ns",
            "range": "± 2614.873618936631"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1597022.23,
            "unit": "ns",
            "range": "± 165797.44437472185"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2957840.231884058,
            "unit": "ns",
            "range": "± 135760.88451847815"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055161.07,
            "unit": "ns",
            "range": "± 201868.16878065158"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5334143.739130435,
            "unit": "ns",
            "range": "± 205441.39523498446"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3333856.1585365855,
            "unit": "ns",
            "range": "± 119173.0782713969"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3587819.35,
            "unit": "ns",
            "range": "± 78029.2976612159"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4948287.5,
            "unit": "ns",
            "range": "± 52018.617033881696"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4217932.110169492,
            "unit": "ns",
            "range": "± 173114.80326142523"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6702209.8,
            "unit": "ns",
            "range": "± 237103.52989620596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5550239.608816965,
            "unit": "ns",
            "range": "± 36198.79554758796"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1617749.2181919643,
            "unit": "ns",
            "range": "± 2429.8691910167277"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1002478.9754464285,
            "unit": "ns",
            "range": "± 1727.9196828435436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2548655.7098958334,
            "unit": "ns",
            "range": "± 35083.1705936676"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 789555.3970102164,
            "unit": "ns",
            "range": "± 1890.0855371448952"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 710428.0555943081,
            "unit": "ns",
            "range": "± 1878.3729076116947"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "greymistcube@gmail.com",
            "name": "Say Cheong",
            "username": "greymistcube"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57c96c96e8eb2639b4bbe10305015495d41c202a",
          "message": "Merge pull request #3427 from greymistcube/feature/iactionrendercontext\n\n♻️ Refactor `IActionRenderer`",
          "timestamp": "2023-09-19T10:49:44+09:00",
          "tree_id": "e79f208a94880406de3d65f93e0d362d8e27ac23",
          "url": "https://github.com/planetarium/libplanet/commit/57c96c96e8eb2639b4bbe10305015495d41c202a"
        },
        "date": 1695089573150,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8929850.330188679,
            "unit": "ns",
            "range": "± 371670.0963291202"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21313052.333333332,
            "unit": "ns",
            "range": "± 379598.7027469621"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 54633906.14285714,
            "unit": "ns",
            "range": "± 704785.8414452095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 109916515.05882353,
            "unit": "ns",
            "range": "± 5210585.668940665"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 229922088.47560975,
            "unit": "ns",
            "range": "± 8158314.6580309635"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 80155.48901098901,
            "unit": "ns",
            "range": "± 10564.142801103177"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 342038.52127659577,
            "unit": "ns",
            "range": "± 31029.77129808356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 332926.46875,
            "unit": "ns",
            "range": "± 38356.863234066834"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 300985.1818181818,
            "unit": "ns",
            "range": "± 6072.384662484541"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4259230.833333333,
            "unit": "ns",
            "range": "± 64659.71881013758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3837034.2647058824,
            "unit": "ns",
            "range": "± 121984.99163621897"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26136.863157894735,
            "unit": "ns",
            "range": "± 4620.026405954118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121416.90449438202,
            "unit": "ns",
            "range": "± 20005.443957219097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 96121.82291666667,
            "unit": "ns",
            "range": "± 20552.58539223602"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95861.26666666666,
            "unit": "ns",
            "range": "± 18171.87264969214"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6095.432989690722,
            "unit": "ns",
            "range": "± 1089.9435851916114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17141.945054945056,
            "unit": "ns",
            "range": "± 1758.4489526766818"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1629684.875,
            "unit": "ns",
            "range": "± 183314.0736714049"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2975855.727272727,
            "unit": "ns",
            "range": "± 251528.34733408166"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2042788.8854166667,
            "unit": "ns",
            "range": "± 285179.069225668"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6087681.228260869,
            "unit": "ns",
            "range": "± 797961.2361735279"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3450020.0161290322,
            "unit": "ns",
            "range": "± 309126.6760063081"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3789055.2204301073,
            "unit": "ns",
            "range": "± 320575.12087708205"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4594000.005376345,
            "unit": "ns",
            "range": "± 278473.19420522574"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4014960.5774647887,
            "unit": "ns",
            "range": "± 196959.80940512873"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7181584.8,
            "unit": "ns",
            "range": "± 676574.7264058331"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6183631.921875,
            "unit": "ns",
            "range": "± 158433.35612472126"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1771513.6703404018,
            "unit": "ns",
            "range": "± 44891.3095841453"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1078044.163515625,
            "unit": "ns",
            "range": "± 41429.488805779176"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2926539.9674762227,
            "unit": "ns",
            "range": "± 72505.47714764117"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 809114.1319661458,
            "unit": "ns",
            "range": "± 13912.807608196348"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750184.7534036075,
            "unit": "ns",
            "range": "± 35044.681892214736"
          }
        ]
      }
    ]
  }
}