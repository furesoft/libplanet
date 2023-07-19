window.BENCHMARK_DATA = {
  "lastUpdate": 1689755982050,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
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
          "id": "3057b13bde32b53348fce9975f6d496c22c86c20",
          "message": "Merge pull request #3316 from OnedgeLee/release/2.6.0\n\n🚀 Release 3.0.0",
          "timestamp": "2023-07-19T16:32:06+09:00",
          "tree_id": "3b62a9dc282845b24f541286df67c4900303950b",
          "url": "https://github.com/planetarium/libplanet/commit/3057b13bde32b53348fce9975f6d496c22c86c20"
        },
        "date": 1689753539379,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1615808.3333333333,
            "unit": "ns",
            "range": "± 137823.596380657"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3283615.3846153845,
            "unit": "ns",
            "range": "± 301617.00840748975"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2336561.4583333335,
            "unit": "ns",
            "range": "± 220776.97599723222"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6344151.0869565215,
            "unit": "ns",
            "range": "± 414398.1107276307"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 63768.42105263158,
            "unit": "ns",
            "range": "± 11323.091292424224"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 9391988.659793815,
            "unit": "ns",
            "range": "± 1169750.8727713039"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23523633.333333332,
            "unit": "ns",
            "range": "± 1078193.167054898"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 61563971.428571425,
            "unit": "ns",
            "range": "± 1408539.039268297"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 123962536.36363636,
            "unit": "ns",
            "range": "± 2672830.270482059"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 239425277.7777778,
            "unit": "ns",
            "range": "± 10933772.338839084"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5726269.03492647,
            "unit": "ns",
            "range": "± 308730.7737395401"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1888205.7164634147,
            "unit": "ns",
            "range": "± 67189.7623637861"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1381916.6276041667,
            "unit": "ns",
            "range": "± 18555.360767840648"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2995350.4516601562,
            "unit": "ns",
            "range": "± 91882.77107718901"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1022387.5128495066,
            "unit": "ns",
            "range": "± 35012.504771720225"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 932034.1276041666,
            "unit": "ns",
            "range": "± 13271.88076783367"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3417811.3402061854,
            "unit": "ns",
            "range": "± 359892.68275310454"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3633423.1578947366,
            "unit": "ns",
            "range": "± 324936.56220561994"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5228660.638297873,
            "unit": "ns",
            "range": "± 341284.48613584467"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4783282.417582418,
            "unit": "ns",
            "range": "± 363959.59714519186"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7956918.085106383,
            "unit": "ns",
            "range": "± 573684.2796174258"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 330316.84210526315,
            "unit": "ns",
            "range": "± 41920.217162401364"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 313117.8947368421,
            "unit": "ns",
            "range": "± 42486.94412466765"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 284590.72164948453,
            "unit": "ns",
            "range": "± 44594.02305446472"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4377763.541666667,
            "unit": "ns",
            "range": "± 380584.5487694704"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4007272.6315789474,
            "unit": "ns",
            "range": "± 312430.26334810635"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 29367.525773195877,
            "unit": "ns",
            "range": "± 10450.98689826785"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 101035.71428571429,
            "unit": "ns",
            "range": "± 17498.44912126456"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 110912.5,
            "unit": "ns",
            "range": "± 23254.220895864997"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 135324.48979591837,
            "unit": "ns",
            "range": "± 30152.34535072487"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5248.837209302325,
            "unit": "ns",
            "range": "± 1036.594445178851"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 26737.755102040817,
            "unit": "ns",
            "range": "± 9189.36538318029"
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
          "id": "2944cbdfc0856cfea856725e91ccfa35e9d22e97",
          "message": "Merge pull request #3317 from OnedgeLee/release/3.0.0\n\nRelease 3.0.0",
          "timestamp": "2023-07-19T16:48:08+09:00",
          "tree_id": "4806b239338e622d86b96616645a9fd8f178931b",
          "url": "https://github.com/planetarium/libplanet/commit/2944cbdfc0856cfea856725e91ccfa35e9d22e97"
        },
        "date": 1689754198751,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1631614.2857142857,
            "unit": "ns",
            "range": "± 151905.57634172402"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2927616.1616161615,
            "unit": "ns",
            "range": "± 205490.82143813762"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1952541.237113402,
            "unit": "ns",
            "range": "± 151765.02654362415"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5691570.833333333,
            "unit": "ns",
            "range": "± 383929.4770538949"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 52286.81318681319,
            "unit": "ns",
            "range": "± 3208.018037882538"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8270060,
            "unit": "ns",
            "range": "± 154404.48642630636"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 23227740,
            "unit": "ns",
            "range": "± 337040.24092087283"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 58138177.777777776,
            "unit": "ns",
            "range": "± 1241863.8779036251"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 114587768.96551724,
            "unit": "ns",
            "range": "± 3289215.980953456"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 236697547.2222222,
            "unit": "ns",
            "range": "± 7759116.38428302"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5730309.791666667,
            "unit": "ns",
            "range": "± 65170.35333608701"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1886696.1328125,
            "unit": "ns",
            "range": "± 24027.20769032853"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1397655.5772569445,
            "unit": "ns",
            "range": "± 25323.96559018234"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3094307.1614583335,
            "unit": "ns",
            "range": "± 34665.835499213936"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 994477.3995535715,
            "unit": "ns",
            "range": "± 11686.850690530857"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 902269.8046875,
            "unit": "ns",
            "range": "± 11117.83913595546"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3840082.6530612246,
            "unit": "ns",
            "range": "± 260211.40098223236"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3976350,
            "unit": "ns",
            "range": "± 183683.6695958312"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4771033.333333333,
            "unit": "ns",
            "range": "± 155954.7718319092"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4467077.777777778,
            "unit": "ns",
            "range": "± 74916.49119916635"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 7465180.645161291,
            "unit": "ns",
            "range": "± 338381.3557427936"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 302622.5806451613,
            "unit": "ns",
            "range": "± 9179.422991213169"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 300616.2162162162,
            "unit": "ns",
            "range": "± 10101.96662683706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 269375.9493670886,
            "unit": "ns",
            "range": "± 13955.397955628767"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4824280.4878048785,
            "unit": "ns",
            "range": "± 170997.8935828044"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4440126.315789473,
            "unit": "ns",
            "range": "± 96450.50453243572"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22310.21505376344,
            "unit": "ns",
            "range": "± 1858.1278437405658"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 96036.84210526316,
            "unit": "ns",
            "range": "± 7528.047592829791"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 84587.8947368421,
            "unit": "ns",
            "range": "± 6735.949583934877"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 108610.30927835051,
            "unit": "ns",
            "range": "± 16758.850177692697"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 6060,
            "unit": "ns",
            "range": "± 772.3134629840289"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22006.382978723403,
            "unit": "ns",
            "range": "± 2965.130997147478"
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
          "id": "55e702f061b2cec4b9aea6c7cb7fb89f796af97e",
          "message": "Merge pull request #3319 from OnedgeLee/prepare/3.0.1\n\n🔧 Prepare 3.0.1",
          "timestamp": "2023-07-19T17:22:11+09:00",
          "tree_id": "58becc2634fa58da975dbbfce9e5efc137e1e102",
          "url": "https://github.com/planetarium/libplanet/commit/55e702f061b2cec4b9aea6c7cb7fb89f796af97e"
        },
        "date": 1689755925711,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1422337,
            "unit": "ns",
            "range": "± 138911.46563130914"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2602371.212121212,
            "unit": "ns",
            "range": "± 122477.91356956694"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1768989.6907216494,
            "unit": "ns",
            "range": "± 110817.2345618903"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4906910.606060606,
            "unit": "ns",
            "range": "± 230773.2181026932"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 48942.1686746988,
            "unit": "ns",
            "range": "± 2609.9304019282195"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7049225,
            "unit": "ns",
            "range": "± 17152.901954320892"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19776707.14285714,
            "unit": "ns",
            "range": "± 341396.15487061295"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49874789.473684214,
            "unit": "ns",
            "range": "± 1079725.4326369462"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 100267878.26086956,
            "unit": "ns",
            "range": "± 2470470.977540429"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 198383893.33333334,
            "unit": "ns",
            "range": "± 3513532.5023332825"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 4858410.989583333,
            "unit": "ns",
            "range": "± 19538.581502250127"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1533482.9296875,
            "unit": "ns",
            "range": "± 4700.438880604322"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1217480.5908203125,
            "unit": "ns",
            "range": "± 22591.941929890596"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2692912.409855769,
            "unit": "ns",
            "range": "± 18027.259716868237"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 840760.5119977678,
            "unit": "ns",
            "range": "± 5062.08657928419"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 791178.6057692308,
            "unit": "ns",
            "range": "± 8554.354748014926"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3180390,
            "unit": "ns",
            "range": "± 94923.80101955462"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3316884.210526316,
            "unit": "ns",
            "range": "± 111241.85552043868"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4080457.1428571427,
            "unit": "ns",
            "range": "± 115001.97881895395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3714233.3333333335,
            "unit": "ns",
            "range": "± 164329.6703732219"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6230317.948717949,
            "unit": "ns",
            "range": "± 215033.91516076186"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 266658.9743589744,
            "unit": "ns",
            "range": "± 7974.258518531856"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 254582.45614035087,
            "unit": "ns",
            "range": "± 10936.049868064427"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 223890.14084507042,
            "unit": "ns",
            "range": "± 10772.241508745356"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3990033.3333333335,
            "unit": "ns",
            "range": "± 37045.312139529226"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3744550,
            "unit": "ns",
            "range": "± 45068.46074414073"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 20369.38775510204,
            "unit": "ns",
            "range": "± 1898.3122272201338"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 87403.2967032967,
            "unit": "ns",
            "range": "± 5248.141481609372"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 72421.42857142857,
            "unit": "ns",
            "range": "± 2628.2272346988084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 103924.19354838709,
            "unit": "ns",
            "range": "± 14138.59890378576"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5769.791666666667,
            "unit": "ns",
            "range": "± 1019.7130444308617"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 19035.555555555555,
            "unit": "ns",
            "range": "± 1594.0416522204594"
          }
        ]
      }
    ]
  }
}