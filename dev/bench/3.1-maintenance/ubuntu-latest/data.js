window.BENCHMARK_DATA = {
  "lastUpdate": 1690509323958,
  "repoUrl": "https://github.com/planetarium/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "ilgyu@planetariumhq.com",
            "name": "ilgyu",
            "username": "OnedgeLee"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cfd938b2104134ff6813217bc9fb3a0c4a08b99",
          "message": "Merge pull request #3340 from greymistcube/prepare/3.1.1\n\n🔧 Prepare 3.1.1",
          "timestamp": "2023-07-28T10:37:50+09:00",
          "tree_id": "6ee5a724e33759b64b7913963c94e04ac6daa09c",
          "url": "https://github.com/planetarium/libplanet/commit/1cfd938b2104134ff6813217bc9fb3a0c4a08b99"
        },
        "date": 1690509209219,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 308285.4948453608,
            "unit": "ns",
            "range": "± 44667.70014043605"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 279452.376344086,
            "unit": "ns",
            "range": "± 31183.471497041915"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 242298.52747252746,
            "unit": "ns",
            "range": "± 28097.175547390947"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3977097.0212765955,
            "unit": "ns",
            "range": "± 231658.78386067296"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3649443.2210526317,
            "unit": "ns",
            "range": "± 251201.06422918706"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 26968.87,
            "unit": "ns",
            "range": "± 10478.30365700403"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 94110.20833333333,
            "unit": "ns",
            "range": "± 16886.12803950825"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 88621.6170212766,
            "unit": "ns",
            "range": "± 14837.595419414993"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 112206.40425531915,
            "unit": "ns",
            "range": "± 20472.168245010707"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4870.707317073171,
            "unit": "ns",
            "range": "± 806.3592999938305"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 24126.161616161615,
            "unit": "ns",
            "range": "± 9629.580411003433"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1382372.8510638298,
            "unit": "ns",
            "range": "± 187442.05574580678"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2700167.9793814435,
            "unit": "ns",
            "range": "± 231956.91068233183"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1749941.4845360825,
            "unit": "ns",
            "range": "± 190904.4995964995"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5234887.826530612,
            "unit": "ns",
            "range": "± 506519.73653988406"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5878083.1484375,
            "unit": "ns",
            "range": "± 101853.44730633617"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1819521.6183035714,
            "unit": "ns",
            "range": "± 23407.122079064993"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1354149.430480957,
            "unit": "ns",
            "range": "± 42068.07021116209"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2578229.3326480263,
            "unit": "ns",
            "range": "± 56082.072764770135"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 832406.1469401042,
            "unit": "ns",
            "range": "± 9431.63584975913"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 773336.6622924805,
            "unit": "ns",
            "range": "± 14627.854585037445"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3183890.4591836734,
            "unit": "ns",
            "range": "± 351276.4115071544"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3320652.787234043,
            "unit": "ns",
            "range": "± 297674.07893999"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4212913.107526882,
            "unit": "ns",
            "range": "± 373225.8573749268"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3741284.12371134,
            "unit": "ns",
            "range": "± 417591.35978178616"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6705644.958333333,
            "unit": "ns",
            "range": "± 579409.3801125586"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8006018.263888889,
            "unit": "ns",
            "range": "± 394447.0683476863"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 20362479.108433735,
            "unit": "ns",
            "range": "± 1080347.6683615306"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 52893735.061855674,
            "unit": "ns",
            "range": "± 4010705.6381442393"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 96644734.58333333,
            "unit": "ns",
            "range": "± 2439958.319306329"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 194117314.625,
            "unit": "ns",
            "range": "± 3731493.1646782523"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 56076.010416666664,
            "unit": "ns",
            "range": "± 12988.603654536048"
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
          "id": "a987187212c0fd2aea272fe3a12bb3c27697fde3",
          "message": "Merge pull request #3336 from greymistcube/release/3.1.0\n\n🚀 Release 3.1.0",
          "timestamp": "2023-07-27T18:11:36+09:00",
          "tree_id": "9f3dede0500307e4f6c807fbded5e335a1915001",
          "url": "https://github.com/planetarium/libplanet/commit/a987187212c0fd2aea272fe3a12bb3c27697fde3"
        },
        "date": 1690509295551,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 350141.53684210527,
            "unit": "ns",
            "range": "± 39149.74926710029"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 355821.97959183675,
            "unit": "ns",
            "range": "± 48947.16281784988"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 295499.08247422683,
            "unit": "ns",
            "range": "± 50123.471528373084"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4765743.329896907,
            "unit": "ns",
            "range": "± 531992.2278639416"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 4258210.548387097,
            "unit": "ns",
            "range": "± 364022.98950399307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 33071.278350515466,
            "unit": "ns",
            "range": "± 10681.724753192428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 117813.41052631578,
            "unit": "ns",
            "range": "± 19130.504378517668"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 121621.30612244898,
            "unit": "ns",
            "range": "± 25707.05058222902"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 129511.75789473685,
            "unit": "ns",
            "range": "± 28326.56129505422"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5521.0123456790125,
            "unit": "ns",
            "range": "± 1130.895878207043"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 32061.939393939392,
            "unit": "ns",
            "range": "± 11730.384764831175"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1485671.7835051545,
            "unit": "ns",
            "range": "± 186663.3264291861"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3112854.6363636362,
            "unit": "ns",
            "range": "± 341521.4017368385"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2007211.2886597938,
            "unit": "ns",
            "range": "± 273802.3398876596"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 5775307.375,
            "unit": "ns",
            "range": "± 712715.0922108948"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6614251.7667682925,
            "unit": "ns",
            "range": "± 237909.57726542887"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2259465.5365998643,
            "unit": "ns",
            "range": "± 87014.69534499256"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1511969.874375,
            "unit": "ns",
            "range": "± 40126.224027383556"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3005912.400607639,
            "unit": "ns",
            "range": "± 62414.53200196911"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 928679.1229580966,
            "unit": "ns",
            "range": "± 22209.765943730068"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 933367.5493164062,
            "unit": "ns",
            "range": "± 20577.36930309485"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3845159.3092783503,
            "unit": "ns",
            "range": "± 384679.4589976656"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4007009.9368421054,
            "unit": "ns",
            "range": "± 374976.7197261891"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 5292619.144329897,
            "unit": "ns",
            "range": "± 388089.09306049894"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 4578288.608247423,
            "unit": "ns",
            "range": "± 486881.2510018817"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 8255953.010204081,
            "unit": "ns",
            "range": "± 692645.4213525485"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 8698298.122448979,
            "unit": "ns",
            "range": "± 329717.01452310034"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 25628996.020833332,
            "unit": "ns",
            "range": "± 1425376.9257777617"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 68618925.33333333,
            "unit": "ns",
            "range": "± 3188490.4282135884"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 135324280.96296296,
            "unit": "ns",
            "range": "± 5670854.211979081"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 263813659.86842105,
            "unit": "ns",
            "range": "± 8876253.366132949"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65988.82978723405,
            "unit": "ns",
            "range": "± 16759.181186300008"
          }
        ]
      }
    ]
  }
}