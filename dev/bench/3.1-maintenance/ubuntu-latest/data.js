window.BENCHMARK_DATA = {
  "lastUpdate": 1691581124944,
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
      },
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
          "id": "e7d8fe2b4efcbda008fa422ca3ad0ed14890a669",
          "message": "Merge pull request #3360 from moreal/cherry-pick-network-bug\n\nCherry-pick #3353 to 3.1.1 version",
          "timestamp": "2023-08-09T19:58:55+09:00",
          "tree_id": "e27048bd25a04e78434e3491b575a7591c39682b",
          "url": "https://github.com/planetarium/libplanet/commit/e7d8fe2b4efcbda008fa422ca3ad0ed14890a669"
        },
        "date": 1691579515387,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 3270354.1142857145,
            "unit": "ns",
            "range": "± 106496.90533359931"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 3400667.5714285714,
            "unit": "ns",
            "range": "± 75710.15649671543"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 4186021.8,
            "unit": "ns",
            "range": "± 45918.34889266568"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 3711371.195652174,
            "unit": "ns",
            "range": "± 123921.24404307395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 6338508.382352941,
            "unit": "ns",
            "range": "± 196839.1961290438"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 7584830.8,
            "unit": "ns",
            "range": "± 21666.88445597501"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 19670009,
            "unit": "ns",
            "range": "± 122963.79548468727"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 49846330,
            "unit": "ns",
            "range": "± 342914.39671793976"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 99352081.2,
            "unit": "ns",
            "range": "± 656671.6608834716"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 200586011.2,
            "unit": "ns",
            "range": "± 1208558.7808550077"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 46512.38271604938,
            "unit": "ns",
            "range": "± 2444.8660166147206"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 6163207.024479167,
            "unit": "ns",
            "range": "± 21650.261191816786"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2016577.8846153845,
            "unit": "ns",
            "range": "± 4796.683263517827"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1376967.7536057692,
            "unit": "ns",
            "range": "± 511.2468934259931"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2554234.2717633927,
            "unit": "ns",
            "range": "± 3295.740038900544"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 829853.9366536458,
            "unit": "ns",
            "range": "± 495.19791707500383"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 747801.7035757211,
            "unit": "ns",
            "range": "± 377.9094582315566"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 279448.64864864864,
            "unit": "ns",
            "range": "± 9488.285807645529"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 267743.75,
            "unit": "ns",
            "range": "± 10457.856788894236"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 226111.53846153847,
            "unit": "ns",
            "range": "± 1328.8707370912477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4210201.071428572,
            "unit": "ns",
            "range": "± 30094.569025667395"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 3775323.6666666665,
            "unit": "ns",
            "range": "± 45160.46374819883"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 18061.702127659573,
            "unit": "ns",
            "range": "± 1311.824337750182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 84711.55128205128,
            "unit": "ns",
            "range": "± 4379.250059285447"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 71641.17647058824,
            "unit": "ns",
            "range": "± 1383.410108901827"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 84789.80612244898,
            "unit": "ns",
            "range": "± 11762.079387537095"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 4473.19587628866,
            "unit": "ns",
            "range": "± 502.6006250654203"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 16520.454545454544,
            "unit": "ns",
            "range": "± 1125.2748416162622"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1326992.4086021506,
            "unit": "ns",
            "range": "± 75032.3651223455"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 2567765.5588235296,
            "unit": "ns",
            "range": "± 82874.29194622024"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 1703551.322580645,
            "unit": "ns",
            "range": "± 98203.13299672812"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 4730356.933333334,
            "unit": "ns",
            "range": "± 139991.46025701694"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69bac89710a373b9bf4405b81353d1f99b79f3eb",
          "message": "Merge pull request #3363 from riemannulus/3.1-maintenance\n\n🚀  Release 3.1.1",
          "timestamp": "2023-08-09T20:17:25+09:00",
          "tree_id": "4275059f286345ce564096eb8fa9e68fb3c9d947",
          "url": "https://github.com/planetarium/libplanet/commit/69bac89710a373b9bf4405b81353d1f99b79f3eb"
        },
        "date": 1691581091161,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockEmpty",
            "value": 4568170.957894737,
            "unit": "ns",
            "range": "± 370146.713504826"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionNoAction",
            "value": 4733479.895833333,
            "unit": "ns",
            "range": "± 385110.3308167395"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsNoAction",
            "value": 6144047.105263158,
            "unit": "ns",
            "range": "± 363792.40227508027"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockOneTransactionWithActions",
            "value": 5418851.144329897,
            "unit": "ns",
            "range": "± 351749.83755800535"
          },
          {
            "name": "Libplanet.Benchmarks.ProposeBlock.ProposeBlockTenTransactionsWithActions",
            "value": 9207601.075268818,
            "unit": "ns",
            "range": "± 581717.7351922127"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 4)",
            "value": 10934265.835051546,
            "unit": "ns",
            "range": "± 736687.1577931911"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 10)",
            "value": 29720662.172413792,
            "unit": "ns",
            "range": "± 795394.9489034662"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 25)",
            "value": 76198861.82857142,
            "unit": "ns",
            "range": "± 2473702.5426341174"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 50)",
            "value": 152199812.6551724,
            "unit": "ns",
            "range": "± 4441936.019917298"
          },
          {
            "name": "Libplanet.Benchmarks.Commit.DecodeBlockCommit(ValidatorSize: 100)",
            "value": 301078633.6875,
            "unit": "ns",
            "range": "± 9249419.17510096"
          },
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 65245.77659574468,
            "unit": "ns",
            "range": "± 12108.223824135412"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 7713584.944791666,
            "unit": "ns",
            "range": "± 118707.51104935636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2491585.3782958984,
            "unit": "ns",
            "range": "± 76322.76206616136"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1844984.4700520833,
            "unit": "ns",
            "range": "± 23733.435195157435"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3452143.7614397323,
            "unit": "ns",
            "range": "± 25876.53104548538"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1144515.0544270833,
            "unit": "ns",
            "range": "± 21310.67055728602"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 1057353.1140407985,
            "unit": "ns",
            "range": "± 22254.395157503608"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 409542.5106382979,
            "unit": "ns",
            "range": "± 58394.90215004037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 379530.71428571426,
            "unit": "ns",
            "range": "± 36272.55463211383"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 342638.1182795699,
            "unit": "ns",
            "range": "± 39889.022200690284"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 5766148.282608695,
            "unit": "ns",
            "range": "± 393310.5573164247"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 5351301.71875,
            "unit": "ns",
            "range": "± 371905.1284006008"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 23586.585365853658,
            "unit": "ns",
            "range": "± 2892.5409477824182"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 121238.95555555556,
            "unit": "ns",
            "range": "± 16144.897210282474"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 136166.37234042553,
            "unit": "ns",
            "range": "± 19436.237104281536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 139109.63829787233,
            "unit": "ns",
            "range": "± 28345.826582822803"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7725.806451612903,
            "unit": "ns",
            "range": "± 1404.8753020484594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 23901.188235294117,
            "unit": "ns",
            "range": "± 4113.523111970697"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionNoAction",
            "value": 1864004.4270833333,
            "unit": "ns",
            "range": "± 219070.3119222706"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsNoAction",
            "value": 3735106.737373737,
            "unit": "ns",
            "range": "± 349596.02243997104"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockOneTransactionWithActions",
            "value": 2349652.565217391,
            "unit": "ns",
            "range": "± 196077.11944428174"
          },
          {
            "name": "Libplanet.Benchmarks.AppendBlock.AppendBlockTenTransactionsWithActions",
            "value": 6983832.494736842,
            "unit": "ns",
            "range": "± 553671.7307615083"
          }
        ]
      }
    ]
  }
}