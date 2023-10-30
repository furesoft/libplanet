window.BENCHMARK_DATA = {
  "lastUpdate": 1698646946735,
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
            "email": "iam@suho.io",
            "name": "Lee, Suho",
            "username": "riemannulus"
          },
          "distinct": true,
          "id": "f795413e96b97bbafadb36021d87a6c60f43a8a4",
          "message": "Add composite action netcore_test_base",
          "timestamp": "2023-10-30T15:07:18+09:00",
          "tree_id": "7248fb19f55fa82e2171fa9a271971459c665e42",
          "url": "https://github.com/planetarium/libplanet/commit/f795413e96b97bbafadb36021d87a6c60f43a8a4"
        },
        "date": 1698646897492,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8170017.666666667,
            "unit": "ns",
            "range": "± 212129.54386815184"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20245178.893939395,
            "unit": "ns",
            "range": "± 910563.1187810673"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 50419250.233333334,
            "unit": "ns",
            "range": "± 2152546.440962274"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 103034946.86206897,
            "unit": "ns",
            "range": "± 4434971.93189309"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 205282699.7142857,
            "unit": "ns",
            "range": "± 2997407.1690931143"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 36891.0632183908,
            "unit": "ns",
            "range": "± 4182.87542609857"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 268176.4789473684,
            "unit": "ns",
            "range": "± 29216.784557736144"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 266803.1157894737,
            "unit": "ns",
            "range": "± 29340.486135315867"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 249859.0344827586,
            "unit": "ns",
            "range": "± 14149.747029909231"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3972813.2666666666,
            "unit": "ns",
            "range": "± 115681.05572492557"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3596964.4615384615,
            "unit": "ns",
            "range": "± 213948.5807606485"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15750.22340425532,
            "unit": "ns",
            "range": "± 2936.6366153891427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 64463.72340425532,
            "unit": "ns",
            "range": "± 5730.87784077605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 61906.12790697674,
            "unit": "ns",
            "range": "± 4798.222026215451"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 67314.33720930232,
            "unit": "ns",
            "range": "± 9585.59406224406"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4579.032608695652,
            "unit": "ns",
            "range": "± 989.7827761584523"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 14471.96590909091,
            "unit": "ns",
            "range": "± 2240.138939907259"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1542521.0842105264,
            "unit": "ns",
            "range": "± 300527.44452710607"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2462858.0760869565,
            "unit": "ns",
            "range": "± 262334.3680710058"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1746599.847368421,
            "unit": "ns",
            "range": "± 140187.14240893244"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 8079597.353658536,
            "unit": "ns",
            "range": "± 690642.415572652"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2924328,
            "unit": "ns",
            "range": "± 91613.63361452892"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3042294.346153846,
            "unit": "ns",
            "range": "± 103418.36489194304"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3745998.121212121,
            "unit": "ns",
            "range": "± 176530.58981541242"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3738082.595959596,
            "unit": "ns",
            "range": "± 302711.91152038414"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 12855429.072916666,
            "unit": "ns",
            "range": "± 1844515.6580958234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4326641.739955357,
            "unit": "ns",
            "range": "± 46790.09525468642"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1358369.9520833334,
            "unit": "ns",
            "range": "± 7776.227333400817"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 872118.6514322917,
            "unit": "ns",
            "range": "± 8100.746747125041"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 1950933.66015625,
            "unit": "ns",
            "range": "± 63151.083401823795"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 629417.4053344727,
            "unit": "ns",
            "range": "± 9470.554476270994"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 559233.7995256697,
            "unit": "ns",
            "range": "± 5358.888923202321"
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
          "id": "05d827971b5b36003e822abe7b362f39382a12cc",
          "message": "Add composite action macos_netcore_test_base",
          "timestamp": "2023-10-30T15:07:20+09:00",
          "tree_id": "f76f6128e625e75c530386bbfd01f3cbfe6cd056",
          "url": "https://github.com/planetarium/libplanet/commit/05d827971b5b36003e822abe7b362f39382a12cc"
        },
        "date": 1698646891310,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7642566.357142857,
            "unit": "ns",
            "range": "± 34696.39475364982"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 18649408,
            "unit": "ns",
            "range": "± 138857.6628078355"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 46585783.928571425,
            "unit": "ns",
            "range": "± 269254.36988939095"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 94386016.37037037,
            "unit": "ns",
            "range": "± 2481456.0550726005"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 192829728.52631578,
            "unit": "ns",
            "range": "± 4114663.1586289103"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 41878.48936170213,
            "unit": "ns",
            "range": "± 9321.92927156024"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 229573.29292929292,
            "unit": "ns",
            "range": "± 18946.04642471887"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 233978.87634408602,
            "unit": "ns",
            "range": "± 25078.93658288893"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 201136.98969072165,
            "unit": "ns",
            "range": "± 15987.449735062266"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3746972.3666666667,
            "unit": "ns",
            "range": "± 54319.39001191625"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3483122.653846154,
            "unit": "ns",
            "range": "± 29603.327757326413"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 13182.582474226803,
            "unit": "ns",
            "range": "± 1378.4030892523713"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 61310.46703296703,
            "unit": "ns",
            "range": "± 7279.336160897196"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 56379.57865168539,
            "unit": "ns",
            "range": "± 5626.75993523303"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 60747.717391304344,
            "unit": "ns",
            "range": "± 7327.101395798314"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 3678.336956521739,
            "unit": "ns",
            "range": "± 717.1125906231154"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 13028.98947368421,
            "unit": "ns",
            "range": "± 1735.9452357693042"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1238050.097826087,
            "unit": "ns",
            "range": "± 171570.94817071778"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2775153.5416666665,
            "unit": "ns",
            "range": "± 167624.92876173637"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2033040.5773195876,
            "unit": "ns",
            "range": "± 150862.21797055937"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 9437189.81707317,
            "unit": "ns",
            "range": "± 879853.2581631542"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 2902869.575,
            "unit": "ns",
            "range": "± 102667.98765148019"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3005597.11627907,
            "unit": "ns",
            "range": "± 162971.34400287666"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 3582802.6923076925,
            "unit": "ns",
            "range": "± 86901.38366850978"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3520081.5833333335,
            "unit": "ns",
            "range": "± 137832.40424667357"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 11072637.197802197,
            "unit": "ns",
            "range": "± 1019490.3500405181"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4423661.545774648,
            "unit": "ns",
            "range": "± 215361.65564007504"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1361211.126885776,
            "unit": "ns",
            "range": "± 39271.44534500838"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 891151.0967407227,
            "unit": "ns",
            "range": "± 17182.630652323016"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2023028.9747596155,
            "unit": "ns",
            "range": "± 19470.529315509502"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 627778.8644831731,
            "unit": "ns",
            "range": "± 5512.344886569554"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 572559.2378305289,
            "unit": "ns",
            "range": "± 5569.5846857847555"
          }
        ]
      }
    ]
  }
}