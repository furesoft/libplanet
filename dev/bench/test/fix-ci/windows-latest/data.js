window.BENCHMARK_DATA = {
  "lastUpdate": 1692593107211,
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
      }
    ]
  }
}