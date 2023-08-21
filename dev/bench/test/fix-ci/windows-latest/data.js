window.BENCHMARK_DATA = {
  "lastUpdate": 1692617809520,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "050039ddb74fe85fc58cfa0892c3808a77c22fe3",
          "message": "Merge pull request #3356 from moreal/feature/rocksdb/readonly\n\nfeat(#3354): support rocksdb read-only mode",
          "timestamp": "2023-08-21T13:02:45+09:00",
          "tree_id": "d45cec8ff9a732a463bb60493b2d7699df2cc75a",
          "url": "https://github.com/planetarium/libplanet/commit/050039ddb74fe85fc58cfa0892c3808a77c22fe3"
        },
        "date": 1692591596746,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1415364.9484536082,
            "unit": "ns",
            "range": "± 117308.5968017309"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2626117.9487179485,
            "unit": "ns",
            "range": "± 135377.35475386266"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1765150,
            "unit": "ns",
            "range": "± 99201.55300336568"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4543056.521739131,
            "unit": "ns",
            "range": "± 173094.42336761224"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52637.234042553195,
            "unit": "ns",
            "range": "± 3304.9973254118045"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7704137.037037037,
            "unit": "ns",
            "range": "± 215244.38016097702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20859814.285714287,
            "unit": "ns",
            "range": "± 208568.14365921405"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 53096700,
            "unit": "ns",
            "range": "± 561241.5097867338"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 107399593.33333333,
            "unit": "ns",
            "range": "± 1311673.9868616452"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 214343933.33333334,
            "unit": "ns",
            "range": "± 2119683.7734727813"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4552156.752232143,
            "unit": "ns",
            "range": "± 15593.41578113426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1431989.5052083333,
            "unit": "ns",
            "range": "± 4890.61658904552"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1073760.9765625,
            "unit": "ns",
            "range": "± 1924.350659015551"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2671580.5989583335,
            "unit": "ns",
            "range": "± 2957.868455349839"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 843682.8822544643,
            "unit": "ns",
            "range": "± 2307.990033740815"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 774389.9639423077,
            "unit": "ns",
            "range": "± 1627.8717298730155"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3346822.727272727,
            "unit": "ns",
            "range": "± 107843.71306758201"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3575476.923076923,
            "unit": "ns",
            "range": "± 147030.00709523665"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4243867.647058823,
            "unit": "ns",
            "range": "± 135740.62994747862"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3980707.843137255,
            "unit": "ns",
            "range": "± 161554.06629749344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6310695.652173913,
            "unit": "ns",
            "range": "± 217237.84298579468"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 276448.3333333333,
            "unit": "ns",
            "range": "± 12230.906831502885"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 262168.08510638296,
            "unit": "ns",
            "range": "± 10119.93526321833"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 229224.48979591837,
            "unit": "ns",
            "range": "± 14913.005886888432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4150371.4285714286,
            "unit": "ns",
            "range": "± 66930.33609739227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3614218.75,
            "unit": "ns",
            "range": "± 69908.21810297652"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21873.684210526317,
            "unit": "ns",
            "range": "± 2041.5477298507324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 92711.70212765958,
            "unit": "ns",
            "range": "± 7280.1373079184405"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 75038.70967741935,
            "unit": "ns",
            "range": "± 5327.819365043804"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84825.58139534884,
            "unit": "ns",
            "range": "± 10740.217831578997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5436.458333333333,
            "unit": "ns",
            "range": "± 910.4215092809503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20700,
            "unit": "ns",
            "range": "± 2510.286529768756"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "732587ddc261c59e44eb826e936333a84cf1cadd",
          "message": "refactor: add console output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:09:24+09:00",
          "tree_id": "e4b2c411230a697f2aef03ec5700c4eb1e097dff",
          "url": "https://github.com/planetarium/libplanet/commit/732587ddc261c59e44eb826e936333a84cf1cadd"
        },
        "date": 1692592079569,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1613954.4444444445,
            "unit": "ns",
            "range": "± 117602.283629428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3101039.361702128,
            "unit": "ns",
            "range": "± 182590.32068592886"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2020795.6989247312,
            "unit": "ns",
            "range": "± 128823.6576250976"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5542413.978494624,
            "unit": "ns",
            "range": "± 346364.0675683287"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55470.65217391304,
            "unit": "ns",
            "range": "± 3304.8927446305584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9190042.857142856,
            "unit": "ns",
            "range": "± 215264.35741066976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25568094.285714287,
            "unit": "ns",
            "range": "± 795840.0955050238"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 65092178.571428575,
            "unit": "ns",
            "range": "± 1102182.801694732"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129167457.14285715,
            "unit": "ns",
            "range": "± 1970916.1168249752"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 260758942.85714287,
            "unit": "ns",
            "range": "± 6119300.282023381"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5652807.421875,
            "unit": "ns",
            "range": "± 110197.07102276105"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1795403.3804086538,
            "unit": "ns",
            "range": "± 26020.551707549686"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1348840.1742788462,
            "unit": "ns",
            "range": "± 9754.457179554436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3335097.7864583335,
            "unit": "ns",
            "range": "± 51227.66452712258"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1032602.8053977273,
            "unit": "ns",
            "range": "± 25174.912867202624"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 970956.8917410715,
            "unit": "ns",
            "range": "± 12063.103233978729"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3944532.2580645164,
            "unit": "ns",
            "range": "± 173576.48644697404"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4171551.6483516484,
            "unit": "ns",
            "range": "± 226385.9238668132"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4995838.095238095,
            "unit": "ns",
            "range": "± 181748.6551127897"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4599195.348837209,
            "unit": "ns",
            "range": "± 167451.84944518682"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7338158.620689655,
            "unit": "ns",
            "range": "± 318231.89604629826"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 297483.87096774194,
            "unit": "ns",
            "range": "± 7051.812853169675"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 290186.84210526315,
            "unit": "ns",
            "range": "± 9800.032295937726"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 262776.74418604653,
            "unit": "ns",
            "range": "± 14166.343082595075"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4951013.043478261,
            "unit": "ns",
            "range": "± 102308.2077234712"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4642691.304347826,
            "unit": "ns",
            "range": "± 117071.86570278289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23755.434782608696,
            "unit": "ns",
            "range": "± 2101.980443988179"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100288.23529411765,
            "unit": "ns",
            "range": "± 5430.8293623557365"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84871.01449275362,
            "unit": "ns",
            "range": "± 4025.218351741758"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 99023.71134020618,
            "unit": "ns",
            "range": "± 18200.187574559248"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6237.894736842105,
            "unit": "ns",
            "range": "± 1108.3991664585672"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23203.296703296703,
            "unit": "ns",
            "range": "± 2052.0694459469473"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "453591bbb880d9ef869ca01c018ad4a3c76afa44",
          "message": "refactor: add file output for `SwarmTest` debugging",
          "timestamp": "2023-08-21T13:23:17+09:00",
          "tree_id": "a6284d52c357e9b9e7429d9de734b2bfbf826b3b",
          "url": "https://github.com/planetarium/libplanet/commit/453591bbb880d9ef869ca01c018ad4a3c76afa44"
        },
        "date": 1692593033012,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1722390.8163265307,
            "unit": "ns",
            "range": "± 242393.57228248197"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112394.7916666665,
            "unit": "ns",
            "range": "± 291329.7442200584"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2055526.0416666667,
            "unit": "ns",
            "range": "± 320840.77679050574"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5536637,
            "unit": "ns",
            "range": "± 552865.3078437565"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55759.782608695656,
            "unit": "ns",
            "range": "± 10632.110391676391"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9213804.210526315,
            "unit": "ns",
            "range": "± 603890.304417381"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24350369.587628867,
            "unit": "ns",
            "range": "± 1659054.8545305831"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 64376456.666666664,
            "unit": "ns",
            "range": "± 2868554.517780728"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124710885.71428572,
            "unit": "ns",
            "range": "± 4547515.963558053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259269240.9090909,
            "unit": "ns",
            "range": "± 6042895.690841404"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5380041.287878788,
            "unit": "ns",
            "range": "± 169583.9289089944"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1707494.9761284722,
            "unit": "ns",
            "range": "± 35719.63591779657"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1242635.8854166667,
            "unit": "ns",
            "range": "± 21372.887462279614"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3065404.8270089286,
            "unit": "ns",
            "range": "± 38634.78391940209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1036988.8400607639,
            "unit": "ns",
            "range": "± 34269.52394299933"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 939761.6666666666,
            "unit": "ns",
            "range": "± 11375.643818950819"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3748559.793814433,
            "unit": "ns",
            "range": "± 311936.5983456528"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3854100,
            "unit": "ns",
            "range": "± 397921.68281230156"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5063942.708333333,
            "unit": "ns",
            "range": "± 405352.69834001985"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4292243.157894737,
            "unit": "ns",
            "range": "± 452941.2440531218"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7378039.795918368,
            "unit": "ns",
            "range": "± 598814.7746835739"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 318896.84210526315,
            "unit": "ns",
            "range": "± 58644.004341797474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 317947.36842105264,
            "unit": "ns",
            "range": "± 56800.51476037583"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 247464.58333333334,
            "unit": "ns",
            "range": "± 43549.814137416346"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4494325.510204081,
            "unit": "ns",
            "range": "± 362931.5684301093"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4103921.052631579,
            "unit": "ns",
            "range": "± 398580.34078803984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27644.897959183672,
            "unit": "ns",
            "range": "± 11409.763611029957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97948.94736842105,
            "unit": "ns",
            "range": "± 23933.167116825167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 106079.34782608696,
            "unit": "ns",
            "range": "± 25261.357093540275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 124465.625,
            "unit": "ns",
            "range": "± 34318.611884960126"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6512.5,
            "unit": "ns",
            "range": "± 1156.5716778380022"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19173.493975903613,
            "unit": "ns",
            "range": "± 3601.6623647417887"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "47d3e69c92a75415b1b8592198fc2c0139660174",
          "message": "refactor: dump linux core",
          "timestamp": "2023-08-21T13:31:21+09:00",
          "tree_id": "3fd022f76677056b587770f46908c2b4e0d089bd",
          "url": "https://github.com/planetarium/libplanet/commit/47d3e69c92a75415b1b8592198fc2c0139660174"
        },
        "date": 1692593319103,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1559760.4166666667,
            "unit": "ns",
            "range": "± 95980.73324114986"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3006321.8181818184,
            "unit": "ns",
            "range": "± 127610.93023386168"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1996884.6153846155,
            "unit": "ns",
            "range": "± 123659.647530431"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5068345.454545454,
            "unit": "ns",
            "range": "± 156882.82468714725"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56771.875,
            "unit": "ns",
            "range": "± 4214.653713065005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9088871.875,
            "unit": "ns",
            "range": "± 280867.758154197"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24488400,
            "unit": "ns",
            "range": "± 234993.7729671434"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 60738073.333333336,
            "unit": "ns",
            "range": "± 906196.894772454"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 122140492.3076923,
            "unit": "ns",
            "range": "± 1304218.2629590407"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 245126820,
            "unit": "ns",
            "range": "± 3825586.696218727"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5566773.549107143,
            "unit": "ns",
            "range": "± 38725.98071570863"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1750503.41796875,
            "unit": "ns",
            "range": "± 7619.28307541195"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1301201.7159598214,
            "unit": "ns",
            "range": "± 12699.710096838236"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3163755.4837740385,
            "unit": "ns",
            "range": "± 16947.95357278759"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1010396.6015625,
            "unit": "ns",
            "range": "± 8341.362950050538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 928598.3072916666,
            "unit": "ns",
            "range": "± 7698.684704931001"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3907525.5319148935,
            "unit": "ns",
            "range": "± 150524.45484991165"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4088386.4864864866,
            "unit": "ns",
            "range": "± 134889.4756667311"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4938045.098039215,
            "unit": "ns",
            "range": "± 201200.65339230435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4452747.05882353,
            "unit": "ns",
            "range": "± 143571.6825191875"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7030513.793103448,
            "unit": "ns",
            "range": "± 203834.78555672397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 301329.6296296296,
            "unit": "ns",
            "range": "± 7704.834387219035"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 289829.4117647059,
            "unit": "ns",
            "range": "± 5952.495769200759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265433.58208955225,
            "unit": "ns",
            "range": "± 12556.594271596601"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4835371.428571428,
            "unit": "ns",
            "range": "± 60333.60051951443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4471573.333333333,
            "unit": "ns",
            "range": "± 80224.16332347992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 24579.79797979798,
            "unit": "ns",
            "range": "± 2200.7874192874324"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 99831.9587628866,
            "unit": "ns",
            "range": "± 6609.31392039157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84641.37931034483,
            "unit": "ns",
            "range": "± 5412.185899885167"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94272.34042553192,
            "unit": "ns",
            "range": "± 13665.37421836759"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6063.684210526316,
            "unit": "ns",
            "range": "± 860.5553039352084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22912.76595744681,
            "unit": "ns",
            "range": "± 2376.451861496765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "1be722264dae1d03dba687fd2ce39f1375243e6f",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T13:55:52+09:00",
          "tree_id": "c56415f9d4061f4f5ef8ba079576b88d8bda8735",
          "url": "https://github.com/planetarium/libplanet/commit/1be722264dae1d03dba687fd2ce39f1375243e6f"
        },
        "date": 1692595054932,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1677038.7096774194,
            "unit": "ns",
            "range": "± 143836.05555137363"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3095435.294117647,
            "unit": "ns",
            "range": "± 124863.86959169479"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2075495.6043956045,
            "unit": "ns",
            "range": "± 143500.04096947765"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5302447.1698113205,
            "unit": "ns",
            "range": "± 217444.95997110626"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 64460.91954022989,
            "unit": "ns",
            "range": "± 7328.28791709063"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10187986.842105264,
            "unit": "ns",
            "range": "± 349063.2531319438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 27612467.948717948,
            "unit": "ns",
            "range": "± 1415973.177849053"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63774456.25,
            "unit": "ns",
            "range": "± 1065928.619854538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 129272702.94117647,
            "unit": "ns",
            "range": "± 4162775.7234723186"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 259627369.5652174,
            "unit": "ns",
            "range": "± 6507843.775394483"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5849356.492456896,
            "unit": "ns",
            "range": "± 171389.30181090496"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1839987.513950893,
            "unit": "ns",
            "range": "± 51396.57609376296"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1369350.1188858696,
            "unit": "ns",
            "range": "± 34111.758864229996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3348642.153532609,
            "unit": "ns",
            "range": "± 71373.1160791163"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1037991.0750679348,
            "unit": "ns",
            "range": "± 25499.144723351706"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 943136.4118303572,
            "unit": "ns",
            "range": "± 12214.734266264742"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4108133.3333333335,
            "unit": "ns",
            "range": "± 82689.95244462363"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4344522.857142857,
            "unit": "ns",
            "range": "± 141775.06643336435"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5165092.857142857,
            "unit": "ns",
            "range": "± 80400.32973799313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4668175.757575758,
            "unit": "ns",
            "range": "± 145968.1408525141"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7199203.571428572,
            "unit": "ns",
            "range": "± 156748.50222485524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 313748.275862069,
            "unit": "ns",
            "range": "± 12564.517588763785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305472.0930232558,
            "unit": "ns",
            "range": "± 11324.022623259503"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 297617.14285714284,
            "unit": "ns",
            "range": "± 14334.350871484638"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5159577.777777778,
            "unit": "ns",
            "range": "± 103639.88305414632"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4723154.166666667,
            "unit": "ns",
            "range": "± 121468.71838914514"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 31004.639175257733,
            "unit": "ns",
            "range": "± 3109.6295538535323"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 120441.23711340207,
            "unit": "ns",
            "range": "± 10725.502635631654"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 107284.94623655915,
            "unit": "ns",
            "range": "± 9491.425721425572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112488.65979381443,
            "unit": "ns",
            "range": "± 18615.830384204484"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 9074.226804123711,
            "unit": "ns",
            "range": "± 1244.2600169139575"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29243.617021276597,
            "unit": "ns",
            "range": "± 2673.8301033615885"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "dd8d483365b9cf8bfb306654bde8d7cdc99df2d7",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:20:52+09:00",
          "tree_id": "8e1f8f785d7086e9ae7b6c3dbd7d8db2723ef781",
          "url": "https://github.com/planetarium/libplanet/commit/dd8d483365b9cf8bfb306654bde8d7cdc99df2d7"
        },
        "date": 1692596084011,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1317118,
            "unit": "ns",
            "range": "± 108722.98260006733"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2361606.4516129033,
            "unit": "ns",
            "range": "± 71522.01495802474"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1665571.875,
            "unit": "ns",
            "range": "± 116025.78543094816"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4198564.634146341,
            "unit": "ns",
            "range": "± 133923.63600383542"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 43098.529411764706,
            "unit": "ns",
            "range": "± 2073.463656888027"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6979100,
            "unit": "ns",
            "range": "± 62661.98437421437"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17579140,
            "unit": "ns",
            "range": "± 83994.8875995268"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 45538053.333333336,
            "unit": "ns",
            "range": "± 566494.3662141584"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 90995000,
            "unit": "ns",
            "range": "± 1125740.1032209876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 185029907.14285713,
            "unit": "ns",
            "range": "± 1298327.570059199"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4440202.884615385,
            "unit": "ns",
            "range": "± 4769.211758432922"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1379215.7784598214,
            "unit": "ns",
            "range": "± 1293.5960560911499"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 992006.7103794643,
            "unit": "ns",
            "range": "± 1039.684333429413"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2532438.2291666665,
            "unit": "ns",
            "range": "± 2799.438283460471"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 813318.2454427084,
            "unit": "ns",
            "range": "± 654.2037183955445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 732484.6549479166,
            "unit": "ns",
            "range": "± 538.9133373258413"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2954427.272727273,
            "unit": "ns",
            "range": "± 66716.880007402"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3089650,
            "unit": "ns",
            "range": "± 72611.56768659358"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3882747.0588235296,
            "unit": "ns",
            "range": "± 77877.67746317826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3357726.1904761903,
            "unit": "ns",
            "range": "± 112615.21159547915"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5500275,
            "unit": "ns",
            "range": "± 107026.85332818738"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 242968.085106383,
            "unit": "ns",
            "range": "± 9090.94404584988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237158.33333333334,
            "unit": "ns",
            "range": "± 6155.161613861462"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 215040.81632653062,
            "unit": "ns",
            "range": "± 13291.768142638843"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3772080,
            "unit": "ns",
            "range": "± 28864.936712706844"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3337450,
            "unit": "ns",
            "range": "± 37629.749891848565"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 19817.708333333332,
            "unit": "ns",
            "range": "± 1663.9834761114453"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 81294.18604651163,
            "unit": "ns",
            "range": "± 4410.531637987121"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 65828.88888888889,
            "unit": "ns",
            "range": "± 2488.4845901784397"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 71155.71428571429,
            "unit": "ns",
            "range": "± 2691.0418064646983"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4415.4639175257735,
            "unit": "ns",
            "range": "± 498.40165491498203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17465.263157894737,
            "unit": "ns",
            "range": "± 1479.5606320978375"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T14:46:34+09:00",
          "tree_id": "9314475d2f7f6fb3e7b3b845f3d8d66ded773606",
          "url": "https://github.com/planetarium/libplanet/commit/ace7a1e550b57ae06fc5ff3e4e18bb80a75b1513"
        },
        "date": 1692598130866,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1660289.3617021276,
            "unit": "ns",
            "range": "± 177202.59923582457"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3140743.6170212766,
            "unit": "ns",
            "range": "± 317406.2494924824"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2050589.3617021276,
            "unit": "ns",
            "range": "± 223435.80611778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5697060.869565218,
            "unit": "ns",
            "range": "± 454895.0615509157"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 60472.916666666664,
            "unit": "ns",
            "range": "± 13935.7735733514"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9686371.42857143,
            "unit": "ns",
            "range": "± 1008704.456425355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26125871.57894737,
            "unit": "ns",
            "range": "± 1565601.1573740244"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 77165565.51724137,
            "unit": "ns",
            "range": "± 2111849.4921134654"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 155138953.33333334,
            "unit": "ns",
            "range": "± 2678672.672603426"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 286433265.38461536,
            "unit": "ns",
            "range": "± 11699946.674151724"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5990217.686631944,
            "unit": "ns",
            "range": "± 196737.91786058788"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1877147.7914663462,
            "unit": "ns",
            "range": "± 65736.053257474"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1368143.1849888393,
            "unit": "ns",
            "range": "± 39196.81847667435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3633453.1644570706,
            "unit": "ns",
            "range": "± 226090.49367173217"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1106378.9481026786,
            "unit": "ns",
            "range": "± 12876.14135564599"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1036908.2566784275,
            "unit": "ns",
            "range": "± 31092.28472597623"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4225903.157894737,
            "unit": "ns",
            "range": "± 310022.7923853861"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4702494.680851064,
            "unit": "ns",
            "range": "± 464373.3137116424"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5487296.923076923,
            "unit": "ns",
            "range": "± 255345.4069792222"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4858605.555555556,
            "unit": "ns",
            "range": "± 359768.9706130589"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7731183.333333333,
            "unit": "ns",
            "range": "± 324979.7542315173"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 316074.2268041237,
            "unit": "ns",
            "range": "± 36704.57589079357"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 314250.5376344086,
            "unit": "ns",
            "range": "± 36211.5601997361"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 274727.36842105264,
            "unit": "ns",
            "range": "± 31261.972828482518"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5050271.739130435,
            "unit": "ns",
            "range": "± 346330.2696503196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4723301.851851852,
            "unit": "ns",
            "range": "± 127446.252231979"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29796.875,
            "unit": "ns",
            "range": "± 8106.987929525594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 139440.21739130435,
            "unit": "ns",
            "range": "± 11608.182598879335"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 135690.76923076922,
            "unit": "ns",
            "range": "± 6318.764789224114"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135935.10638297873,
            "unit": "ns",
            "range": "± 17516.079908612686"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 8348.91304347826,
            "unit": "ns",
            "range": "± 2310.5346208429155"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29337.63440860215,
            "unit": "ns",
            "range": "± 5488.484268041796"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "75fb1636b37a96065bfc58c7fc831e7dc5ff71a8",
          "message": "fix: throw when try connect to disposed netmq socket",
          "timestamp": "2023-08-21T15:02:48+09:00",
          "tree_id": "81d385dcaa484a315b2a08cb206277449c29ebd8",
          "url": "https://github.com/planetarium/libplanet/commit/75fb1636b37a96065bfc58c7fc831e7dc5ff71a8"
        },
        "date": 1692598928297,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1580760.824742268,
            "unit": "ns",
            "range": "± 122530.7177104829"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3020728.125,
            "unit": "ns",
            "range": "± 139233.046009884"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1953426.3157894737,
            "unit": "ns",
            "range": "± 132250.0800068344"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5194075.384615385,
            "unit": "ns",
            "range": "± 240353.17700649472"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52313.333333333336,
            "unit": "ns",
            "range": "± 3230.653741196295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8962725.925925925,
            "unit": "ns",
            "range": "± 247172.46017957805"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24815583.333333332,
            "unit": "ns",
            "range": "± 372343.85733517626"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 62197257.692307696,
            "unit": "ns",
            "range": "± 549072.9800635772"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 124903907.14285715,
            "unit": "ns",
            "range": "± 1528105.871515596"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 249279613.33333334,
            "unit": "ns",
            "range": "± 3150590.8314080364"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5491172.942708333,
            "unit": "ns",
            "range": "± 59396.87446409155"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1709534.0364583333,
            "unit": "ns",
            "range": "± 8611.645407031308"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1303133.9583333333,
            "unit": "ns",
            "range": "± 9034.951015398632"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3173638.7276785714,
            "unit": "ns",
            "range": "± 18900.685077159174"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1029490.2864583334,
            "unit": "ns",
            "range": "± 6262.17530894598"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 916047.12890625,
            "unit": "ns",
            "range": "± 7947.480070352883"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3874110.638297872,
            "unit": "ns",
            "range": "± 150070.6257415264"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3960982.3076923075,
            "unit": "ns",
            "range": "± 185006.46872786328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4881661.904761905,
            "unit": "ns",
            "range": "± 114265.7012239039"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4568940.909090909,
            "unit": "ns",
            "range": "± 100760.80898695497"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7098332.142857143,
            "unit": "ns",
            "range": "± 183279.78622773036"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303817.14285714284,
            "unit": "ns",
            "range": "± 8952.636342384942"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 297660.71428571426,
            "unit": "ns",
            "range": "± 8420.888458699737"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 270304.1237113402,
            "unit": "ns",
            "range": "± 15624.979450158307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4962861.538461538,
            "unit": "ns",
            "range": "± 66290.16440948006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4521168.75,
            "unit": "ns",
            "range": "± 83072.96165620517"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23026.88172043011,
            "unit": "ns",
            "range": "± 2355.0657604104977"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 100438.14432989691,
            "unit": "ns",
            "range": "± 8454.257350823424"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85661.45833333333,
            "unit": "ns",
            "range": "± 6229.765050763896"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95492.85714285714,
            "unit": "ns",
            "range": "± 14872.77489205329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6108.333333333333,
            "unit": "ns",
            "range": "± 756.3995973539336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22694.791666666668,
            "unit": "ns",
            "range": "± 2264.1075756321934"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "d8ee9a4f08cefc93a43afe68e87475e68609627a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:30:20+09:00",
          "tree_id": "721ab642828cec0656e765138744693a9f1245ef",
          "url": "https://github.com/planetarium/libplanet/commit/d8ee9a4f08cefc93a43afe68e87475e68609627a"
        },
        "date": 1692600701734,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1729887.2340425532,
            "unit": "ns",
            "range": "± 174255.12271456243"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3332941.5730337077,
            "unit": "ns",
            "range": "± 180746.9877838964"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2212661.4583333335,
            "unit": "ns",
            "range": "± 192121.02017645116"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5694847.619047619,
            "unit": "ns",
            "range": "± 203142.57937509898"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 67553.125,
            "unit": "ns",
            "range": "± 12397.766803361254"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9760179.661016949,
            "unit": "ns",
            "range": "± 428925.0580710602"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 26082891.42857143,
            "unit": "ns",
            "range": "± 856058.5825100263"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 66584896,
            "unit": "ns",
            "range": "± 1756957.2221314895"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 134503460,
            "unit": "ns",
            "range": "± 3922747.335873603"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 270011278.94736844,
            "unit": "ns",
            "range": "± 5392843.617402083"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5801062.319711538,
            "unit": "ns",
            "range": "± 155433.3828131513"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1799351.5258789062,
            "unit": "ns",
            "range": "± 34668.27904924356"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1300307.5317382812,
            "unit": "ns",
            "range": "± 23831.357131795237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3230067.333984375,
            "unit": "ns",
            "range": "± 54660.758332674006"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1054728.208705357,
            "unit": "ns",
            "range": "± 12446.956268286127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 971565.3645833334,
            "unit": "ns",
            "range": "± 16123.606175887788"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4014013.5416666665,
            "unit": "ns",
            "range": "± 250491.06239746112"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4332166.666666667,
            "unit": "ns",
            "range": "± 193133.36102611313"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5323640.909090909,
            "unit": "ns",
            "range": "± 125194.66616924795"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4832040.740740741,
            "unit": "ns",
            "range": "± 133137.74896486042"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7617894,
            "unit": "ns",
            "range": "± 300536.63596157794"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 326997.7528089888,
            "unit": "ns",
            "range": "± 19499.405454386702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 316080.6451612903,
            "unit": "ns",
            "range": "± 28588.049563412198"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 278370.652173913,
            "unit": "ns",
            "range": "± 27080.73618086236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5223132.584269663,
            "unit": "ns",
            "range": "± 332774.94093240227"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4574488.461538462,
            "unit": "ns",
            "range": "± 187841.65489910322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 25838.709677419356,
            "unit": "ns",
            "range": "± 4127.295994960141"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 116662.76595744681,
            "unit": "ns",
            "range": "± 12840.150269131682"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 129167.85714285714,
            "unit": "ns",
            "range": "± 3701.556586629625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129341.05263157895,
            "unit": "ns",
            "range": "± 16429.044692813917"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10041.489361702128,
            "unit": "ns",
            "range": "± 1013.8195184620597"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29426.315789473683,
            "unit": "ns",
            "range": "± 4963.873970280989"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f18c8b532a93098d5b8bbafd3f3f883dd9451aa7",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:55:31+09:00",
          "tree_id": "5ff132714a603bce55a62ee15e222eef3ec7506e",
          "url": "https://github.com/planetarium/libplanet/commit/f18c8b532a93098d5b8bbafd3f3f883dd9451aa7"
        },
        "date": 1692601805783,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1437300,
            "unit": "ns",
            "range": "± 20023.755123122366"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2411494.3396226414,
            "unit": "ns",
            "range": "± 92814.18868465173"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1718510,
            "unit": "ns",
            "range": "± 129714.04096797858"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4126590.625,
            "unit": "ns",
            "range": "± 128053.61366939366"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 42558.20895522388,
            "unit": "ns",
            "range": "± 2033.518316503432"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6999476.666666667,
            "unit": "ns",
            "range": "± 108448.18688247044"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 17867743.333333332,
            "unit": "ns",
            "range": "± 131402.17690448702"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46052192.85714286,
            "unit": "ns",
            "range": "± 274117.93212828255"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92144973.33333333,
            "unit": "ns",
            "range": "± 542558.9875325824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 181934946.15384614,
            "unit": "ns",
            "range": "± 1002643.5529932731"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4347081.640625,
            "unit": "ns",
            "range": "± 4566.058419805345"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391242.3307291667,
            "unit": "ns",
            "range": "± 2099.5753312577785"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1005519.8392427885,
            "unit": "ns",
            "range": "± 1034.5120417741987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2538736.2723214286,
            "unit": "ns",
            "range": "± 2224.206638160012"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 802798.9483173077,
            "unit": "ns",
            "range": "± 1424.3050320323057"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 728493.6067708334,
            "unit": "ns",
            "range": "± 3924.629366762299"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2994861.904761905,
            "unit": "ns",
            "range": "± 68082.23319038878"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3202611.4285714286,
            "unit": "ns",
            "range": "± 102698.67623703986"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3895913.3333333335,
            "unit": "ns",
            "range": "± 53184.01836570653"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3431650,
            "unit": "ns",
            "range": "± 99042.87180077855"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5649602.380952381,
            "unit": "ns",
            "range": "± 205481.8492228607"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 249116.27906976745,
            "unit": "ns",
            "range": "± 7436.714911987049"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 234873.4693877551,
            "unit": "ns",
            "range": "± 9233.764479484249"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 212830.4347826087,
            "unit": "ns",
            "range": "± 11924.03371467336"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3792373.3333333335,
            "unit": "ns",
            "range": "± 38238.60178754797"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3473214.285714286,
            "unit": "ns",
            "range": "± 33305.043673082524"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20434.21052631579,
            "unit": "ns",
            "range": "± 2049.6141717600185"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78435.26315789473,
            "unit": "ns",
            "range": "± 5675.872196937546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 63932.20338983051,
            "unit": "ns",
            "range": "± 2576.782321099929"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67169.33333333333,
            "unit": "ns",
            "range": "± 3388.971514770805"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3975.257731958763,
            "unit": "ns",
            "range": "± 632.7899414226144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16801.052631578947,
            "unit": "ns",
            "range": "± 1614.791649615681"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:56:11+09:00",
          "tree_id": "32ebda4ba1257e16026df3d9ce56d3dac0f8ab4a",
          "url": "https://github.com/planetarium/libplanet/commit/20eb6cd35ca62b7df1519d7af0a02b4ef8da23ed"
        },
        "date": 1692601951827,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1392578.7878787878,
            "unit": "ns",
            "range": "± 119523.71916658939"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2600294.117647059,
            "unit": "ns",
            "range": "± 122612.0369567055"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1744557.4468085107,
            "unit": "ns",
            "range": "± 123129.9667318627"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4430184.848484849,
            "unit": "ns",
            "range": "± 136993.4672740185"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48886.84210526316,
            "unit": "ns",
            "range": "± 3854.0405056881386"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7867765.714285715,
            "unit": "ns",
            "range": "± 252447.55884418165"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20611920,
            "unit": "ns",
            "range": "± 276908.00999609963"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52798892.85714286,
            "unit": "ns",
            "range": "± 493734.6803298707"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 106424073.33333333,
            "unit": "ns",
            "range": "± 1726791.488970499"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 210276346.66666666,
            "unit": "ns",
            "range": "± 3209856.584439041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4540106.458333333,
            "unit": "ns",
            "range": "± 28553.78962774333"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1420187.0052083333,
            "unit": "ns",
            "range": "± 6324.549688517495"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046932.2126116072,
            "unit": "ns",
            "range": "± 3720.3423527142854"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2645996.171875,
            "unit": "ns",
            "range": "± 14127.626877227603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 831909.94140625,
            "unit": "ns",
            "range": "± 2834.5148869343116"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 766112.5716145834,
            "unit": "ns",
            "range": "± 3874.9993587909407"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3419362.962962963,
            "unit": "ns",
            "range": "± 92029.38137919344"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3471873.6842105263,
            "unit": "ns",
            "range": "± 122563.27451320193"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4277011.111111111,
            "unit": "ns",
            "range": "± 91266.00996627056"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3855784.9056603773,
            "unit": "ns",
            "range": "± 154558.2095923564"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6004283.333333333,
            "unit": "ns",
            "range": "± 160226.8673568466"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 261002.27272727274,
            "unit": "ns",
            "range": "± 9612.455307577202"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 246170,
            "unit": "ns",
            "range": "± 7275.607296883301"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 213904.8780487805,
            "unit": "ns",
            "range": "± 11361.782402759714"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4145378.5714285714,
            "unit": "ns",
            "range": "± 40569.35521323432"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3759371.4285714286,
            "unit": "ns",
            "range": "± 48115.97253705689"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21582.291666666668,
            "unit": "ns",
            "range": "± 1960.8802959609027"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84347.36842105263,
            "unit": "ns",
            "range": "± 5794.583716534634"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70229.72972972973,
            "unit": "ns",
            "range": "± 3413.9010638708546"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 86510.30927835051,
            "unit": "ns",
            "range": "± 9753.797172299131"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5254.081632653061,
            "unit": "ns",
            "range": "± 994.6421795964409"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 20842.708333333332,
            "unit": "ns",
            "range": "± 2419.732251028338"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T15:58:58+09:00",
          "tree_id": "9034f836b9c8bb4c07dc45c620e30745fd5b7f1a",
          "url": "https://github.com/planetarium/libplanet/commit/dc39b8fca8f3bd73d57da98dcd73ffd18e685aeb"
        },
        "date": 1692602283364,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1533256.3829787234,
            "unit": "ns",
            "range": "± 115663.7465701654"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2941848.051948052,
            "unit": "ns",
            "range": "± 149843.00082910428"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2019262.5,
            "unit": "ns",
            "range": "± 175885.32463242245"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5376419.14893617,
            "unit": "ns",
            "range": "± 366564.5602532745"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 54401.13636363636,
            "unit": "ns",
            "range": "± 3645.1036066249617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9012122.857142856,
            "unit": "ns",
            "range": "± 292913.7717784519"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24529751.111111112,
            "unit": "ns",
            "range": "± 914083.8825697219"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61888385,
            "unit": "ns",
            "range": "± 1373474.072437443"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123684621.62162162,
            "unit": "ns",
            "range": "± 4177960.9783651326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 252548669.6969697,
            "unit": "ns",
            "range": "± 7947269.760839445"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5494477.65625,
            "unit": "ns",
            "range": "± 75357.00555838007"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1737389.7265625,
            "unit": "ns",
            "range": "± 27357.639821878318"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1324832.421875,
            "unit": "ns",
            "range": "± 24087.67068075505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3263588.0989583335,
            "unit": "ns",
            "range": "± 45825.229428743456"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1009128.5041360294,
            "unit": "ns",
            "range": "± 20231.828253111926"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 934491.0611979166,
            "unit": "ns",
            "range": "± 13745.24501771603"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3864036.111111111,
            "unit": "ns",
            "range": "± 120909.31939215031"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4671869.736842105,
            "unit": "ns",
            "range": "± 235776.45232705033"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4812921.875,
            "unit": "ns",
            "range": "± 146544.38441244545"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4414820.12987013,
            "unit": "ns",
            "range": "± 214820.34297042328"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7025831.147540984,
            "unit": "ns",
            "range": "± 314572.51656864095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 294438.3561643836,
            "unit": "ns",
            "range": "± 14618.078895450226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283228.81355932204,
            "unit": "ns",
            "range": "± 12511.967386403854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 255767.56756756757,
            "unit": "ns",
            "range": "± 12361.65201652125"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4806153.846153846,
            "unit": "ns",
            "range": "± 164163.43564642785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4367284.615384615,
            "unit": "ns",
            "range": "± 178387.57802595678"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22970.408163265307,
            "unit": "ns",
            "range": "± 2158.0923794599685"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 95735.48387096774,
            "unit": "ns",
            "range": "± 5856.7435149817275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81310.63829787234,
            "unit": "ns",
            "range": "± 7174.813595197394"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 95156.25,
            "unit": "ns",
            "range": "± 16591.765950869158"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5967.01030927835,
            "unit": "ns",
            "range": "± 1179.3997104357557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 21506.521739130436,
            "unit": "ns",
            "range": "± 1476.244444142933"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "8003de7afe93ec8604207cc01d9e080ea4bd3af4",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:11:57+09:00",
          "tree_id": "27436bd6a662788c77b6f825da86805b1d25ca9b",
          "url": "https://github.com/planetarium/libplanet/commit/8003de7afe93ec8604207cc01d9e080ea4bd3af4"
        },
        "date": 1692602754730,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1099533.3333333333,
            "unit": "ns",
            "range": "± 141702.5057659563"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 1925339.3617021276,
            "unit": "ns",
            "range": "± 149969.81575736456"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1412651.5463917525,
            "unit": "ns",
            "range": "± 167906.93982171227"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 3406306.18556701,
            "unit": "ns",
            "range": "± 268556.25916433265"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 35985.71428571428,
            "unit": "ns",
            "range": "± 2019.9874272750326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 5467115.384615385,
            "unit": "ns",
            "range": "± 43253.72519899001"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 13596068.181818182,
            "unit": "ns",
            "range": "± 291936.7713447613"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 34391153.84615385,
            "unit": "ns",
            "range": "± 448901.3860069652"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 68062313.33333333,
            "unit": "ns",
            "range": "± 1065456.2314980824"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 138385113.33333334,
            "unit": "ns",
            "range": "± 1635962.6322429366"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 3232593.9453125,
            "unit": "ns",
            "range": "± 13330.646729252498"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1033160.1702008928,
            "unit": "ns",
            "range": "± 1738.1044751201841"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 700216.69921875,
            "unit": "ns",
            "range": "± 1411.293714083526"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1998409.9888392857,
            "unit": "ns",
            "range": "± 6697.5892534840095"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 642595.1450892857,
            "unit": "ns",
            "range": "± 1222.584708780959"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 582135.5143229166,
            "unit": "ns",
            "range": "± 673.0283113388717"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2272561.5384615385,
            "unit": "ns",
            "range": "± 148078.4249940482"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 2449522.8260869565,
            "unit": "ns",
            "range": "± 205718.98420480092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3002292.6470588236,
            "unit": "ns",
            "range": "± 141816.4993834149"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 2674189.7435897435,
            "unit": "ns",
            "range": "± 134159.00973635685"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 4279715.555555556,
            "unit": "ns",
            "range": "± 159640.4425228422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 184687.5,
            "unit": "ns",
            "range": "± 12348.41711201941"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 178340,
            "unit": "ns",
            "range": "± 11920.860763733239"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 138161.53846153847,
            "unit": "ns",
            "range": "± 3405.1815720254244"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 2791920,
            "unit": "ns",
            "range": "± 50895.46990786957"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 2565278.947368421,
            "unit": "ns",
            "range": "± 55265.19478284651"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13245.555555555555,
            "unit": "ns",
            "range": "± 3184.9421391075803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61658.163265306124,
            "unit": "ns",
            "range": "± 7604.2300147614915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 47074.1935483871,
            "unit": "ns",
            "range": "± 5184.066374914883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 65277.65957446808,
            "unit": "ns",
            "range": "± 13725.199759639352"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3229.2134831460676,
            "unit": "ns",
            "range": "± 1030.4679262785746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 12791.208791208792,
            "unit": "ns",
            "range": "± 1881.2317685582943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "5f7be7776916fe0376ffda3b2513bce3f47f042f",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T16:42:07+09:00",
          "tree_id": "e0217b1f670bfce114359f4fa1ac51fa09ce59da",
          "url": "https://github.com/planetarium/libplanet/commit/5f7be7776916fe0376ffda3b2513bce3f47f042f"
        },
        "date": 1692604984432,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1484255.6701030927,
            "unit": "ns",
            "range": "± 213016.21611250637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2944952.0833333335,
            "unit": "ns",
            "range": "± 370335.67759652477"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1969208.4210526317,
            "unit": "ns",
            "range": "± 238103.87803822535"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5321191.75257732,
            "unit": "ns",
            "range": "± 559750.8561609692"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63303.092783505155,
            "unit": "ns",
            "range": "± 16190.136230692591"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8916925.806451613,
            "unit": "ns",
            "range": "± 849665.4987473428"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24304976.288659792,
            "unit": "ns",
            "range": "± 2078047.3057543107"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 63642481.481481485,
            "unit": "ns",
            "range": "± 3280712.1968831373"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 126281166.15384616,
            "unit": "ns",
            "range": "± 5842200.484734885"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 248216347.6190476,
            "unit": "ns",
            "range": "± 12719931.643148866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5129393.75,
            "unit": "ns",
            "range": "± 127203.63931096892"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1691986.9453125,
            "unit": "ns",
            "range": "± 43832.09193716435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1234531.15234375,
            "unit": "ns",
            "range": "± 32942.22303622387"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3306839.15307971,
            "unit": "ns",
            "range": "± 159322.8424547448"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1015528.0691964285,
            "unit": "ns",
            "range": "± 16184.625398298205"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 953664.3522135416,
            "unit": "ns",
            "range": "± 15617.138408860617"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3423408.510638298,
            "unit": "ns",
            "range": "± 372145.477294668"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3655940.659340659,
            "unit": "ns",
            "range": "± 327030.2724614758"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4906245.652173913,
            "unit": "ns",
            "range": "± 380707.161671437"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4403729.347826087,
            "unit": "ns",
            "range": "± 385986.4822942064"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7379675,
            "unit": "ns",
            "range": "± 535556.1740648196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 311356.3829787234,
            "unit": "ns",
            "range": "± 42960.80123427006"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 295186.4583333333,
            "unit": "ns",
            "range": "± 48228.59955143818"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 265170.1030927835,
            "unit": "ns",
            "range": "± 52577.01130434855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4515784.444444444,
            "unit": "ns",
            "range": "± 340308.85737369704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4103478.494623656,
            "unit": "ns",
            "range": "± 368168.2988411988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 21954.255319148935,
            "unit": "ns",
            "range": "± 5544.243646479702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96217.39130434782,
            "unit": "ns",
            "range": "± 18716.811557478624"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 98606.12244897959,
            "unit": "ns",
            "range": "± 24402.065217342766"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 125184.26966292135,
            "unit": "ns",
            "range": "± 32951.92744699329"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7286.046511627907,
            "unit": "ns",
            "range": "± 1709.7067371988044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 29311.340206185567,
            "unit": "ns",
            "range": "± 10448.38380931731"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f97ee7be56164bcd96a5cd40508f258c7aeccbdb",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T18:45:49+09:00",
          "tree_id": "97730f03587381befe31dac35c77460ff40aebfd",
          "url": "https://github.com/planetarium/libplanet/commit/f97ee7be56164bcd96a5cd40508f258c7aeccbdb"
        },
        "date": 1692612124760,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1328350,
            "unit": "ns",
            "range": "± 106578.2242242189"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2379479.5454545454,
            "unit": "ns",
            "range": "± 72315.54106039967"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1682568.686868687,
            "unit": "ns",
            "range": "± 140160.4799218794"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4150181.4285714286,
            "unit": "ns",
            "range": "± 123907.20145103984"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 44059.67741935484,
            "unit": "ns",
            "range": "± 1981.2613698215914"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 6977978.571428572,
            "unit": "ns",
            "range": "± 66349.3571770081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18140160,
            "unit": "ns",
            "range": "± 124050.09817466029"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46151206.666666664,
            "unit": "ns",
            "range": "± 282229.65437658003"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 92594300,
            "unit": "ns",
            "range": "± 280153.99336793326"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 183708600,
            "unit": "ns",
            "range": "± 872382.4669096855"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4314480.138221154,
            "unit": "ns",
            "range": "± 4253.868962444888"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1409973.41796875,
            "unit": "ns",
            "range": "± 1389.0078189562691"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1016041.50390625,
            "unit": "ns",
            "range": "± 1335.0047509530866"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2556056.5290178573,
            "unit": "ns",
            "range": "± 2279.585976988368"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 793000.4603794643,
            "unit": "ns",
            "range": "± 753.3792206596455"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 730819.1536458334,
            "unit": "ns",
            "range": "± 1093.3083836879912"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2990984.6153846155,
            "unit": "ns",
            "range": "± 53661.7531752938"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3135650,
            "unit": "ns",
            "range": "± 42186.32662185882"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3912926.086956522,
            "unit": "ns",
            "range": "± 97052.48916011331"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3455711.111111111,
            "unit": "ns",
            "range": "± 114169.04078171049"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5597795.454545454,
            "unit": "ns",
            "range": "± 201106.19774028854"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246232.7868852459,
            "unit": "ns",
            "range": "± 10114.720647180118"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 237020,
            "unit": "ns",
            "range": "± 7183.570999697316"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205087.27272727274,
            "unit": "ns",
            "range": "± 8720.517622792102"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3777407.1428571427,
            "unit": "ns",
            "range": "± 25445.82372521953"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3366364.285714286,
            "unit": "ns",
            "range": "± 24924.983053550513"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18321.11111111111,
            "unit": "ns",
            "range": "± 1267.0849890745599"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 86155,
            "unit": "ns",
            "range": "± 8439.390267122862"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 69552.08333333333,
            "unit": "ns",
            "range": "± 7163.533076656439"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 74072.41379310345,
            "unit": "ns",
            "range": "± 8331.764514183507"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4208.333333333333,
            "unit": "ns",
            "range": "± 561.7016752065322"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 17111.702127659573,
            "unit": "ns",
            "range": "± 1477.9276673396087"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "faadefa3bc8cec6f5f7e0f69ce6f81b433eb933a",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T19:09:14+09:00",
          "tree_id": "8a8d7464f6f88170ae3eb5b2869efec20a206333",
          "url": "https://github.com/planetarium/libplanet/commit/faadefa3bc8cec6f5f7e0f69ce6f81b433eb933a"
        },
        "date": 1692613633192,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1260764.1414141415,
            "unit": "ns",
            "range": "± 95127.52773342573"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2344145.652173913,
            "unit": "ns",
            "range": "± 89760.08196302888"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1714300,
            "unit": "ns",
            "range": "± 246046.16713868224"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4471922.222222222,
            "unit": "ns",
            "range": "± 316383.75869573327"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48456.84210526316,
            "unit": "ns",
            "range": "± 2913.0539882799667"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7174584.615384615,
            "unit": "ns",
            "range": "± 21959.919784076556"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19292464.285714287,
            "unit": "ns",
            "range": "± 231364.59607874608"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 48056950,
            "unit": "ns",
            "range": "± 985940.4092480617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 95247628.57142857,
            "unit": "ns",
            "range": "± 1015474.1894826745"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 188290085.7142857,
            "unit": "ns",
            "range": "± 1552315.9337717816"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4461685.729166667,
            "unit": "ns",
            "range": "± 23446.003411794154"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1391981.5625,
            "unit": "ns",
            "range": "± 6393.167570061987"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1058002.1763392857,
            "unit": "ns",
            "range": "± 3135.0467255955873"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2614028.2366071427,
            "unit": "ns",
            "range": "± 9052.918647158547"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 841306.0611979166,
            "unit": "ns",
            "range": "± 2175.04991260086"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 771343.75,
            "unit": "ns",
            "range": "± 2764.628928356728"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3064409.523809524,
            "unit": "ns",
            "range": "± 72415.18421409908"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3207907.6923076925,
            "unit": "ns",
            "range": "± 42866.001709561184"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3891925,
            "unit": "ns",
            "range": "± 111589.94254760498"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3687827.272727273,
            "unit": "ns",
            "range": "± 130354.64749145527"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 5779165.517241379,
            "unit": "ns",
            "range": "± 168809.6207394211"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 246653.96825396825,
            "unit": "ns",
            "range": "± 10751.906438557402"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233848.07692307694,
            "unit": "ns",
            "range": "± 8806.113972013107"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 205806.89655172414,
            "unit": "ns",
            "range": "± 6041.755364277289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3870386.6666666665,
            "unit": "ns",
            "range": "± 69904.96473955263"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3652318.604651163,
            "unit": "ns",
            "range": "± 135330.1822102308"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18751.020408163266,
            "unit": "ns",
            "range": "± 1670.313563867895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 78230.61224489796,
            "unit": "ns",
            "range": "± 6418.761292376303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 70916.12903225806,
            "unit": "ns",
            "range": "± 6975.754444511807"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 79585.85858585859,
            "unit": "ns",
            "range": "± 16270.826591780702"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4927.319587628866,
            "unit": "ns",
            "range": "± 595.0324141449452"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16934.042553191488,
            "unit": "ns",
            "range": "± 1193.4906958918903"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "6dba091ff32e0e731687b20b5eb15fa068a80a89",
          "message": "feat: fixture for debugging",
          "timestamp": "2023-08-21T19:27:42+09:00",
          "tree_id": "9857b558da3240becfc46c7b1d075d809fb38a4c",
          "url": "https://github.com/planetarium/libplanet/commit/6dba091ff32e0e731687b20b5eb15fa068a80a89"
        },
        "date": 1692614871602,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1656455.6701030927,
            "unit": "ns",
            "range": "± 152798.93308492054"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3078552.7027027025,
            "unit": "ns",
            "range": "± 153425.24325080257"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2015957.2916666667,
            "unit": "ns",
            "range": "± 151816.74669762515"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5223447.826086956,
            "unit": "ns",
            "range": "± 200102.86214748034"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 55201.0989010989,
            "unit": "ns",
            "range": "± 3118.742428376273"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8836750,
            "unit": "ns",
            "range": "± 82962.95997174116"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 24701678.57142857,
            "unit": "ns",
            "range": "± 371535.1400267884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61479484.615384616,
            "unit": "ns",
            "range": "± 389632.43757451256"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123972676.92307693,
            "unit": "ns",
            "range": "± 1860989.8607792242"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 256111687.5,
            "unit": "ns",
            "range": "± 4881954.673130426"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5610693.470982143,
            "unit": "ns",
            "range": "± 77426.28125854683"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1800214.3489583333,
            "unit": "ns",
            "range": "± 27250.02053274945"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1313871.6552734375,
            "unit": "ns",
            "range": "± 25446.54756371819"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3229548.3537946427,
            "unit": "ns",
            "range": "± 55457.7958148253"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1031054.453125,
            "unit": "ns",
            "range": "± 13219.559376053436"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 941294.0962357954,
            "unit": "ns",
            "range": "± 22483.868213880993"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3969400,
            "unit": "ns",
            "range": "± 70727.15178769748"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4178074.193548387,
            "unit": "ns",
            "range": "± 122316.03047772583"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5085523.076923077,
            "unit": "ns",
            "range": "± 206361.97886180168"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4497233.333333333,
            "unit": "ns",
            "range": "± 82973.4524382577"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7310966.666666667,
            "unit": "ns",
            "range": "± 313219.94630276144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 303262.7450980392,
            "unit": "ns",
            "range": "± 11232.70155900732"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 294103.07692307694,
            "unit": "ns",
            "range": "± 12098.165785961746"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 267945.9770114943,
            "unit": "ns",
            "range": "± 14618.941238328374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4938869.230769231,
            "unit": "ns",
            "range": "± 70063.57095066576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4533961.538461538,
            "unit": "ns",
            "range": "± 55104.81737049763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26204.123711340206,
            "unit": "ns",
            "range": "± 2234.526307267251"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101857.14285714286,
            "unit": "ns",
            "range": "± 5274.541851040914"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 85967.41573033707,
            "unit": "ns",
            "range": "± 4758.694800069057"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 100039.17525773196,
            "unit": "ns",
            "range": "± 15318.103102083105"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6395.918367346939,
            "unit": "ns",
            "range": "± 904.7319324286447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24577.17391304348,
            "unit": "ns",
            "range": "± 2591.495103317925"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "committer": {
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f9522219438a8eab92facec06ddd7be3cdd834aa",
          "message": "fix: remove unusual timeout test",
          "timestamp": "2023-08-21T20:15:05+09:00",
          "tree_id": "b4bc4ed077e24b593d50ad16cd321b97a132dd6f",
          "url": "https://github.com/planetarium/libplanet/commit/f9522219438a8eab92facec06ddd7be3cdd834aa"
        },
        "date": 1692617731996,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1367320,
            "unit": "ns",
            "range": "± 220766.31989504196"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2618015.625,
            "unit": "ns",
            "range": "± 328053.176154215"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1728968.686868687,
            "unit": "ns",
            "range": "± 298897.38859254314"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4838022,
            "unit": "ns",
            "range": "± 684004.1794396502"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 51903.1914893617,
            "unit": "ns",
            "range": "± 11916.09963725917"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7208327.551020408,
            "unit": "ns",
            "range": "± 561234.5370001526"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18510413.541666668,
            "unit": "ns",
            "range": "± 1877157.4405338343"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 47140824.74226804,
            "unit": "ns",
            "range": "± 3910127.2285627876"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 98723914.14141414,
            "unit": "ns",
            "range": "± 7994855.502810441"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 191524616.84210527,
            "unit": "ns",
            "range": "± 10620968.461007373"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4590357.432291667,
            "unit": "ns",
            "range": "± 231064.59073555996"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1472988.8873922413,
            "unit": "ns",
            "range": "± 42216.37048268024"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1046776.921875,
            "unit": "ns",
            "range": "± 27751.065103674893"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2732529.359375,
            "unit": "ns",
            "range": "± 59471.49441296377"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 844207.5334821428,
            "unit": "ns",
            "range": "± 12736.22052439435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 846782.7090992647,
            "unit": "ns",
            "range": "± 17281.518407412488"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3039376.086956522,
            "unit": "ns",
            "range": "± 257661.8238424903"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3255142.7083333335,
            "unit": "ns",
            "range": "± 352942.1490525761"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4335597.959183673,
            "unit": "ns",
            "range": "± 475305.11437219934"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3606652.0408163266,
            "unit": "ns",
            "range": "± 349873.204788223"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6286699,
            "unit": "ns",
            "range": "± 806675.5502259401"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 281544.08602150535,
            "unit": "ns",
            "range": "± 32921.74998771161"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 283504.1666666667,
            "unit": "ns",
            "range": "± 43073.33994520378"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 216169.1489361702,
            "unit": "ns",
            "range": "± 29091.63138210374"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3937218.556701031,
            "unit": "ns",
            "range": "± 334600.91039235855"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3770390,
            "unit": "ns",
            "range": "± 414854.5432078598"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 27516,
            "unit": "ns",
            "range": "± 9318.052642612889"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 97096.39175257731,
            "unit": "ns",
            "range": "± 14800.52125951193"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 81920.83333333333,
            "unit": "ns",
            "range": "± 20378.817261618893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 92968.0412371134,
            "unit": "ns",
            "range": "± 21928.8886060895"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5296.6292134831465,
            "unit": "ns",
            "range": "± 947.658530537509"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 25323.23232323232,
            "unit": "ns",
            "range": "± 10527.154666092949"
          }
        ]
      }
    ]
  }
}