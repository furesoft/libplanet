window.BENCHMARK_DATA = {
  "lastUpdate": 1689324282718,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "720e0364ffcdaeac1460d530348447674b3391f3",
          "message": "Merge pull request #3263 from OnedgeLee/release/2.4.0\n\n🚀 Release 2.4.0",
          "timestamp": "2023-07-03T21:07:47+09:00",
          "tree_id": "efacc58e9495f8c48ca6222d9dfa58cf21baa28b",
          "url": "https://github.com/planetarium/libplanet/commit/720e0364ffcdaeac1460d530348447674b3391f3"
        },
        "date": 1688387666392,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1624072.0430107526,
            "unit": "ns",
            "range": "± 204346.16057158003"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3018604.395604396,
            "unit": "ns",
            "range": "± 287959.38058926445"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2155940.625,
            "unit": "ns",
            "range": "± 268450.2249572633"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6132865.934065934,
            "unit": "ns",
            "range": "± 691266.0621754165"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63917.34693877551,
            "unit": "ns",
            "range": "± 19298.448340543324"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8028316.666666667,
            "unit": "ns",
            "range": "± 470029.54945359606"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 21300741.836734693,
            "unit": "ns",
            "range": "± 1688574.175119686"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 56867610.1010101,
            "unit": "ns",
            "range": "± 3313279.619876471"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 112314610.63829787,
            "unit": "ns",
            "range": "± 4250824.336333205"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 235434068.2352941,
            "unit": "ns",
            "range": "± 12658246.160951402"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5691620.368303572,
            "unit": "ns",
            "range": "± 89043.59059892422"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1796099.3088942308,
            "unit": "ns",
            "range": "± 20278.972809824074"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1379561.4192708333,
            "unit": "ns",
            "range": "± 17441.31185826388"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005115.9830729165,
            "unit": "ns",
            "range": "± 23799.509601747417"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 974794.140625,
            "unit": "ns",
            "range": "± 12705.211158237746"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 915753.876953125,
            "unit": "ns",
            "range": "± 11475.740961799322"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3328421.505376344,
            "unit": "ns",
            "range": "± 272078.5463833138"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3523380.85106383,
            "unit": "ns",
            "range": "± 291323.2702710487"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4663027.956989247,
            "unit": "ns",
            "range": "± 405598.04003406665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3987529.4736842103,
            "unit": "ns",
            "range": "± 362109.70885868283"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7665418.367346939,
            "unit": "ns",
            "range": "± 787281.7792031949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 332898.96907216497,
            "unit": "ns",
            "range": "± 49932.40116824061"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 304103.6082474227,
            "unit": "ns",
            "range": "± 49191.987960980645"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267987.6288659794,
            "unit": "ns",
            "range": "± 46841.71764599898"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4438524.731182796,
            "unit": "ns",
            "range": "± 381001.5752723095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3938882.2916666665,
            "unit": "ns",
            "range": "± 295864.25194310123"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29258.163265306124,
            "unit": "ns",
            "range": "± 12595.531227419693"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 105931.05263157895,
            "unit": "ns",
            "range": "± 24237.154065154835"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 100467.36842105263,
            "unit": "ns",
            "range": "± 24976.31832443831"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 126651.57894736843,
            "unit": "ns",
            "range": "± 33798.249555447655"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5336.046511627907,
            "unit": "ns",
            "range": "± 1387.4998921630206"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25522.448979591838,
            "unit": "ns",
            "range": "± 10599.956531833117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Lee",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37086a72265685660e5a23d42ee195af04bd0226",
          "message": "Merge pull request #3264 from OnedgeLee/prepare/2.4.1\n\n🔧 Prepare 2.4.1",
          "timestamp": "2023-07-03T21:30:42+09:00",
          "tree_id": "a3832bd7cdeea67403d08adccdbf0f97b8f9efda",
          "url": "https://github.com/planetarium/libplanet/commit/37086a72265685660e5a23d42ee195af04bd0226"
        },
        "date": 1688388622948,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1664856.8421052631,
            "unit": "ns",
            "range": "± 241859.01452047474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3440617.3913043477,
            "unit": "ns",
            "range": "± 295674.2652359015"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2401449.4505494507,
            "unit": "ns",
            "range": "± 214360.61017392908"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6581505.434782608,
            "unit": "ns",
            "range": "± 506390.592061484"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 61445.833333333336,
            "unit": "ns",
            "range": "± 17363.712413304074"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9250653.125,
            "unit": "ns",
            "range": "± 786675.9283216043"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23511196.907216493,
            "unit": "ns",
            "range": "± 1859863.7502994237"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62383710,
            "unit": "ns",
            "range": "± 2485938.394679735"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129397642.42424242,
            "unit": "ns",
            "range": "± 4047175.7912177397"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 268946740.90909094,
            "unit": "ns",
            "range": "± 6544686.927261365"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6378517.96875,
            "unit": "ns",
            "range": "± 79676.1756889229"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1989618.9732142857,
            "unit": "ns",
            "range": "± 31274.641906536308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1517774.4921875,
            "unit": "ns",
            "range": "± 21600.690118522904"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3359932.1484375,
            "unit": "ns",
            "range": "± 47377.46160817779"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1064640.2734375,
            "unit": "ns",
            "range": "± 24335.355029276972"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 999786.6015625,
            "unit": "ns",
            "range": "± 20374.330025211028"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3865425,
            "unit": "ns",
            "range": "± 367460.6135714626"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4170293.8775510206,
            "unit": "ns",
            "range": "± 335510.13560867246"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5260383.870967742,
            "unit": "ns",
            "range": "± 415107.43745243957"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4386026.315789473,
            "unit": "ns",
            "range": "± 423632.2206143734"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7994695,
            "unit": "ns",
            "range": "± 723869.212944918"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350918.94736842107,
            "unit": "ns",
            "range": "± 46621.83602803368"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 341891.8367346939,
            "unit": "ns",
            "range": "± 50352.71401784376"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 289951.0416666667,
            "unit": "ns",
            "range": "± 38651.0788159962"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4945691.489361702,
            "unit": "ns",
            "range": "± 368328.80834360817"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4209318.279569892,
            "unit": "ns",
            "range": "± 326635.57739948493"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25608.333333333332,
            "unit": "ns",
            "range": "± 8499.977296151308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 118697.93814432989,
            "unit": "ns",
            "range": "± 24696.284215197247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 118343.43434343435,
            "unit": "ns",
            "range": "± 25592.93653197751"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 145708.2474226804,
            "unit": "ns",
            "range": "± 31262.099891159116"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7551.724137931034,
            "unit": "ns",
            "range": "± 2118.8995646032167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27589.690721649484,
            "unit": "ns",
            "range": "± 9366.02330830347"
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
          "id": "65c0ba956f666688c1ec9d0d81756d8a9a7af778",
          "message": "Merge pull request #3298 from greymistcube/chore/rocksdb-optimization\n\n⚡ `RocksDBStore` Concat optimization",
          "timestamp": "2023-07-14T16:34:29+09:00",
          "tree_id": "75da47c8ef65a8990e003614dab5a1d38ddb5f49",
          "url": "https://github.com/planetarium/libplanet/commit/65c0ba956f666688c1ec9d0d81756d8a9a7af778"
        },
        "date": 1689320994320,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1310587.7551020407,
            "unit": "ns",
            "range": "± 88791.00941914876"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2527125.974025974,
            "unit": "ns",
            "range": "± 129062.60761697812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1684802.105263158,
            "unit": "ns",
            "range": "± 102964.84524935122"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4861735,
            "unit": "ns",
            "range": "± 308216.6345496805"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46507.46268656717,
            "unit": "ns",
            "range": "± 2217.5138572103547"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7148917.647058823,
            "unit": "ns",
            "range": "± 143056.48462798758"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19352938.46153846,
            "unit": "ns",
            "range": "± 137733.35675900214"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47822892.85714286,
            "unit": "ns",
            "range": "± 784283.5404801837"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95505700,
            "unit": "ns",
            "range": "± 542016.205728876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 190073366.66666666,
            "unit": "ns",
            "range": "± 3287249.290748088"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4862482.692307692,
            "unit": "ns",
            "range": "± 12101.94768376965"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1532005.703125,
            "unit": "ns",
            "range": "± 8520.983119097986"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1176769.0805288462,
            "unit": "ns",
            "range": "± 3490.2467822806666"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2715666.5625,
            "unit": "ns",
            "range": "± 9265.698349881313"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 870916.9921875,
            "unit": "ns",
            "range": "± 2430.724890490299"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 776840.95703125,
            "unit": "ns",
            "range": "± 2624.906535606137"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3079402.6315789474,
            "unit": "ns",
            "range": "± 151863.63178736746"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3329278.947368421,
            "unit": "ns",
            "range": "± 73409.65406499011"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4092153.846153846,
            "unit": "ns",
            "range": "± 56511.792506588325"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3553348.888888889,
            "unit": "ns",
            "range": "± 134998.4185466667"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6000529.0322580645,
            "unit": "ns",
            "range": "± 182827.52927927894"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 259894.73684210525,
            "unit": "ns",
            "range": "± 5706.961994325735"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 251300,
            "unit": "ns",
            "range": "± 8734.31194360524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215580,
            "unit": "ns",
            "range": "± 4933.249169504927"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972866.6666666665,
            "unit": "ns",
            "range": "± 71116.52075157729"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3664888,
            "unit": "ns",
            "range": "± 94596.30154856302"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18254.736842105263,
            "unit": "ns",
            "range": "± 1660.0928211073165"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 80908.33333333333,
            "unit": "ns",
            "range": "± 6112.89692142194"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70169.76744186046,
            "unit": "ns",
            "range": "± 2587.6570468762015"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 89295.91836734694,
            "unit": "ns",
            "range": "± 13887.099393331844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5041.489361702128,
            "unit": "ns",
            "range": "± 768.9413997371294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18154.736842105263,
            "unit": "ns",
            "range": "± 1674.322245926001"
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
          "id": "b914d88509225b995a693d4b9d3a4e33cdfa6c55",
          "message": "Merge pull request #3297 from greymistcube/chore/optimization\n\n⚡ Faster `Hex` for netstandard2.1 and up",
          "timestamp": "2023-07-14T16:50:04+09:00",
          "tree_id": "131e2ac4e3ab8806b23bbe508d3fb4215ff40af3",
          "url": "https://github.com/planetarium/libplanet/commit/b914d88509225b995a693d4b9d3a4e33cdfa6c55"
        },
        "date": 1689322137790,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615292.1348314607,
            "unit": "ns",
            "range": "± 84760.77730444867"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3096886.274509804,
            "unit": "ns",
            "range": "± 118883.96699237089"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2094384.5360824743,
            "unit": "ns",
            "range": "± 148495.35791019292"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5762973.214285715,
            "unit": "ns",
            "range": "± 247464.1964854872"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56778.82352941176,
            "unit": "ns",
            "range": "± 3086.379220814881"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9004600,
            "unit": "ns",
            "range": "± 280330.945045316"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24425907.14285714,
            "unit": "ns",
            "range": "± 299608.6947087066"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60780321.428571425,
            "unit": "ns",
            "range": "± 653269.4062925357"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126905278.57142857,
            "unit": "ns",
            "range": "± 2183471.3058228283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248938500,
            "unit": "ns",
            "range": "± 5890672.82141862"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6017135.364583333,
            "unit": "ns",
            "range": "± 103663.34638553394"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1929518.515625,
            "unit": "ns",
            "range": "± 31004.39505613155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1439755.2473958333,
            "unit": "ns",
            "range": "± 10443.843808288355"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214544.0104166665,
            "unit": "ns",
            "range": "± 49143.444918119996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029837.6193576389,
            "unit": "ns",
            "range": "± 21681.7758653317"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 944928.5295758928,
            "unit": "ns",
            "range": "± 8212.143226170756"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4069450,
            "unit": "ns",
            "range": "± 99119.51299891892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4315752.380952381,
            "unit": "ns",
            "range": "± 101531.15590323799"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5066078.260869565,
            "unit": "ns",
            "range": "± 127900.60756313773"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4654589.130434782,
            "unit": "ns",
            "range": "± 116757.56054604785"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7475319.230769231,
            "unit": "ns",
            "range": "± 192181.24782450713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 315947.0588235294,
            "unit": "ns",
            "range": "± 6465.689990930861"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 301644.18604651163,
            "unit": "ns",
            "range": "± 10959.564258056402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 275541.6666666667,
            "unit": "ns",
            "range": "± 13480.959446776546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4962256.666666667,
            "unit": "ns",
            "range": "± 81938.97961869175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4575030.769230769,
            "unit": "ns",
            "range": "± 34693.52448261262"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25495.833333333332,
            "unit": "ns",
            "range": "± 1865.4711083638772"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 103578.02197802198,
            "unit": "ns",
            "range": "± 5723.806080219354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88436.36363636363,
            "unit": "ns",
            "range": "± 4157.57460226832"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 116863.15789473684,
            "unit": "ns",
            "range": "± 16943.843748849973"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6391.836734693878,
            "unit": "ns",
            "range": "± 951.577471575408"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22858.947368421053,
            "unit": "ns",
            "range": "± 1889.472218149263"
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
          "id": "ec6313b2e9cdf179e04316d728f6157f628e56a1",
          "message": "Merge pull request #3302 from greymistcube/bump/bencodex-to-0.11.0\n\n⬆️ Bump Bencodex to 0.11.0",
          "timestamp": "2023-07-14T17:03:05+09:00",
          "tree_id": "56464697796c2a6fcb34286edce2ff533972e4d4",
          "url": "https://github.com/planetarium/libplanet/commit/ec6313b2e9cdf179e04316d728f6157f628e56a1"
        },
        "date": 1689322580182,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1031718.1818181818,
            "unit": "ns",
            "range": "± 111034.18334067156"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1867924.4897959183,
            "unit": "ns",
            "range": "± 116029.61945099705"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1315560.4166666667,
            "unit": "ns",
            "range": "± 100066.33429266773"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3466742.8571428573,
            "unit": "ns",
            "range": "± 204757.2987508689"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 34166.666666666664,
            "unit": "ns",
            "range": "± 1555.6979393286385"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5022133.333333333,
            "unit": "ns",
            "range": "± 43276.6295668536"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13094360,
            "unit": "ns",
            "range": "± 149224.29331139656"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 33688942.85714286,
            "unit": "ns",
            "range": "± 480271.82802159945"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 65800486.666666664,
            "unit": "ns",
            "range": "± 623065.7232778975"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 133056973.33333333,
            "unit": "ns",
            "range": "± 1203152.1044244375"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3514418.4635416665,
            "unit": "ns",
            "range": "± 9690.138930634634"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1113492.271205357,
            "unit": "ns",
            "range": "± 1190.049766343933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 839217.2526041666,
            "unit": "ns",
            "range": "± 1193.9526260652513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1897161.7057291667,
            "unit": "ns",
            "range": "± 3546.1111451337456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 587926.806640625,
            "unit": "ns",
            "range": "± 770.6648917097358"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 524684.9739583334,
            "unit": "ns",
            "range": "± 739.7483635214865"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2216877.192982456,
            "unit": "ns",
            "range": "± 95912.38750909203"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2217541.1764705884,
            "unit": "ns",
            "range": "± 102652.86560299086"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 2879276,
            "unit": "ns",
            "range": "± 75318.88475010765"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2502313.698630137,
            "unit": "ns",
            "range": "± 112339.03708945386"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4220338.636363637,
            "unit": "ns",
            "range": "± 157121.03202650495"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 191557.8947368421,
            "unit": "ns",
            "range": "± 9637.95639691174"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178191.66666666666,
            "unit": "ns",
            "range": "± 7157.390199177131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 157102.38095238095,
            "unit": "ns",
            "range": "± 7983.73310317707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2763642.3076923075,
            "unit": "ns",
            "range": "± 39283.127453960464"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2541630.769230769,
            "unit": "ns",
            "range": "± 24193.297440110164"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15032.631578947368,
            "unit": "ns",
            "range": "± 1575.5068151309517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 65717.8947368421,
            "unit": "ns",
            "range": "± 5220.112066689928"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 53323.40425531915,
            "unit": "ns",
            "range": "± 2055.4501004971326"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 69169.56521739131,
            "unit": "ns",
            "range": "± 9504.18923400097"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3788.5416666666665,
            "unit": "ns",
            "range": "± 618.8052651200951"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15491.752577319588,
            "unit": "ns",
            "range": "± 1843.777265509855"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu Yi",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "486af198bfe709e115b0c35089053641ed291098",
          "message": "Merge pull request #3306 from greymistcube/prepare/2.4.2\n\n🔧 Prepare 2.4.2",
          "timestamp": "2023-07-14T17:24:19+09:00",
          "tree_id": "517c6b292d84287d60461f4e3faf83a43b97c6a6",
          "url": "https://github.com/planetarium/libplanet/commit/486af198bfe709e115b0c35089053641ed291098"
        },
        "date": 1689323912910,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1325365,
            "unit": "ns",
            "range": "± 94900.48948261754"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2562527.118644068,
            "unit": "ns",
            "range": "± 112763.60049558128"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1778829.4736842106,
            "unit": "ns",
            "range": "± 114767.1285818005"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4905770.666666667,
            "unit": "ns",
            "range": "± 244810.97715039935"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 49068,
            "unit": "ns",
            "range": "± 1991.2502482160317"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7292255.172413793,
            "unit": "ns",
            "range": "± 212997.94027543167"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20458332.352941178,
            "unit": "ns",
            "range": "± 416440.25567194825"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49680632,
            "unit": "ns",
            "range": "± 1310932.048111826"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99879740.9090909,
            "unit": "ns",
            "range": "± 2436313.5396506027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 201688325,
            "unit": "ns",
            "range": "± 5181277.118143749"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4891998.489583333,
            "unit": "ns",
            "range": "± 32900.71129102183"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1546564.7395833333,
            "unit": "ns",
            "range": "± 6421.096001962383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1197134.8828125,
            "unit": "ns",
            "range": "± 10331.444212927896"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2674797.265625,
            "unit": "ns",
            "range": "± 11084.208299479014"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 842553.1529017857,
            "unit": "ns",
            "range": "± 2534.307233000784"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 795911.3606770834,
            "unit": "ns",
            "range": "± 1738.0477413050592"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180472.222222222,
            "unit": "ns",
            "range": "± 123782.19408431505"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3463338.4615384615,
            "unit": "ns",
            "range": "± 92196.40807286618"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4088663.1578947366,
            "unit": "ns",
            "range": "± 139118.39876969784"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3626213.888888889,
            "unit": "ns",
            "range": "± 118827.07039530242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6024506.25,
            "unit": "ns",
            "range": "± 161673.05306917932"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 254614.70588235295,
            "unit": "ns",
            "range": "± 7900.983151441237"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 249087.5,
            "unit": "ns",
            "range": "± 7558.748402966912"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216418.18181818182,
            "unit": "ns",
            "range": "± 5177.482046933659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4066493.5483870967,
            "unit": "ns",
            "range": "± 120897.47980688396"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3622415.3846153845,
            "unit": "ns",
            "range": "± 40436.242946022365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19782.65306122449,
            "unit": "ns",
            "range": "± 1836.5715206758334"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86706.12244897959,
            "unit": "ns",
            "range": "± 6399.594322299367"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72174.69879518072,
            "unit": "ns",
            "range": "± 3866.360340969016"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92545.8762886598,
            "unit": "ns",
            "range": "± 12304.444636710323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5022.105263157895,
            "unit": "ns",
            "range": "± 763.8339670552259"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 18466.326530612245,
            "unit": "ns",
            "range": "± 1594.3808466082185"
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
          "id": "1d74e3706ce2ef6607e142969c5dfa3ec41f1076",
          "message": "Merge pull request #3305 from greymistcube/release/2.4.1\n\n🚀 Release 2.4.1",
          "timestamp": "2023-07-14T17:21:46+09:00",
          "tree_id": "9681d8a9488eec9cce736a5b57461ef0d7d77eca",
          "url": "https://github.com/planetarium/libplanet/commit/1d74e3706ce2ef6607e142969c5dfa3ec41f1076"
        },
        "date": 1689324209612,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1775376.530612245,
            "unit": "ns",
            "range": "± 259124.91546480698"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3188929.8969072164,
            "unit": "ns",
            "range": "± 354197.2588253109"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2244635.4838709678,
            "unit": "ns",
            "range": "± 305806.4053147952"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5887184.946236559,
            "unit": "ns",
            "range": "± 595505.5256462939"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 66971.57894736843,
            "unit": "ns",
            "range": "± 13045.433399729813"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8786618.75,
            "unit": "ns",
            "range": "± 803123.6694848697"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25599368.085106384,
            "unit": "ns",
            "range": "± 1505974.6985703073"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63665956.666666664,
            "unit": "ns",
            "range": "± 2835575.9120513154"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 132796362,
            "unit": "ns",
            "range": "± 5345007.94328995"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 253672746.66666666,
            "unit": "ns",
            "range": "± 7467319.147827133"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5521815.650201613,
            "unit": "ns",
            "range": "± 168464.41667065216"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1818847.8445870536,
            "unit": "ns",
            "range": "± 50485.939426839235"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1336373.2599431819,
            "unit": "ns",
            "range": "± 31344.017672567523"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2844428.4912109375,
            "unit": "ns",
            "range": "± 54756.624647981545"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 961019.0941787348,
            "unit": "ns",
            "range": "± 34423.875812726605"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 899243.7689012097,
            "unit": "ns",
            "range": "± 27271.657044073665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3605721.649484536,
            "unit": "ns",
            "range": "± 318419.4633350546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3687324.7422680412,
            "unit": "ns",
            "range": "± 440892.8202690271"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4892476.288659794,
            "unit": "ns",
            "range": "± 455712.7836727308"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4160382.1052631577,
            "unit": "ns",
            "range": "± 486440.8306234669"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7619717.346938776,
            "unit": "ns",
            "range": "± 617779.3221961181"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330771.875,
            "unit": "ns",
            "range": "± 41978.93632995882"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 298326.59574468085,
            "unit": "ns",
            "range": "± 28559.062270123628"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 279695.8762886598,
            "unit": "ns",
            "range": "± 39238.2517383807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4866539.583333333,
            "unit": "ns",
            "range": "± 481511.53333275014"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4173047.8723404254,
            "unit": "ns",
            "range": "± 408488.8539637633"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33284.94623655914,
            "unit": "ns",
            "range": "± 7584.379631799294"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 115032.96703296703,
            "unit": "ns",
            "range": "± 19657.212727393784"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129477.55102040817,
            "unit": "ns",
            "range": "± 20410.657871940613"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 147793.8775510204,
            "unit": "ns",
            "range": "± 25131.660798688088"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 14133,
            "unit": "ns",
            "range": "± 9522.032452171228"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 31288.297872340427,
            "unit": "ns",
            "range": "± 7450.941434101063"
          }
        ]
      }
    ]
  }
}